import attempt from 'lodash/attempt';
import isError from 'lodash/isError';
import take from 'lodash/take';
import unset from 'lodash/unset';
import isEmpty from 'lodash/isEmpty';
import { v4 as uuid } from 'uuid';
import { EditorialWorkflowError, Cursor, CURSOR_COMPATIBILITY_SYMBOL, basename } from 'decap-cms-lib-util';
import { extname, dirname } from 'path';
import AuthenticationPage from './AuthenticationPage';
window.repoFiles = window.repoFiles || {};
window.repoFilesUnpublished = window.repoFilesUnpublished || [];
function getFile(path, tree) {
  const segments = path.split('/');
  let obj = tree;
  while (obj && segments.length) {
    obj = obj[segments.shift()];
  }
  return obj || {};
}
function writeFile(path, content, tree) {
  const segments = path.split('/');
  let obj = tree;
  while (segments.length > 1) {
    const segment = segments.shift();
    obj[segment] = obj[segment] || {};
    obj = obj[segment];
  }
  obj[segments.shift()] = {
    content,
    path
  };
}
function deleteFile(path, tree) {
  unset(tree, path.split('/'));
}
const pageSize = 10;
function getCursor(folder, extension, entries, index, depth) {
  const count = entries.length;
  const pageCount = Math.floor(count / pageSize);
  return Cursor.create({
    actions: [...(index < pageCount ? ['next', 'last'] : []), ...(index > 0 ? ['prev', 'first'] : [])],
    meta: {
      index,
      count,
      pageSize,
      pageCount
    },
    data: {
      folder,
      extension,
      index,
      pageCount,
      depth
    }
  });
}
export function getFolderFiles(tree, folder, extension, depth, files = [], path = folder) {
  if (depth <= 0) {
    return files;
  }
  Object.keys(tree[folder] || {}).forEach(key => {
    if (extname(key)) {
      const file = tree[folder][key];
      if (!extension || key.endsWith(`.${extension}`)) {
        files.unshift({
          content: file.content,
          path: `${path}/${key}`
        });
      }
    } else {
      const subTree = tree[folder];
      return getFolderFiles(subTree, key, extension, depth - 1, files, `${path}/${key}`);
    }
  });
  return files;
}
export default class TestBackend {
  constructor(config, options = {}) {
    this.options = options;
    this.mediaFolder = config.media_folder;
  }
  isGitBackend() {
    return false;
  }
  status() {
    return Promise.resolve({
      auth: {
        status: true
      },
      api: {
        status: true,
        statusPage: ''
      }
    });
  }
  authComponent() {
    return AuthenticationPage;
  }
  restoreUser() {
    return this.authenticate();
  }
  authenticate() {
    return Promise.resolve();
  }
  logout() {
    return null;
  }
  getToken() {
    return Promise.resolve('');
  }
  traverseCursor(cursor, action) {
    const {
      folder,
      extension,
      index,
      pageCount,
      depth
    } = cursor.data.toObject();
    const newIndex = (() => {
      if (action === 'next') {
        return index + 1;
      }
      if (action === 'prev') {
        return index - 1;
      }
      if (action === 'first') {
        return 0;
      }
      if (action === 'last') {
        return pageCount;
      }
      return 0;
    })();
    // TODO: stop assuming cursors are for collections
    const allFiles = getFolderFiles(window.repoFiles, folder, extension, depth);
    const allEntries = allFiles.map(f => ({
      data: f.content,
      file: {
        path: f.path,
        id: f.path
      }
    }));
    const entries = allEntries.slice(newIndex * pageSize, newIndex * pageSize + pageSize);
    const newCursor = getCursor(folder, extension, allEntries, newIndex, depth);
    return Promise.resolve({
      entries,
      cursor: newCursor
    });
  }
  entriesByFolder(folder, extension, depth) {
    const files = folder ? getFolderFiles(window.repoFiles, folder, extension, depth) : [];
    const entries = files.map(f => ({
      data: f.content,
      file: {
        path: f.path,
        id: f.path
      }
    }));
    const cursor = getCursor(folder, extension, entries, 0, depth);
    const ret = take(entries, pageSize);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ret[CURSOR_COMPATIBILITY_SYMBOL] = cursor;
    return Promise.resolve(ret);
  }
  entriesByFiles(files) {
    return Promise.all(files.map(file => ({
      file,
      data: getFile(file.path, window.repoFiles).content
    })));
  }
  getEntry(path) {
    return Promise.resolve({
      file: {
        path,
        id: null
      },
      data: getFile(path, window.repoFiles).content
    });
  }
  unpublishedEntries() {
    return Promise.resolve(Object.keys(window.repoFilesUnpublished));
  }
  unpublishedEntry({
    id,
    collection,
    slug
  }) {
    if (id) {
      const parts = id.split('/');
      collection = parts[0];
      slug = parts[1];
    }
    const entry = window.repoFilesUnpublished[`${collection}/${slug}`];
    if (!entry) {
      return Promise.reject(new EditorialWorkflowError('content is not under editorial workflow', true));
    }
    return Promise.resolve(entry);
  }
  async unpublishedEntryDataFile(collection, slug, path) {
    const entry = window.repoFilesUnpublished[`${collection}/${slug}`];
    const file = entry.diffs.find(d => d.path === path);
    return file?.content;
  }
  async unpublishedEntryMediaFile(collection, slug, path) {
    const entry = window.repoFilesUnpublished[`${collection}/${slug}`];
    const file = entry.diffs.find(d => d.path === path);
    return this.normalizeAsset(file?.content);
  }
  deleteUnpublishedEntry(collection, slug) {
    delete window.repoFilesUnpublished[`${collection}/${slug}`];
    return Promise.resolve();
  }
  async addOrUpdateUnpublishedEntry(key, dataFiles, assetProxies, slug, collection, status) {
    const diffs = [];
    dataFiles.forEach(dataFile => {
      const {
        path,
        newPath,
        raw
      } = dataFile;
      const currentDataFile = window.repoFilesUnpublished[key]?.diffs.find(d => d.path === path);
      const originalPath = currentDataFile ? currentDataFile.originalPath : path;
      diffs.push({
        originalPath,
        id: newPath || path,
        path: newPath || path,
        newFile: isEmpty(getFile(originalPath, window.repoFiles)),
        status: 'added',
        content: raw
      });
    });
    assetProxies.forEach(a => {
      const asset = this.normalizeAsset(a);
      diffs.push({
        id: asset.id,
        path: asset.path,
        newFile: true,
        status: 'added',
        content: asset
      });
    });
    window.repoFilesUnpublished[key] = {
      slug,
      collection,
      status,
      diffs,
      updatedAt: new Date().toISOString()
    };
  }
  async persistEntry(entry, options) {
    if (options.useWorkflow) {
      const slug = entry.dataFiles[0].slug;
      const key = `${options.collectionName}/${slug}`;
      const currentEntry = window.repoFilesUnpublished[key];
      const status = currentEntry?.status || options.status || this.options.initialWorkflowStatus;
      this.addOrUpdateUnpublishedEntry(key, entry.dataFiles, entry.assets, slug, options.collectionName, status);
      return Promise.resolve();
    }
    entry.dataFiles.forEach(dataFile => {
      const {
        path,
        raw
      } = dataFile;
      writeFile(path, raw, window.repoFiles);
    });
    entry.assets.forEach(a => {
      writeFile(a.path, a, window.repoFiles);
    });
    return Promise.resolve();
  }
  updateUnpublishedEntryStatus(collection, slug, newStatus) {
    window.repoFilesUnpublished[`${collection}/${slug}`].status = newStatus;
    return Promise.resolve();
  }
  publishUnpublishedEntry(collection, slug) {
    const key = `${collection}/${slug}`;
    const unpubEntry = window.repoFilesUnpublished[key];
    delete window.repoFilesUnpublished[key];
    const tree = window.repoFiles;
    unpubEntry.diffs.forEach(d => {
      if (d.originalPath && !d.newFile) {
        const originalPath = d.originalPath;
        const sourceDir = dirname(originalPath);
        const destDir = dirname(d.path);
        const toMove = getFolderFiles(tree, originalPath.split('/')[0], '', 100).filter(f => f.path.startsWith(sourceDir));
        toMove.forEach(f => {
          deleteFile(f.path, tree);
          writeFile(f.path.replace(sourceDir, destDir), f.content, tree);
        });
      }
      writeFile(d.path, d.content, tree);
    });
    return Promise.resolve();
  }
  getMedia(mediaFolder = this.mediaFolder) {
    const files = getFolderFiles(window.repoFiles, mediaFolder.split('/')[0], '', 100).filter(f => f.path.startsWith(mediaFolder));
    const assets = files.map(f => this.normalizeAsset(f.content));
    return Promise.resolve(assets);
  }
  async getMediaFile(path) {
    const asset = getFile(path, window.repoFiles).content;
    const url = asset.toString();
    const name = basename(path);
    const blob = await fetch(url).then(res => res.blob());
    const fileObj = new File([blob], name);
    return {
      id: url,
      displayURL: url,
      path,
      name,
      size: fileObj.size,
      file: fileObj,
      url
    };
  }
  normalizeAsset(assetProxy) {
    const fileObj = assetProxy.fileObj;
    const {
      name,
      size
    } = fileObj;
    const objectUrl = attempt(window.URL.createObjectURL, fileObj);
    const url = isError(objectUrl) ? '' : objectUrl;
    const normalizedAsset = {
      id: uuid(),
      name,
      size,
      path: assetProxy.path,
      url,
      displayURL: url,
      fileObj
    };
    return normalizedAsset;
  }
  persistMedia(assetProxy) {
    const normalizedAsset = this.normalizeAsset(assetProxy);
    writeFile(assetProxy.path, assetProxy, window.repoFiles);
    return Promise.resolve(normalizedAsset);
  }
  deleteFiles(paths) {
    paths.forEach(path => {
      deleteFile(path, window.repoFiles);
    });
    return Promise.resolve();
  }
  async getDeployPreview() {
    return null;
  }
}