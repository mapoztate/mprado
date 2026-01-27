import flow from 'lodash/flow';
import fromPairs from 'lodash/fromPairs';
import { map } from 'lodash/fp';
import { fromJS } from 'immutable';
import unsentRequest from './unsentRequest';
import APIError from './APIError';
export function filterByExtension(file, extension) {
  const path = file?.path || '';
  return path.endsWith(extension.startsWith('.') ? extension : `.${extension}`);
}
function catchFormatErrors(format, formatter) {
  return res => {
    try {
      return formatter(res);
    } catch (err) {
      throw new Error(`Response cannot be parsed into the expected format (${format}): ${err.message}`);
    }
  };
}
const responseFormatters = fromJS({
  json: async res => {
    const contentType = res.headers.get('Content-Type') || '';
    if (!contentType.startsWith('application/json') && !contentType.startsWith('text/json')) {
      throw new Error(`${contentType} is not a valid JSON Content-Type`);
    }
    return res.json();
  },
  text: async res => res.text(),
  blob: async res => res.blob()
}).mapEntries(([format, formatter]) => [format, catchFormatErrors(format, formatter)]);
export async function parseResponse(res, {
  expectingOk = true,
  format = 'text',
  apiName = ''
}) {
  let body;
  try {
    const formatter = responseFormatters.get(format, false);
    if (!formatter) {
      throw new Error(`${format} is not a supported response format.`);
    }
    body = await formatter(res);
  } catch (err) {
    throw new APIError(err.message, res.status, apiName);
  }
  if (expectingOk && !res.ok) {
    const isJSON = format === 'json';
    const message = isJSON ? body.message || body.msg || body.error?.message : body;
    throw new APIError(isJSON && message ? message : body, res.status, apiName);
  }
  return body;
}
export function responseParser(options) {
  return res => parseResponse(res, options);
}
export function parseLinkHeader(header) {
  if (!header) {
    return {};
  }
  return flow([linksString => linksString.split(','), map(str => str.trim().split(';')), map(([linkStr, keyStr]) => [keyStr.match(/rel="(.*?)"/)[1], linkStr.trim().match(/<(.*?)>/)[1].replace(/\+/g, '%20')]), fromPairs])(header);
}
export async function getAllResponses(url, options = {}, linkHeaderRelName, nextUrlProcessor) {
  const maxResponses = 30;
  let responseCount = 1;
  let req = unsentRequest.fromFetchArguments(url, options);
  const pageResponses = [];
  while (req && responseCount < maxResponses) {
    const pageResponse = await unsentRequest.performRequest(req);
    const linkHeader = pageResponse.headers.get('Link');
    const nextURL = linkHeader && parseLinkHeader(linkHeader)[linkHeaderRelName];
    const {
      headers = {}
    } = options;
    req = nextURL && unsentRequest.fromFetchArguments(nextUrlProcessor(nextURL), {
      headers
    });
    pageResponses.push(pageResponse);
    responseCount++;
  }
  return pageResponses;
}
export function getPathDepth(path) {
  const depth = path.split('/').length;
  return depth;
}