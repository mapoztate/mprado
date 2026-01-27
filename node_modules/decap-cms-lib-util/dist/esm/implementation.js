import semaphore from 'semaphore';
import unionBy from 'lodash/unionBy';
import sortBy from 'lodash/sortBy';
import { basename } from './path';
const MAX_CONCURRENT_DOWNLOADS = 10;
async function fetchFiles(files, readFile, readFileMetadata, apiName) {
  const sem = semaphore(MAX_CONCURRENT_DOWNLOADS);
  const promises = [];
  files.forEach(file => {
    promises.push(new Promise(resolve => sem.take(async () => {
      try {
        const [data, fileMetadata] = await Promise.all([readFile(file.path, file.id, {
          parseText: true
        }), readFileMetadata(file.path, file.id)]);
        resolve({
          file: {
            ...file,
            ...fileMetadata
          },
          data: data
        });
        sem.leave();
      } catch (error) {
        sem.leave();
        console.error(`failed to load file from ${apiName}: ${file.path}`);
        resolve({
          error: true
        });
      }
    })));
  });
  return Promise.all(promises).then(loadedEntries => loadedEntries.filter(loadedEntry => !loadedEntry.error));
}
export async function entriesByFolder(listFiles, readFile, readFileMetadata, apiName) {
  const files = await listFiles();
  return fetchFiles(files, readFile, readFileMetadata, apiName);
}
export async function entriesByFiles(files, readFile, readFileMetadata, apiName) {
  return fetchFiles(files, readFile, readFileMetadata, apiName);
}
export async function unpublishedEntries(listEntriesKeys) {
  try {
    const keys = await listEntriesKeys();
    return keys;
  } catch (error) {
    if (error.message === 'Not Found') {
      return Promise.resolve([]);
    }
    throw error;
  }
}
export function blobToFileObj(name, blob) {
  const options = name.match(/.svg$/) ? {
    type: 'image/svg+xml'
  } : {};
  return new File([blob], name, options);
}
export async function getMediaAsBlob(path, id, readFile) {
  let blob;
  if (path.match(/.svg$/)) {
    const text = await readFile(path, id, {
      parseText: true
    });
    blob = new Blob([text], {
      type: 'image/svg+xml'
    });
  } else {
    blob = await readFile(path, id, {
      parseText: false
    });
  }
  return blob;
}
export async function getMediaDisplayURL(displayURL, readFile, semaphore) {
  const {
    path,
    id
  } = displayURL;
  return new Promise((resolve, reject) => semaphore.take(() => getMediaAsBlob(path, id, readFile).then(blob => URL.createObjectURL(blob)).then(resolve, reject).finally(() => semaphore.leave())));
}
export async function runWithLock(lock, func, message) {
  try {
    const acquired = await lock.acquire();
    if (!acquired) {
      console.warn(message);
    }
    const result = await func();
    return result;
  } finally {
    lock.release();
  }
}
const LOCAL_KEY = 'git.local';
function getLocalKey({
  branch,
  folder,
  extension,
  depth
}) {
  return `${LOCAL_KEY}.${branch}.${folder}.${extension}.${depth}`;
}
export async function persistLocalTree({
  localForage,
  localTree,
  branch,
  folder,
  extension,
  depth
}) {
  await localForage.setItem(getLocalKey({
    branch,
    folder,
    extension,
    depth
  }), localTree);
}
export async function getLocalTree({
  localForage,
  branch,
  folder,
  extension,
  depth
}) {
  const localTree = await localForage.getItem(getLocalKey({
    branch,
    folder,
    extension,
    depth
  }));
  return localTree;
}
async function getDiffFromLocalTree({
  branch,
  localTree,
  folder,
  getDifferences,
  filterFile,
  getFileId
}) {
  const diff = await getDifferences(branch.sha, localTree.head);
  const diffFiles = diff.filter(d => d.oldPath?.startsWith(folder) || d.newPath?.startsWith(folder)).reduce((acc, d) => {
    if (d.status === 'renamed') {
      acc.push({
        path: d.oldPath,
        name: basename(d.oldPath),
        deleted: true
      });
      acc.push({
        path: d.newPath,
        name: basename(d.newPath),
        deleted: false
      });
    } else if (d.status === 'deleted') {
      acc.push({
        path: d.oldPath,
        name: basename(d.oldPath),
        deleted: true
      });
    } else {
      acc.push({
        path: d.newPath || d.oldPath,
        name: basename(d.newPath || d.oldPath),
        deleted: false
      });
    }
    return acc;
  }, []).filter(filterFile);
  const diffFilesWithIds = await Promise.all(diffFiles.map(async file => {
    if (!file.deleted) {
      const id = await getFileId(file.path);
      return {
        ...file,
        id
      };
    } else {
      return {
        ...file,
        id: ''
      };
    }
  }));
  return diffFilesWithIds;
}
export async function allEntriesByFolder({
  listAllFiles,
  readFile,
  readFileMetadata,
  apiName,
  branch,
  localForage,
  folder,
  extension,
  depth,
  getDefaultBranch,
  isShaExistsInBranch,
  getDifferences,
  getFileId,
  filterFile,
  customFetch
}) {
  async function listAllFilesAndPersist() {
    const files = await listAllFiles(folder, extension, depth);
    const branch = await getDefaultBranch();
    await persistLocalTree({
      localForage,
      localTree: {
        head: branch.sha,
        files: files.map(f => ({
          id: f.id,
          path: f.path,
          name: basename(f.path)
        }))
      },
      branch: branch.name,
      depth,
      extension,
      folder
    });
    return files;
  }
  async function listFiles() {
    const localTree = await getLocalTree({
      localForage,
      branch,
      folder,
      extension,
      depth
    });
    if (localTree) {
      const branch = await getDefaultBranch();
      // if the branch was forced pushed the local tree sha can be removed from the remote tree
      const localTreeInBranch = await isShaExistsInBranch(branch.name, localTree.head);
      if (!localTreeInBranch) {
        console.log(`Can't find local tree head '${localTree.head}' in branch '${branch.name}', rebuilding local tree`);
        return listAllFilesAndPersist();
      }
      const diff = await getDiffFromLocalTree({
        branch,
        localTree,
        folder,
        extension,
        depth,
        getDifferences,
        getFileId,
        filterFile
      }).catch(e => {
        console.log('Failed getting diff from local tree:', e);
        return null;
      });
      if (!diff) {
        console.log(`Diff is null, rebuilding local tree`);
        return listAllFilesAndPersist();
      }
      if (diff.length === 0) {
        // return local copy
        return localTree.files;
      } else {
        const deleted = diff.reduce((acc, d) => {
          acc[d.path] = d.deleted;
          return acc;
        }, {});
        const newCopy = sortBy(unionBy(diff.filter(d => !deleted[d.path]), localTree.files.filter(f => !deleted[f.path]), file => file.path), file => file.path);
        await persistLocalTree({
          localForage,
          localTree: {
            head: branch.sha,
            files: newCopy
          },
          branch: branch.name,
          depth,
          extension,
          folder
        });
        return newCopy;
      }
    } else {
      return listAllFilesAndPersist();
    }
  }
  const files = await listFiles();
  if (customFetch) {
    return await customFetch(files);
  }
  return await fetchFiles(files, readFile, readFileMetadata, apiName);
}