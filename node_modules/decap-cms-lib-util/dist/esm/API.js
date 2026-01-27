import { asyncLock } from './asyncLock';
import unsentRequest from './unsentRequest';
import APIError from './APIError';
class RateLimitError extends Error {
  constructor(message, resetSeconds) {
    super(message);
    if (resetSeconds < 0) {
      this.resetSeconds = 1;
    } else if (resetSeconds > 60 * 60) {
      this.resetSeconds = 60 * 60;
    } else {
      this.resetSeconds = resetSeconds;
    }
  }
}
async function parseJsonResponse(response) {
  const json = await response.json();
  if (!response.ok) {
    return Promise.reject(json);
  }
  return json;
}
export function parseResponse(response) {
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.match(/json/)) {
    return parseJsonResponse(response);
  }
  const textPromise = response.text().then(text => {
    if (!response.ok) return Promise.reject(text);
    return text;
  });
  return textPromise;
}
export async function requestWithBackoff(api, req, attempt = 1) {
  if (api.rateLimiter) {
    await api.rateLimiter.acquire();
  }
  try {
    const builtRequest = await api.buildRequest(req);
    const requestFunction = api.requestFunction || unsentRequest.performRequest;
    const response = await requestFunction(builtRequest);
    if (response.status === 429) {
      // GitLab/Bitbucket too many requests
      const text = await response.text().catch(() => 'Too many requests');
      throw new Error(text);
    } else if (response.status === 403) {
      // GitHub too many requests
      const json = await response.json().catch(() => ({
        message: ''
      }));
      if (json.message.match('API rate limit exceeded')) {
        const now = new Date();
        const nextWindowInSeconds = response.headers.has('X-RateLimit-Reset') ? parseInt(response.headers.get('X-RateLimit-Reset')) : now.getTime() / 1000 + 60;
        throw new RateLimitError(json.message, nextWindowInSeconds);
      }
      response.json = () => Promise.resolve(json);
    }
    return response;
  } catch (err) {
    if (attempt > 5 || err.message === "Can't refresh access token when using implicit auth") {
      throw err;
    } else {
      if (!api.rateLimiter) {
        const timeout = err.resetSeconds || attempt * attempt;
        console.log(`Pausing requests for ${timeout} ${attempt === 1 ? 'second' : 'seconds'} due to fetch failures:`, err.message);
        api.rateLimiter = asyncLock();
        api.rateLimiter.acquire();
        setTimeout(() => {
          api.rateLimiter?.release();
          api.rateLimiter = undefined;
          console.log(`Done pausing requests`);
        }, 1000 * timeout);
      }
      return requestWithBackoff(api, req, attempt + 1);
    }
  }
}

// Options is an object which contains all the standard network request properties
// for modifying HTTP requests and may contains `params` property

// RequestConfig contains all the standard properties of a Request object and
// several custom properties:
// - "headers" property is an object whose properties and values are string types
// - `token` property to allow passing tokens for users using a private repo.
// - `params` property for customizing response
// - `backend`(compulsory) to specify which backend to be used: Github, Gitlab etc.

export const apiRoots = {
  github: 'https://api.github.com',
  gitlab: 'https://gitlab.com/api/v4',
  bitbucket: 'https://api.bitbucket.org/2.0'
};
export const endpointConstants = {
  singleRepo: {
    bitbucket: '/repositories',
    github: '/repos',
    gitlab: '/projects'
  }
};
const api = {
  buildRequest(req) {
    return req;
  }
};
function constructUrlWithParams(url, params) {
  if (params) {
    const paramList = [];
    for (const key in params) {
      paramList.push(`${key}=${encodeURIComponent(params[key])}`);
    }
    if (paramList.length) {
      url += `?${paramList.join('&')}`;
    }
  }
  return url;
}
async function constructRequestHeaders(headerConfig) {
  const {
    token,
    headers
  } = headerConfig;
  const baseHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    ...headers
  };
  if (token) {
    baseHeaders['Authorization'] = `Bearer ${token}`;
  }
  return Promise.resolve(baseHeaders);
}
function handleRequestError(error, responseStatus, backend) {
  throw new APIError(error.message, responseStatus, backend);
}
export async function apiRequest(path, config, parser = response => parseResponse(response)) {
  const {
    token,
    backend,
    ...props
  } = config;
  const options = {
    cache: 'no-cache',
    ...props
  };
  const headers = await constructRequestHeaders({
    headers: options.headers || {},
    token
  });
  const baseUrl = config.apiRoot ?? apiRoots[backend];
  const url = constructUrlWithParams(`${baseUrl}${path}`, options.params);
  let responseStatus = 500;
  try {
    const req = unsentRequest.fromFetchArguments(url, {
      ...options,
      headers
    });
    const response = await requestWithBackoff(api, req);
    responseStatus = response.status;
    const parsedResponse = await parser(response);
    return parsedResponse;
  } catch (error) {
    return handleRequestError(error, responseStatus, backend);
  }
}
export async function getDefaultBranchName(configs) {
  let apiPath;
  const {
    token,
    backend,
    repo,
    apiRoot
  } = configs;
  switch (backend) {
    case 'gitlab':
      {
        apiPath = `/projects/${encodeURIComponent(repo)}`;
        break;
      }
    case 'bitbucket':
      {
        apiPath = `/repositories/${repo}`;
        break;
      }
    default:
      {
        apiPath = `/repos/${repo}`;
      }
  }
  const repoInfo = await apiRequest(apiPath, {
    token,
    backend,
    apiRoot
  });
  let defaultBranchName;
  if (backend === 'bitbucket') {
    const {
      mainbranch: {
        name
      }
    } = repoInfo;
    defaultBranchName = name;
  } else {
    const {
      default_branch
    } = repoInfo;
    defaultBranchName = default_branch;
  }
  return defaultBranchName;
}
export async function readFile(id, fetchContent, localForage, isText) {
  const key = id ? isText ? `gh.${id}` : `gh.${id}.blob` : null;
  const cached = key ? await localForage.getItem(key) : null;
  if (cached) {
    return cached;
  }
  const content = await fetchContent();
  if (key) {
    await localForage.setItem(key, content);
  }
  return content;
}
function getFileMetadataKey(id) {
  return `gh.${id}.meta`;
}
export async function readFileMetadata(id, fetchMetadata, localForage) {
  const key = id ? getFileMetadataKey(id) : null;
  const cached = key && (await localForage.getItem(key));
  if (cached) {
    return cached;
  }
  const metadata = await fetchMetadata();
  if (key) {
    await localForage.setItem(key, metadata);
  }
  return metadata;
}

/**
 * Keywords for inferring a status that will provide a deploy preview URL.
 */
const PREVIEW_CONTEXT_KEYWORDS = ['deploy'];

/**
 * Check a given status context string to determine if it provides a link to a
 * deploy preview. Checks for an exact match against `previewContext` if given,
 * otherwise checks for inclusion of a value from `PREVIEW_CONTEXT_KEYWORDS`.
 */
export function isPreviewContext(context, previewContext) {
  if (previewContext) {
    return context === previewContext;
  }
  return PREVIEW_CONTEXT_KEYWORDS.some(keyword => context.includes(keyword));
}
export let PreviewState = /*#__PURE__*/function (PreviewState) {
  PreviewState["Other"] = "other";
  PreviewState["Success"] = "success";
  return PreviewState;
}({});

/**
 * Retrieve a deploy preview URL from an array of statuses. By default, a
 * matching status is inferred via `isPreviewContext`.
 */
export function getPreviewStatus(statuses, previewContext) {
  return statuses.find(({
    context
  }) => {
    return isPreviewContext(context, previewContext);
  });
}
function getConflictingBranches(branchName) {
  // for cms/posts/post-1, conflicting branches are cms/posts, cms
  const parts = branchName.split('/');
  parts.pop();
  const conflictingBranches = parts.reduce((acc, _, index) => {
    acc = [...acc, parts.slice(0, index + 1).join('/')];
    return acc;
  }, []);
  return conflictingBranches;
}
export async function throwOnConflictingBranches(branchName, getBranch, apiName) {
  const possibleConflictingBranches = getConflictingBranches(branchName);
  const conflictingBranches = await Promise.all(possibleConflictingBranches.map(b => getBranch(b).then(b => b.name).catch(() => '')));
  const conflictingBranch = conflictingBranches.filter(Boolean)[0];
  if (conflictingBranch) {
    throw new APIError(`Failed creating branch '${branchName}' since there is already a branch named '${conflictingBranch}'. Please delete the '${conflictingBranch}' branch and try again`, 500, apiName);
  }
}