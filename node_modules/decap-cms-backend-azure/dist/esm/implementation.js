import trimStart from 'lodash/trimStart';
import trim from 'lodash/trim';
import semaphore from 'semaphore';
import { basename, getMediaDisplayURL, generateContentKey, getMediaAsBlob, getPreviewStatus, asyncLock, runWithLock, unpublishedEntries, entriesByFiles, filterByExtension, branchFromContentKey, entriesByFolder, contentKeyFromBranch, getBlobSHA } from 'decap-cms-lib-util';
import AuthenticationPage from './AuthenticationPage';
import API, { API_NAME } from './API';
const MAX_CONCURRENT_DOWNLOADS = 10;
function parseAzureRepo(config) {
  const {
    repo
  } = config.backend;
  if (typeof repo !== 'string') {
    throw new Error('The Azure backend needs a "repo" in the backend configuration.');
  }
  const parts = repo.split('/');
  if (parts.length !== 3) {
    throw new Error('The Azure backend must be in a the format of {org}/{project}/{repo}');
  }
  const [org, project, repoName] = parts;
  return {
    org,
    project,
    repoName
  };
}
export default class Azure {
  constructor(config, options = {}) {
    this.options = {
      initialWorkflowStatus: '',
      ...options
    };
    this.repo = parseAzureRepo(config);
    this.branch = config.backend.branch || 'master';
    this.apiRoot = config.backend.api_root || 'https://dev.azure.com';
    this.apiVersion = config.backend.api_version || '6.1-preview';
    this.token = '';
    this.squashMerges = config.backend.squash_merges || false;
    this.cmsLabelPrefix = config.backend.cms_label_prefix || '';
    this.mediaFolder = trim(config.media_folder, '/');
    this.previewContext = config.backend.preview_context || '';
    this.lock = asyncLock();
  }
  isGitBackend() {
    return true;
  }
  async status() {
    const auth = (await this.api.user().then(user => !!user).catch(e => {
      console.warn('Failed getting Azure user', e);
      return false;
    })) || false;
    return {
      auth: {
        status: auth
      },
      api: {
        status: true,
        statusPage: ''
      }
    };
  }
  authComponent() {
    return AuthenticationPage;
  }
  restoreUser(user) {
    return this.authenticate(user);
  }
  async authenticate(state) {
    this.token = state.token;
    this.api = new API({
      apiRoot: this.apiRoot,
      apiVersion: this.apiVersion,
      repo: this.repo,
      branch: this.branch,
      squashMerges: this.squashMerges,
      cmsLabelPrefix: this.cmsLabelPrefix,
      initialWorkflowStatus: this.options.initialWorkflowStatus
    }, this.token);
    const user = await this.api.user();
    return {
      token: state.token,
      ...user
    };
  }

  /**
   * Log the user out by forgetting their access token.
   * TODO: *Actual* logout by redirecting to:
   * https://login.microsoftonline.com/{tenantId}/oauth2/logout?client_id={clientId}&post_logout_redirect_uri={baseUrl}
   */
  logout() {
    this.token = null;
    return;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  async entriesByFolder(folder, extension, depth) {
    const listFiles = async () => {
      const files = await this.api.listFiles(folder, depth > 1);
      const filtered = files.filter(file => filterByExtension({
        path: file.path
      }, extension));
      return filtered.map(file => ({
        id: file.id,
        path: file.path
      }));
    };
    const entries = await entriesByFolder(listFiles, this.api.readFile.bind(this.api), this.api.readFileMetadata.bind(this.api), API_NAME);
    return entries;
  }
  entriesByFiles(files) {
    return entriesByFiles(files, this.api.readFile.bind(this.api), this.api.readFileMetadata.bind(this.api), API_NAME);
  }
  async getEntry(path) {
    const data = await this.api.readFile(path);
    return {
      file: {
        path
      },
      data
    };
  }
  async getMedia() {
    const files = await this.api.listFiles(this.mediaFolder, false);
    const mediaFiles = await Promise.all(files.map(async ({
      id,
      path,
      name
    }) => {
      const blobUrl = await this.getMediaDisplayURL({
        id,
        path
      });
      return {
        id,
        name,
        displayURL: blobUrl,
        path
      };
    }));
    return mediaFiles;
  }
  getMediaDisplayURL(displayURL) {
    this._mediaDisplayURLSem = this._mediaDisplayURLSem || semaphore(MAX_CONCURRENT_DOWNLOADS);
    return getMediaDisplayURL(displayURL, this.api.readFile.bind(this.api), this._mediaDisplayURLSem);
  }
  async getMediaFile(path) {
    const name = basename(path);
    const blob = await getMediaAsBlob(path, null, this.api.readFile.bind(this.api));
    const fileObj = new File([blob], name);
    const url = URL.createObjectURL(fileObj);
    const id = await getBlobSHA(blob);
    return {
      id,
      displayURL: url,
      path,
      name,
      size: fileObj.size,
      file: fileObj,
      url
    };
  }
  async persistEntry(entry, options) {
    const mediaFiles = entry.assets;
    await this.api.persistFiles(entry.dataFiles, mediaFiles, options);
  }
  async persistMedia(mediaFile, options) {
    const fileObj = mediaFile.fileObj;
    const [id] = await Promise.all([getBlobSHA(fileObj), this.api.persistFiles([], [mediaFile], options)]);
    const {
      path
    } = mediaFile;
    const url = URL.createObjectURL(fileObj);
    return {
      displayURL: url,
      path: trimStart(path, '/'),
      name: fileObj.name,
      size: fileObj.size,
      file: fileObj,
      url,
      id: id
    };
  }
  async deleteFiles(paths, commitMessage) {
    await this.api.deleteFiles(paths, commitMessage);
  }
  async loadMediaFile(branch, file) {
    const readFile = (path, id, {
      parseText
    }) => this.api.readFile(path, id, {
      branch,
      parseText
    });
    const blob = await getMediaAsBlob(file.path, null, readFile);
    const name = basename(file.path);
    const fileObj = new File([blob], name);
    return {
      id: file.path,
      displayURL: URL.createObjectURL(fileObj),
      path: file.path,
      name,
      size: fileObj.size,
      file: fileObj
    };
  }
  async loadEntryMediaFiles(branch, files) {
    const mediaFiles = await Promise.all(files.map(file => this.loadMediaFile(branch, file)));
    return mediaFiles;
  }
  async unpublishedEntries() {
    const listEntriesKeys = () => this.api.listUnpublishedBranches().then(branches => branches.map(branch => contentKeyFromBranch(branch)));
    const ids = await unpublishedEntries(listEntriesKeys);
    return ids;
  }
  async unpublishedEntry({
    id,
    collection,
    slug
  }) {
    if (id) {
      const data = await this.api.retrieveUnpublishedEntryData(id);
      return data;
    } else if (collection && slug) {
      const contentKey = generateContentKey(collection, slug);
      const data = await this.api.retrieveUnpublishedEntryData(contentKey);
      return data;
    } else {
      throw new Error('Missing unpublished entry id or collection and slug');
    }
  }
  getBranch(collection, slug) {
    const contentKey = generateContentKey(collection, slug);
    const branch = branchFromContentKey(contentKey);
    return branch;
  }
  async unpublishedEntryMediaFile(collection, slug, path, id) {
    const branch = this.getBranch(collection, slug);
    const mediaFile = await this.loadMediaFile(branch, {
      path,
      id
    });
    return mediaFile;
  }
  async unpublishedEntryDataFile(collection, slug, path, id) {
    const branch = this.getBranch(collection, slug);
    const data = await this.api.readFile(path, id, {
      branch
    });
    return data;
  }
  updateUnpublishedEntryStatus(collection, slug, newStatus) {
    // updateUnpublishedEntryStatus is a transactional operation
    return runWithLock(this.lock, () => this.api.updateUnpublishedEntryStatus(collection, slug, newStatus), 'Failed to acquire update entry status lock');
  }
  deleteUnpublishedEntry(collection, slug) {
    // deleteUnpublishedEntry is a transactional operation
    return runWithLock(this.lock, () => this.api.deleteUnpublishedEntry(collection, slug), 'Failed to acquire delete entry lock');
  }
  publishUnpublishedEntry(collection, slug) {
    // publishUnpublishedEntry is a transactional operation
    return runWithLock(this.lock, () => this.api.publishUnpublishedEntry(collection, slug), 'Failed to acquire publish entry lock');
  }
  async getDeployPreview(collection, slug) {
    try {
      const statuses = await this.api.getStatuses(collection, slug);
      const deployStatus = getPreviewStatus(statuses, this.previewContext);
      if (deployStatus) {
        const {
          target_url: url,
          state
        } = deployStatus;
        return {
          url,
          status: state
        };
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }
}