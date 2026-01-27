import { Base64 } from 'js-base64';
import partial from 'lodash/partial';
import result from 'lodash/result';
import trim from 'lodash/trim';
import trimStart from 'lodash/trimStart';
import { localForage, APIError, unsentRequest, requestWithBackoff, responseParser, readFile, DEFAULT_PR_BODY, MERGE_COMMIT_MESSAGE, generateContentKey, parseContentKey, labelToStatus, isCMSLabel, EditorialWorkflowError, statusToLabel, PreviewState, readFileMetadata, branchFromContentKey } from 'decap-cms-lib-util';
import { dirname, basename } from 'path';
export const API_NAME = 'Azure DevOps';
const API_VERSION = 'api-version';

// https://docs.microsoft.com/en-us/rest/api/azure/devops/git/pull%20requests/get%20pull%20request?view=azure-devops-rest-6.1#gitpullrequest
var AzureCommitStatusState = /*#__PURE__*/function (AzureCommitStatusState) {
  AzureCommitStatusState["ERROR"] = "error";
  AzureCommitStatusState["FAILED"] = "failed";
  AzureCommitStatusState["NOT_APPLICABLE"] = "notApplicable";
  AzureCommitStatusState["NOT_SET"] = "notSet";
  AzureCommitStatusState["PENDING"] = "pending";
  AzureCommitStatusState["SUCCEEDED"] = "succeeded";
  return AzureCommitStatusState;
}(AzureCommitStatusState || {}); // This does not match Azure documentation, but it is what comes back from some calls
// PullRequest as an example is documented as returning PullRequest[], but it actually
// returns that inside of this value prop in the json
var AzureCommitChangeType = /*#__PURE__*/function (AzureCommitChangeType) {
  AzureCommitChangeType["ADD"] = "add";
  AzureCommitChangeType["DELETE"] = "delete";
  AzureCommitChangeType["RENAME"] = "rename";
  AzureCommitChangeType["EDIT"] = "edit";
  return AzureCommitChangeType;
}(AzureCommitChangeType || {});
var AzureItemContentType = /*#__PURE__*/function (AzureItemContentType) {
  AzureItemContentType["BASE64"] = "base64encoded";
  return AzureItemContentType;
}(AzureItemContentType || {});
var AzurePullRequestStatus = /*#__PURE__*/function (AzurePullRequestStatus) {
  AzurePullRequestStatus["ACTIVE"] = "active";
  AzurePullRequestStatus["COMPLETED"] = "completed";
  AzurePullRequestStatus["ABANDONED"] = "abandoned";
  return AzurePullRequestStatus;
}(AzurePullRequestStatus || {});
var AzureAsyncPullRequestStatus = /*#__PURE__*/function (AzureAsyncPullRequestStatus) {
  AzureAsyncPullRequestStatus["CONFLICTS"] = "conflicts";
  AzureAsyncPullRequestStatus["FAILURE"] = "failure";
  AzureAsyncPullRequestStatus["QUEUED"] = "queued";
  AzureAsyncPullRequestStatus["REJECTED"] = "rejectedByPolicy";
  AzureAsyncPullRequestStatus["SUCCEEDED"] = "succeeded";
  return AzureAsyncPullRequestStatus;
}(AzureAsyncPullRequestStatus || {});
var AzureObjectType = /*#__PURE__*/function (AzureObjectType) {
  AzureObjectType["BLOB"] = "blob";
  AzureObjectType["TREE"] = "tree";
  return AzureObjectType;
}(AzureObjectType || {}); // https://docs.microsoft.com/en-us/rest/api/azure/devops/git/diffs/get?view=azure-devops-rest-6.1#gitcommitdiffs
// https://docs.microsoft.com/en-us/rest/api/azure/devops/git/diffs/get?view=azure-devops-rest-6.1#gitchange
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function getChangeItem(item) {
  switch (item.action) {
    case AzureCommitChangeType.ADD:
      return {
        changeType: AzureCommitChangeType.ADD,
        item: {
          path: item.path
        },
        newContent: {
          content: item.base64Content,
          contentType: AzureItemContentType.BASE64
        }
      };
    case AzureCommitChangeType.EDIT:
      return {
        changeType: AzureCommitChangeType.EDIT,
        item: {
          path: item.path
        },
        newContent: {
          content: item.base64Content,
          contentType: AzureItemContentType.BASE64
        }
      };
    case AzureCommitChangeType.DELETE:
      return {
        changeType: AzureCommitChangeType.DELETE,
        item: {
          path: item.path
        }
      };
    case AzureCommitChangeType.RENAME:
      return {
        changeType: AzureCommitChangeType.RENAME,
        item: {
          path: item.path
        },
        sourceServerItem: item.oldPath
      };
    default:
      return {};
  }
}
export default class API {
  constructor(config, token) {
    const {
      repo
    } = config;
    const apiRoot = trim(config.apiRoot, '/');
    this.endpointUrl = `${apiRoot}/${repo.org}/${repo.project}/_apis/git/repositories/${repo.repoName}`;
    this.token = token;
    this.branch = config.branch;
    this.mergeStrategy = config.squashMerges ? 'squash' : 'noFastForward';
    this.initialWorkflowStatus = config.initialWorkflowStatus;
    this.apiVersion = config.apiVersion;
    this.cmsLabelPrefix = config.cmsLabelPrefix;
  }
  withHeaders = req => {
    const withHeaders = unsentRequest.withHeaders({
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json; charset=utf-8'
    }, req);
    return withHeaders;
  };
  withAzureFeatures = req => {
    if (req.hasIn(['params', API_VERSION])) {
      return req;
    }
    const withParams = unsentRequest.withParams({
      [API_VERSION]: `${this.apiVersion}`
    }, req);
    return withParams;
  };
  buildRequest = req => {
    const withHeaders = this.withHeaders(req);
    const withAzureFeatures = this.withAzureFeatures(withHeaders);
    if (withAzureFeatures.has('cache')) {
      return withAzureFeatures;
    } else {
      const withNoCache = unsentRequest.withNoCache(withAzureFeatures);
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
  requestJSON = req => this.request(req).then(this.responseToJSON);
  requestText = req => this.request(req).then(this.responseToText);
  toBase64 = str => Promise.resolve(Base64.encode(str));
  fromBase64 = str => Base64.decode(str);
  branchToRef = branch => `refs/heads/${branch}`;
  refToBranch = ref => ref.slice('refs/heads/'.length);
  user = async () => {
    const result = await this.requestJSON({
      url: 'https://app.vssps.visualstudio.com/_apis/profile/profiles/me',
      params: {
        [API_VERSION]: '6.1-preview.2'
      }
    });
    const name = result.coreAttributes?.DisplayName?.value;
    const email = result.coreAttributes?.EmailAddress?.value;
    const url = result.coreAttributes?.Avatar?.value?.value;
    const user = {
      name: name || email || '',
      avatar_url: `data:image/png;base64,${url}`,
      email
    };
    return user;
  };
  async readFileMetadata(path, sha, {
    branch = this.branch
  } = {}) {
    const fetchFileMetadata = async () => {
      try {
        const {
          value
        } = await this.requestJSON({
          url: `${this.endpointUrl}/commits/`,
          params: {
            'searchCriteria.itemPath': path,
            'searchCriteria.itemVersion.version': branch,
            'searchCriteria.$top': 1
          }
        });
        const [commit] = value;
        return {
          author: commit.author.name || commit.author.email,
          updatedOn: commit.author.date
        };
      } catch (error) {
        return {
          author: '',
          updatedOn: ''
        };
      }
    };
    const fileMetadata = await readFileMetadata(sha, fetchFileMetadata, localForage);
    return fileMetadata;
  }
  readFile = (path, sha, {
    parseText = true,
    branch = this.branch
  } = {}) => {
    const fetchContent = () => {
      return this.request({
        url: `${this.endpointUrl}/items/`,
        params: {
          version: branch,
          path
        },
        cache: 'no-store'
      }).then(parseText ? this.responseToText : this.responseToBlob);
    };
    return readFile(sha, fetchContent, localForage, parseText);
  };
  listFiles = async (path, recursive, branch = this.branch) => {
    try {
      const {
        value: items
      } = await this.requestJSON({
        url: `${this.endpointUrl}/items/`,
        params: {
          version: branch,
          scopePath: path,
          recursionLevel: recursive ? 'full' : 'oneLevel'
        }
      });
      const files = items.filter(item => item.gitObjectType === AzureObjectType.BLOB).map(file => ({
        id: file.objectId,
        path: trimStart(file.path, '/'),
        name: basename(file.path)
      }));
      return files;
    } catch (err) {
      if (err && err.status === 404) {
        console.log('This 404 was expected and handled appropriately.');
        return [];
      } else {
        throw err;
      }
    }
  };
  async getRef(branch = this.branch) {
    const {
      value: refs
    } = await this.requestJSON({
      url: `${this.endpointUrl}/refs`,
      params: {
        $top: '1',
        // There's only one ref, so keep the payload small
        filter: 'heads/' + branch
      }
    });
    return refs.find(b => b.name == this.branchToRef(branch));
  }
  async deleteRef(ref) {
    const deleteBranchPayload = [{
      name: ref.name,
      oldObjectId: ref.objectId,
      newObjectId: '0000000000000000000000000000000000000000'
    }];
    await this.requestJSON({
      method: 'POST',
      url: `${this.endpointUrl}/refs`,
      body: JSON.stringify(deleteBranchPayload)
    });
  }
  async uploadAndCommit(items, comment, branch, newBranch) {
    const ref = await this.getRef(newBranch ? this.branch : branch);
    const refUpdate = [{
      name: this.branchToRef(branch),
      oldObjectId: ref.objectId
    }];
    const changes = items.map(item => getChangeItem(item));
    const commits = [{
      comment,
      changes
    }];
    const push = {
      refUpdates: refUpdate,
      commits
    };
    return this.requestJSON({
      url: `${this.endpointUrl}/pushes`,
      method: 'POST',
      body: JSON.stringify(push)
    });
  }
  async retrieveUnpublishedEntryData(contentKey) {
    const {
      collection,
      slug
    } = parseContentKey(contentKey);
    const branch = branchFromContentKey(contentKey);
    const pullRequest = await this.getBranchPullRequest(branch);
    const diffs = await this.getDifferences(pullRequest.sourceRefName);
    const diffsWithIds = await Promise.all(diffs.map(async d => {
      const path = trimStart(d.item.path, '/');
      const newFile = d.changeType === AzureCommitChangeType.ADD;
      const id = d.item.objectId;
      return {
        id,
        path,
        newFile
      };
    }));
    const label = pullRequest.labels.find(l => isCMSLabel(l.name, this.cmsLabelPrefix));
    const labelName = label && label.name ? label.name : this.cmsLabelPrefix;
    const status = labelToStatus(labelName, this.cmsLabelPrefix);
    // Uses creationDate, as we do not have direct access to the updated date
    const updatedAt = pullRequest.closedDate ? pullRequest.closedDate : pullRequest.creationDate;
    const pullRequestAuthor = pullRequest.createdBy?.displayName || pullRequest.createdBy?.uniqueName;
    return {
      collection,
      slug,
      status,
      diffs: diffsWithIds,
      updatedAt,
      pullRequestAuthor
    };
  }
  async getPullRequestStatues(pullRequest) {
    const {
      value: commits
    } = await this.requestJSON({
      url: `${this.endpointUrl}/pullrequests/${pullRequest.pullRequestId}/commits`,
      params: {
        $top: 1
      }
    });
    const {
      value: statuses
    } = await this.requestJSON({
      url: `${this.endpointUrl}/commits/${commits[0].commitId}/statuses`,
      params: {
        latestOnly: true
      }
    });
    return statuses;
  }
  async getStatuses(collection, slug) {
    const contentKey = generateContentKey(collection, slug);
    const branch = branchFromContentKey(contentKey);
    const pullRequest = await this.getBranchPullRequest(branch);
    const statuses = await this.getPullRequestStatues(pullRequest);
    return statuses.map(({
      context,
      state,
      targetUrl
    }) => ({
      context: context.name,
      state: state === AzureCommitStatusState.SUCCEEDED ? PreviewState.Success : PreviewState.Other,
      target_url: targetUrl
    }));
  }
  async getCommitItems(files, branch) {
    const items = await Promise.all(files.map(async file => {
      const [base64Content, fileExists] = await Promise.all([result(file, 'toBase64', partial(this.toBase64, file.raw)), this.isFileExists(file.path, branch)]);
      const path = file.newPath || file.path;
      const oldPath = file.path;
      const renameOrEdit = path !== oldPath ? AzureCommitChangeType.RENAME : AzureCommitChangeType.EDIT;
      const action = fileExists ? renameOrEdit : AzureCommitChangeType.ADD;
      return {
        action,
        base64Content,
        path,
        oldPath
      };
    }));

    // move children
    for (const item of items.filter(i => i.oldPath && i.action === AzureCommitChangeType.RENAME)) {
      const sourceDir = dirname(item.oldPath);
      const destDir = dirname(item.path);
      const children = await this.listFiles(sourceDir, true, branch);
      children.filter(file => file.path !== item.oldPath).forEach(file => {
        items.push({
          action: AzureCommitChangeType.RENAME,
          path: file.path.replace(sourceDir, destDir),
          oldPath: file.path
        });
      });
    }
    return items;
  }
  async persistFiles(dataFiles, mediaFiles, options) {
    const files = [...dataFiles, ...mediaFiles];
    if (options.useWorkflow) {
      const slug = dataFiles[0].slug;
      return this.editorialWorkflowGit(files, slug, options);
    } else {
      const items = await this.getCommitItems(files, this.branch);
      return this.uploadAndCommit(items, options.commitMessage, this.branch, true);
    }
  }
  async deleteFiles(paths, comment) {
    const ref = await this.getRef(this.branch);
    const refUpdate = {
      name: ref.name,
      oldObjectId: ref.objectId
    };
    const changes = paths.map(path => getChangeItem({
      action: AzureCommitChangeType.DELETE,
      path
    }));
    const commits = [{
      comment,
      changes
    }];
    const push = {
      refUpdates: [refUpdate],
      commits
    };
    return this.requestJSON({
      url: `${this.endpointUrl}/pushes`,
      method: 'POST',
      body: JSON.stringify(push)
    });
  }
  async getPullRequests(sourceBranch) {
    const {
      value: pullRequests
    } = await this.requestJSON({
      url: `${this.endpointUrl}/pullrequests`,
      params: {
        'searchCriteria.status': 'active',
        'searchCriteria.targetRefName': this.branchToRef(this.branch),
        'searchCriteria.includeLinks': false,
        ...(sourceBranch ? {
          'searchCriteria.sourceRefName': this.branchToRef(sourceBranch)
        } : {})
      }
    });
    const filtered = pullRequests.filter(pr => {
      const labels = pr.labels ?? [];
      return labels.some(label => isCMSLabel(label.name, this.cmsLabelPrefix));
    });
    return filtered;
  }
  async listUnpublishedBranches() {
    const pullRequests = await this.getPullRequests();
    const branches = pullRequests.map(pr => this.refToBranch(pr.sourceRefName));
    return branches;
  }
  async isFileExists(path, branch) {
    try {
      await this.requestText({
        url: `${this.endpointUrl}/items/`,
        params: {
          version: branch,
          path
        },
        cache: 'no-store'
      });
      return true;
    } catch (error) {
      if (error instanceof APIError && error.status === 404) {
        return false;
      }
      throw error;
    }
  }
  async createPullRequest(branch, commitMessage, status) {
    const pr = {
      sourceRefName: this.branchToRef(branch),
      targetRefName: this.branchToRef(this.branch),
      title: commitMessage,
      description: DEFAULT_PR_BODY,
      labels: [{
        name: statusToLabel(status, this.cmsLabelPrefix)
      }]
    };
    await this.requestJSON({
      method: 'POST',
      url: `${this.endpointUrl}/pullrequests`,
      params: {
        supportsIterations: false
      },
      body: JSON.stringify(pr)
    });
  }
  async getBranchPullRequest(branch) {
    const pullRequests = await this.getPullRequests(branch);
    if (pullRequests.length <= 0) {
      throw new EditorialWorkflowError('content is not under editorial workflow', true);
    }
    return pullRequests[0];
  }
  async getDifferences(to) {
    const result = await this.requestJSON({
      url: `${this.endpointUrl}/diffs/commits`,
      params: {
        baseVersion: this.branch,
        targetVersion: this.refToBranch(to)
      }
    });
    return result.changes.filter(d => d.item.gitObjectType === AzureObjectType.BLOB && Object.values(AzureCommitChangeType).includes(d.changeType));
  }
  async editorialWorkflowGit(files, slug, options) {
    const contentKey = generateContentKey(options.collectionName, slug);
    const branch = branchFromContentKey(contentKey);
    const unpublished = options.unpublished || false;
    if (!unpublished) {
      const items = await this.getCommitItems(files, this.branch);
      await this.uploadAndCommit(items, options.commitMessage, branch, true);
      await this.createPullRequest(branch, options.commitMessage, options.status || this.initialWorkflowStatus);
    } else {
      const items = await this.getCommitItems(files, branch);
      await this.uploadAndCommit(items, options.commitMessage, branch, false);
    }
  }
  async updateUnpublishedEntryStatus(collection, slug, newStatus) {
    const contentKey = generateContentKey(collection, slug);
    const branch = branchFromContentKey(contentKey);
    const pullRequest = await this.getBranchPullRequest(branch);
    const nonCmsLabels = pullRequest.labels.filter(label => !isCMSLabel(label.name, this.cmsLabelPrefix)).map(label => label.name);
    const labels = [...nonCmsLabels, statusToLabel(newStatus, this.cmsLabelPrefix)];
    await this.updatePullRequestLabels(pullRequest, labels);
  }
  async deleteUnpublishedEntry(collectionName, slug) {
    const contentKey = generateContentKey(collectionName, slug);
    const branch = branchFromContentKey(contentKey);
    const pullRequest = await this.getBranchPullRequest(branch);
    await this.abandonPullRequest(pullRequest);
  }
  async publishUnpublishedEntry(collectionName, slug) {
    const contentKey = generateContentKey(collectionName, slug);
    const branch = branchFromContentKey(contentKey);
    const pullRequest = await this.getBranchPullRequest(branch);
    await this.completePullRequest(pullRequest);
  }
  async updatePullRequestLabels(pullRequest, labels) {
    const cmsLabels = pullRequest.labels.filter(l => isCMSLabel(l.name, this.cmsLabelPrefix));
    await Promise.all(cmsLabels.map(l => {
      return this.requestText({
        method: 'DELETE',
        url: `${this.endpointUrl}/pullrequests/${encodeURIComponent(pullRequest.pullRequestId)}/labels/${encodeURIComponent(l.id)}`
      });
    }));
    await Promise.all(labels.map(l => {
      return this.requestText({
        method: 'POST',
        url: `${this.endpointUrl}/pullrequests/${encodeURIComponent(pullRequest.pullRequestId)}/labels`,
        body: JSON.stringify({
          name: l
        })
      });
    }));
  }
  async completePullRequest(pullRequest) {
    const pullRequestCompletion = {
      status: AzurePullRequestStatus.COMPLETED,
      lastMergeSourceCommit: pullRequest.lastMergeSourceCommit,
      completionOptions: {
        deleteSourceBranch: true,
        mergeCommitMessage: MERGE_COMMIT_MESSAGE,
        mergeStrategy: this.mergeStrategy
      }
    };
    let response = await this.requestJSON({
      method: 'PATCH',
      url: `${this.endpointUrl}/pullrequests/${encodeURIComponent(pullRequest.pullRequestId)}`,
      body: JSON.stringify(pullRequestCompletion)
    });

    // We need to wait for Azure to complete the pull request to actually complete
    // Sometimes this is instant, but frequently it is 1-3 seconds
    const DELAY_MILLISECONDS = 500;
    const MAX_ATTEMPTS = 10;
    let attempt = 1;
    while (response.mergeStatus === AzureAsyncPullRequestStatus.QUEUED && attempt <= MAX_ATTEMPTS) {
      await delay(DELAY_MILLISECONDS);
      response = await this.requestJSON({
        url: `${this.endpointUrl}/pullrequests/${encodeURIComponent(pullRequest.pullRequestId)}`
      });
      attempt = attempt + 1;
    }
  }
  async abandonPullRequest(pullRequest) {
    const pullRequestAbandon = {
      status: AzurePullRequestStatus.ABANDONED
    };
    await this.requestJSON({
      method: 'PATCH',
      url: `${this.endpointUrl}/pullrequests/${encodeURIComponent(pullRequest.pullRequestId)}`,
      body: JSON.stringify(pullRequestAbandon)
    });
    await this.deleteRef({
      name: pullRequest.sourceRefName,
      objectId: pullRequest.lastMergeSourceCommit.commitId
    });
  }
}