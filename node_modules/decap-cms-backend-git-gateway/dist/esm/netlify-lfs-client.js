import { flow, fromPairs, map } from 'lodash/fp';
import isPlainObject from 'lodash/isPlainObject';
import isEmpty from 'lodash/isEmpty';
import minimatch from 'minimatch';
import { unsentRequest } from 'decap-cms-lib-util';
export function matchPath({
  patterns
}, path) {
  return patterns.some(pattern => minimatch(path, pattern, {
    matchBase: true
  }));
}

//
// API interactions

const defaultContentHeaders = {
  Accept: 'application/vnd.git-lfs+json',
  ['Content-Type']: 'application/vnd.git-lfs+json'
};
async function resourceExists({
  rootURL,
  makeAuthorizedRequest
}, {
  sha,
  size
}) {
  const response = await makeAuthorizedRequest({
    url: `${rootURL}/verify`,
    method: 'POST',
    headers: defaultContentHeaders,
    body: JSON.stringify({
      oid: sha,
      size
    })
  });
  if (response.ok) {
    return true;
  }
  if (response.status === 404) {
    return false;
  }

  // TODO: what kind of error to throw here? APIError doesn't seem
  // to fit
}
function getTransofrmationsParams(t) {
  if (isPlainObject(t) && !isEmpty(t)) {
    const {
      nf_resize: resize,
      w,
      h
    } = t;
    return `?nf_resize=${resize}&w=${w}&h=${h}`;
  }
  return '';
}
async function getDownloadURL({
  rootURL,
  transformImages: t,
  makeAuthorizedRequest
}, {
  sha
}) {
  try {
    const transformation = getTransofrmationsParams(t);
    const transformedPromise = makeAuthorizedRequest(`${rootURL}/origin/${sha}${transformation}`);
    const [transformed, original] = await Promise.all([transformedPromise,
    // if transformation is defined, we need to load the original so we have the correct meta data
    transformation ? makeAuthorizedRequest(`${rootURL}/origin/${sha}`) : transformedPromise]);
    if (!transformed.ok) {
      const error = await transformed.json();
      throw new Error(`Failed getting large media for sha '${sha}': '${error.code} - ${error.msg}'`);
    }
    const transformedBlob = await transformed.blob();
    const url = URL.createObjectURL(transformedBlob);
    return {
      url,
      blob: transformation ? await original.blob() : transformedBlob
    };
  } catch (error) {
    console.error(error);
    return {
      url: '',
      blob: new Blob()
    };
  }
}
function uploadOperation(objects) {
  return {
    operation: 'upload',
    transfers: ['basic'],
    objects: objects.map(({
      sha,
      ...rest
    }) => ({
      ...rest,
      oid: sha
    }))
  };
}
async function getResourceUploadURLs({
  rootURL,
  makeAuthorizedRequest
}, pointerFiles) {
  const response = await makeAuthorizedRequest({
    url: `${rootURL}/objects/batch`,
    method: 'POST',
    headers: defaultContentHeaders,
    body: JSON.stringify(uploadOperation(pointerFiles))
  });
  const {
    objects
  } = await response.json();
  const uploadUrls = objects.map(object => {
    if (object.error) {
      throw new Error(object.error.message);
    }
    return object.actions.upload.href;
  });
  return uploadUrls;
}
function uploadBlob(uploadURL, blob) {
  return unsentRequest.fetchWithTimeout(uploadURL, {
    method: 'PUT',
    body: blob
  });
}
async function uploadResource(clientConfig, {
  sha,
  size
}, resource) {
  const existingFile = await resourceExists(clientConfig, {
    sha,
    size
  });
  if (existingFile) {
    return sha;
  }
  const [uploadURL] = await getResourceUploadURLs(clientConfig, [{
    sha,
    size
  }]);
  await uploadBlob(uploadURL, resource);
  return sha;
}

//
// Create Large Media client

function configureFn(config, fn) {
  return (...args) => fn(config, ...args);
}
const clientFns = {
  resourceExists,
  getResourceUploadURLs,
  getDownloadURL,
  uploadResource,
  matchPath
};
export function getClient(clientConfig) {
  return flow([Object.keys, map(key => [key, configureFn(clientConfig, clientFns[key])]), fromPairs, configuredFns => ({
    ...configuredFns,
    patterns: clientConfig.patterns,
    enabled: clientConfig.enabled
  })])(clientFns);
}