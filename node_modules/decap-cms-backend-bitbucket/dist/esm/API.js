import flow from 'lodash/flow';
import get from 'lodash/get';
import { localForage, unsentRequest, responseParser, then, basename, Cursor, APIError, readFile, CMS_BRANCH_PREFIX, generateContentKey, labelToStatus, isCMSLabel, EditorialWorkflowError, statusToLabel, DEFAULT_PR_BODY, MERGE_COMMIT_MESSAGE, PreviewState, parseContentKey, branchFromContentKey, requestWithBackoff, readFileMetadata, throwOnConflictingBranches } from 'decap-cms-lib-util';
import { dirname } from 'path';
import { oneLine } from 'common-tags';
import { parse } from 'what-the-diff';
var BitBucketPullRequestState = /*#__PURE__*/function (BitBucketPullRequestState) {
  BitBucketPullRequestState["MERGED"] = "MERGED";
  BitBucketPullRequestState["SUPERSEDED"] = "SUPERSEDED";
  BitBucketPullRequestState["OPEN"] = "OPEN";
  BitBucketPullRequestState["DECLINED"] = "DECLINED";
  return BitBucketPullRequestState;
}(BitBucketPullRequestState || {});
var BitBucketPullRequestStatusState = /*#__PURE__*/function (BitBucketPullRequestStatusState) {
  BitBucketPullRequestStatusState["Successful"] = "SUCCESSFUL";
  BitBucketPullRequestStatusState["Failed"] = "FAILED";
  BitBucketPullRequestStatusState["InProgress"] = "INPROGRESS";
  BitBucketPullRequestStatusState["Stopped"] = "STOPPED";
  return BitBucketPullRequestStatusState;
}(BitBucketPullRequestStatusState || {});
export const API_NAME = 'Bitbucket';
const APPLICATION_JSON = 'application/json; charset=utf-8';
function replace404WithEmptyResponse(err) {
  if (err && err.status === 404) {
    console.log('This 404 was expected and handled appropriately.');
    return {
      size: 0,
      values: []
    };
  } else {
    return Promise.reject(err);
  }
}
export default class API {
  constructor(config) {
    this.apiRoot = config.apiRoot || 'https://api.bitbucket.org/2.0';
    this.branch = config.branch || 'master';
    this.repo = config.repo || '';
    this.requestFunction = config.requestFunction || unsentRequest.performRequest;
    // Allow overriding this.hasWriteAccess
    this.hasWriteAccess = config.hasWriteAccess || this.hasWriteAccess;
    this.repoURL = this.repo ? `/repositories/${this.repo}` : '';
    this.mergeStrategy = config.squashMerges ? 'squash' : 'merge_commit';
    this.initialWorkflowStatus = config.initialWorkflowStatus;
    this.cmsLabelPrefix = config.cmsLabelPrefix;
  }
  buildRequest = req => {
    const withRoot = unsentRequest.withRoot(this.apiRoot)(req);
    if (withRoot.has('cache')) {
      return withRoot;
    } else {
      const withNoCache = unsentRequest.withNoCache(withRoot);
      return withNoCache;
    }
  };
  request = req => {
    try {
      return requestWithBackoff(this, req);
    } catch (err) {
      throw new APIError(err.message, null, API_NAME);
    }
  };
  responseToJSON = responseParser({
    format: 'json',
    apiName: API_NAME
  });
  responseToBlob = responseParser({
    format: 'blob',
    apiName: API_NAME
  });
  responseToText = responseParser({
    format: 'text',
    apiName: API_NAME
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestJSON = req => this.request(req).then(this.responseToJSON);
  requestText = req => this.request(req).then(this.responseToText);
  user = () => this.requestJSON('/user');
  hasWriteAccess = async () => {
    const response = await this.request(this.repoURL);
    if (response.status === 404) {
      throw Error('Repo not found');
    }
    return response.ok;
  };
  getBranch = async branchName => {
    const branch = await this.requestJSON(`${this.repoURL}/refs/branches/${branchName}`);
    return branch;
  };
  branchCommitSha = async branch => {
    const {
      target: {
        hash: branchSha
      }
    } = await this.getBranch(branch);
    return branchSha;
  };
  defaultBranchCommitSha = () => {
    return this.branchCommitSha(this.branch);
  };
  isFile = ({
    type
  }) => type === 'commit_file';
  getFileId = (commitHash, path) => {
    return `${commitHash}/${path}`;
  };
  processFile = file => ({
    id: file.id,
    type: file.type,
    path: file.path,
    name: basename(file.path),
    // BitBucket does not return file SHAs, but it does give us the
    // commit SHA. Since the commit SHA will change if any files do,
    // we can construct an ID using the commit SHA and the file path
    // that will help with caching (though not as well as a normal
    // SHA, since it will change even if the individual file itself
    // doesn't.)
    ...(file.commit && file.commit.hash ? {
      id: this.getFileId(file.commit.hash, file.path)
    } : {})
  });
  processFiles = files => files.filter(this.isFile).map(this.processFile);
  readFile = async (path, sha, {
    parseText = true,
    branch = this.branch,
    head = ''
  } = {}) => {
    const fetchContent = async () => {
      const node = head ? head : await this.branchCommitSha(branch);
      const content = await this.request({
        url: `${this.repoURL}/src/${node}/${path}`,
        cache: 'no-store'
      }).then(parseText ? this.responseToText : this.responseToBlob);
      return content;
    };
    const content = await readFile(sha, fetchContent, localForage, parseText);
    return content;
  };
  async readFileMetadata(path, sha) {
    const fetchFileMetadata = async () => {
      try {
        const {
          values
        } = await this.requestJSON({
          url: `${this.repoURL}/commits`,
          params: {
            path,
            include: this.branch
          }
        });
        const commit = values[0];
        return {
          author: commit.author.user ? commit.author.user.display_name || commit.author.user.nickname : commit.author.raw,
          updatedOn: commit.date
        };
      } catch (e) {
        return {
          author: '',
          updatedOn: ''
        };
      }
    };
    const fileMetadata = await readFileMetadata(sha, fetchFileMetadata, localForage);
    return fileMetadata;
  }
  async isShaExistsInBranch(branch, sha) {
    const {
      values
    } = await this.requestJSON({
      url: `${this.repoURL}/commits`,
      params: {
        include: branch,
        pagelen: 100
      }
    }).catch(e => {
      console.log(`Failed getting commits for branch '${branch}'`, e);
      return [];
    });
    return values.some(v => v.hash === sha);
  }
  getEntriesAndCursor = jsonResponse => {
    const {
      size: count,
      page,
      pagelen: pageSize,
      next,
      previous: prev,
      values: entries
    } = jsonResponse;
    const pageCount = pageSize && count ? Math.ceil(count / pageSize) : undefined;
    return {
      entries,
      cursor: Cursor.create({
        actions: [...(next ? ['next'] : []), ...(prev ? ['prev'] : [])],
        meta: {
          page,
          count,
          pageSize,
          pageCount
        },
        data: {
          links: {
            next,
            prev
          }
        }
      })
    };
  };
  listFiles = async (path, depth = 1, pagelen, branch) => {
    const node = await this.branchCommitSha(branch);
    const result = await this.requestJSON({
      url: `${this.repoURL}/src/${node}/${path}`,
      params: {
        max_depth: depth,
        pagelen
      }
    }).catch(replace404WithEmptyResponse);
    const {
      entries,
      cursor
    } = this.getEntriesAndCursor(result);
    return {
      entries: this.processFiles(entries),
      cursor: cursor
    };
  };
  traverseCursor = async (cursor, action) => flow([this.requestJSON, then(this.getEntriesAndCursor), then(({
    cursor: newCursor,
    entries
  }) => ({
    cursor: newCursor,
    entries: this.processFiles(entries)
  }))])(cursor.data.getIn(['links', action]));
  listAllFiles = async (path, depth, branch) => {
    const {
      cursor: initialCursor,
      entries: initialEntries
    } = await this.listFiles(path, depth, 100, branch);
    const entries = [...initialEntries];
    let currentCursor = initialCursor;
    while (currentCursor && currentCursor.actions.has('next')) {
      const {
        cursor: newCursor,
        entries: newEntries
      } = await this.traverseCursor(currentCursor, 'next');
      entries.push(...newEntries);
      currentCursor = newCursor;
    }
    return this.processFiles(entries);
  };
  async uploadFiles(files, {
    commitMessage,
    branch,
    parentSha
  }) {
    const formData = new FormData();
    const toMove = [];
    files.forEach(file => {
      if (file.delete) {
        // delete the file
        formData.append('files', file.path);
      } else if (file.newPath) {
        const contentBlob = get(file, 'fileObj', new Blob([file.raw]));
        toMove.push({
          from: file.path,
          to: file.newPath,
          contentBlob
        });
      } else {
        // add/modify the file
        const contentBlob = get(file, 'fileObj', new Blob([file.raw]));
        // Third param is filename header, in case path is `message`, `branch`, etc.
        formData.append(file.path, contentBlob, basename(file.path));
      }
    });
    for (const {
      from,
      to,
      contentBlob
    } of toMove) {
      const sourceDir = dirname(from);
      const destDir = dirname(to);
      const filesBranch = parentSha ? this.branch : branch;
      const files = await this.listAllFiles(sourceDir, 100, filesBranch);
      for (const file of files) {
        // to move a file in Bitbucket we need to delete the old path
        // and upload the file content to the new path
        // NOTE: this is very wasteful, and also the Bitbucket `diff` API
        // reports these files as deleted+added instead of renamed
        // delete current path
        formData.append('files', file.path);
        // create in new path
        const content = file.path === from ? contentBlob : await this.readFile(file.path, null, {
          branch: filesBranch,
          parseText: false
        });
        formData.append(file.path.replace(sourceDir, destDir), content, basename(file.path));
      }
    }
    if (commitMessage) {
      formData.append('message', commitMessage);
    }
    if (this.commitAuthor) {
      const {
        name,
        email
      } = this.commitAuthor;
      formData.append('author', `${name} <${email}>`);
    }
    formData.append('branch', branch);
    if (parentSha) {
      formData.append('parents', parentSha);
    }
    try {
      await this.requestText({
        url: `${this.repoURL}/src`,
        method: 'POST',
        body: formData
      });
    } catch (error) {
      const message = error.message || '';
      // very descriptive message from Bitbucket
      if (parentSha && message.includes('Something went wrong')) {
        await throwOnConflictingBranches(branch, name => this.getBranch(name), API_NAME);
      }
      throw error;
    }
    return files;
  }
  async persistFiles(dataFiles, mediaFiles, options) {
    const files = [...dataFiles, ...mediaFiles];
    if (options.useWorkflow) {
      const slug = dataFiles[0].slug;
      return this.editorialWorkflowGit(files, slug, options);
    } else {
      return this.uploadFiles(files, {
        commitMessage: options.commitMessage,
        branch: this.branch
      });
    }
  }
  async addPullRequestComment(pullRequest, comment) {
    await this.requestJSON({
      method: 'POST',
      url: `${this.repoURL}/pullrequests/${pullRequest.id}/comments`,
      headers: {
        'Content-Type': APPLICATION_JSON
      },
      body: JSON.stringify({
        content: {
          raw: comment
        }
      })
    });
  }
  async getPullRequestLabel(id) {
    const comments = await this.requestJSON({
      url: `${this.repoURL}/pullrequests/${id}/comments`,
      params: {
        pagelen: 100
      }
    });
    return comments.values.map(c => c.content.raw)[comments.values.length - 1];
  }
  async createPullRequest(branch, commitMessage, status) {
    const pullRequest = await this.requestJSON({
      method: 'POST',
      url: `${this.repoURL}/pullrequests`,
      headers: {
        'Content-Type': APPLICATION_JSON
      },
      body: JSON.stringify({
        title: commitMessage,
        source: {
          branch: {
            name: branch
          }
        },
        destination: {
          branch: {
            name: this.branch
          }
        },
        description: DEFAULT_PR_BODY,
        close_source_branch: true
      })
    });
    // use comments for status labels
    await this.addPullRequestComment(pullRequest, statusToLabel(status, this.cmsLabelPrefix));
  }
  async getDifferences(source, destination = this.branch) {
    if (source === destination) {
      return [];
    }
    const rawDiff = await this.requestText({
      url: `${this.repoURL}/diff/${source}..${destination}`,
      params: {
        binary: false
      }
    });
    const diffs = parse(rawDiff).map(d => {
      const oldPath = d.oldPath?.replace(/b\//, '') || '';
      const newPath = d.newPath?.replace(/b\//, '') || '';
      const path = newPath || oldPath;
      return {
        oldPath,
        newPath,
        status: d.status,
        newFile: d.status === 'added',
        path,
        binary: d.binary || /.svg$/.test(path)
      };
    });
    return diffs;
  }
  async editorialWorkflowGit(files, slug, options) {
    const contentKey = generateContentKey(options.collectionName, slug);
    const branch = branchFromContentKey(contentKey);
    const unpublished = options.unpublished || false;
    if (!unpublished) {
      const defaultBranchSha = await this.branchCommitSha(this.branch);
      await this.uploadFiles(files, {
        commitMessage: options.commitMessage,
        branch,
        parentSha: defaultBranchSha
      });
      await this.createPullRequest(branch, options.commitMessage, options.status || this.initialWorkflowStatus);
    } else {
      // mark files for deletion
      const diffs = await this.getDifferences(branch);
      const toDelete = [];
      for (const diff of diffs.filter(d => d.binary && d.status !== 'deleted')) {
        if (!files.some(file => file.path === diff.path)) {
          toDelete.push({
            path: diff.path,
            delete: true
          });
        }
      }
      await this.uploadFiles([...files, ...toDelete], {
        commitMessage: options.commitMessage,
        branch
      });
    }
  }
  deleteFiles = (paths, message) => {
    const body = new FormData();
    paths.forEach(path => {
      body.append('files', path);
    });
    body.append('branch', this.branch);
    if (message) {
      body.append('message', message);
    }
    if (this.commitAuthor) {
      const {
        name,
        email
      } = this.commitAuthor;
      body.append('author', `${name} <${email}>`);
    }
    return flow([unsentRequest.withMethod('POST'), unsentRequest.withBody(body), this.request])(`${this.repoURL}/src`);
  };
  async getPullRequests(sourceBranch) {
    const sourceQuery = sourceBranch ? `source.branch.name = "${sourceBranch}"` : `source.branch.name ~ "${CMS_BRANCH_PREFIX}/"`;
    const pullRequests = await this.requestJSON({
      url: `${this.repoURL}/pullrequests`,
      params: {
        pagelen: 50,
        q: oneLine`
        source.repository.full_name = "${this.repo}"
        AND state = "${BitBucketPullRequestState.OPEN}"
        AND destination.branch.name = "${this.branch}"
        AND comment_count > 0
        AND ${sourceQuery}
        `
      }
    });
    const labels = await Promise.all(pullRequests.values.map(pr => this.getPullRequestLabel(pr.id)));
    return pullRequests.values.filter((_, index) => isCMSLabel(labels[index], this.cmsLabelPrefix));
  }
  async getBranchPullRequest(branch) {
    const pullRequests = await this.getPullRequests(branch);
    if (pullRequests.length <= 0) {
      throw new EditorialWorkflowError('content is not under editorial workflow', true);
    }
    return pullRequests[0];
  }
  async listUnpublishedBranches() {
    console.log('%c Checking for Unpublished entries', 'line-height: 30px;text-align: center;font-weight: bold');
    const pullRequests = await this.getPullRequests();
    const branches = pullRequests.map(mr => mr.source.branch.name);
    return branches;
  }
  async retrieveUnpublishedEntryData(contentKey) {
    const {
      collection,
      slug
    } = parseContentKey(contentKey);
    const branch = branchFromContentKey(contentKey);
    const pullRequest = await this.getBranchPullRequest(branch);
    const diffs = await this.getDifferences(branch);
    const label = await this.getPullRequestLabel(pullRequest.id);
    const status = labelToStatus(label, this.cmsLabelPrefix);
    const updatedAt = pullRequest.updated_on;
    const pullRequestAuthor = pullRequest.author.display_name;
    return {
      collection,
      slug,
      status,
      // TODO: get real id
      diffs: diffs.filter(d => d.status !== 'deleted').map(d => ({
        path: d.path,
        newFile: d.newFile,
        id: ''
      })),
      updatedAt,
      pullRequestAuthor
    };
  }
  async updateUnpublishedEntryStatus(collection, slug, newStatus) {
    const contentKey = generateContentKey(collection, slug);
    const branch = branchFromContentKey(contentKey);
    const pullRequest = await this.getBranchPullRequest(branch);
    await this.addPullRequestComment(pullRequest, statusToLabel(newStatus, this.cmsLabelPrefix));
  }
  async mergePullRequest(pullRequest) {
    await this.requestJSON({
      method: 'POST',
      url: `${this.repoURL}/pullrequests/${pullRequest.id}/merge`,
      headers: {
        'Content-Type': APPLICATION_JSON
      },
      body: JSON.stringify({
        message: MERGE_COMMIT_MESSAGE,
        close_source_branch: true,
        merge_strategy: this.mergeStrategy
      })
    });
  }
  async publishUnpublishedEntry(collectionName, slug) {
    const contentKey = generateContentKey(collectionName, slug);
    const branch = branchFromContentKey(contentKey);
    const pullRequest = await this.getBranchPullRequest(branch);
    await this.mergePullRequest(pullRequest);
  }
  async declinePullRequest(pullRequest) {
    await this.requestJSON({
      method: 'POST',
      url: `${this.repoURL}/pullrequests/${pullRequest.id}/decline`
    });
  }
  async deleteBranch(branch) {
    await this.request({
      method: 'DELETE',
      url: `${this.repoURL}/refs/branches/${branch}`
    });
  }
  async deleteUnpublishedEntry(collectionName, slug) {
    const contentKey = generateContentKey(collectionName, slug);
    const branch = branchFromContentKey(contentKey);
    const pullRequest = await this.getBranchPullRequest(branch);
    await this.declinePullRequest(pullRequest);
    await this.deleteBranch(branch);
  }
  async getPullRequestStatuses(pullRequest) {
    const statuses = await this.requestJSON({
      url: `${this.repoURL}/pullrequests/${pullRequest.id}/statuses`,
      params: {
        pagelen: 100
      }
    });
    return statuses.values;
  }
  async getStatuses(collectionName, slug) {
    const contentKey = generateContentKey(collectionName, slug);
    const branch = branchFromContentKey(contentKey);
    const pullRequest = await this.getBranchPullRequest(branch);
    const statuses = await this.getPullRequestStatuses(pullRequest);
    return statuses.map(({
      key,
      state,
      url
    }) => ({
      context: key,
      state: state === BitBucketPullRequestStatusState.Successful ? PreviewState.Success : PreviewState.Other,
      target_url: url
    }));
  }
  async getUnpublishedEntrySha(collection, slug) {
    const contentKey = generateContentKey(collection, slug);
    const branch = branchFromContentKey(contentKey);
    const pullRequest = await this.getBranchPullRequest(branch);
    return pullRequest.destination.commit.hash;
  }
}