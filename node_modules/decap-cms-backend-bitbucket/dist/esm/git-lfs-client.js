import minimatch from 'minimatch';
import { unsentRequest } from 'decap-cms-lib-util';
export class GitLfsClient {
  static defaultContentHeaders = {
    Accept: 'application/vnd.git-lfs+json',
    ['Content-Type']: 'application/vnd.git-lfs+json'
  };
  constructor(enabled, rootURL, patterns, makeAuthorizedRequest) {
    this.enabled = enabled;
    this.rootURL = rootURL;
    this.patterns = patterns;
    this.makeAuthorizedRequest = makeAuthorizedRequest;
  }
  matchPath(path) {
    return this.patterns.some(pattern => minimatch(path, pattern, {
      matchBase: true
    }));
  }
  async uploadResource(pointer, resource) {
    const requests = await this.getResourceUploadRequests([pointer]);
    for (const request of requests) {
      await this.doUpload(request.actions.upload, resource);
      if (request.actions.verify) {
        await this.doVerify(request.actions.verify, request);
      }
    }
    return pointer.sha;
  }
  async doUpload(upload, resource) {
    await unsentRequest.fetchWithTimeout(decodeURI(upload.href), {
      method: 'PUT',
      body: resource,
      headers: upload.header
    });
  }
  async doVerify(verify, object) {
    this.makeAuthorizedRequest({
      url: decodeURI(verify.href),
      method: 'POST',
      headers: {
        ...GitLfsClient.defaultContentHeaders,
        ...verify.header
      },
      body: JSON.stringify({
        oid: object.oid,
        size: object.size
      })
    });
  }
  async getResourceUploadRequests(objects) {
    const response = await this.makeAuthorizedRequest({
      url: `${this.rootURL}/objects/batch`,
      method: 'POST',
      headers: GitLfsClient.defaultContentHeaders,
      body: JSON.stringify({
        operation: 'upload',
        transfers: ['basic'],
        objects: objects.map(({
          sha,
          ...rest
        }) => ({
          ...rest,
          oid: sha
        }))
      })
    });
    return (await response.json()).objects.filter(object => {
      if ('error' in object) {
        console.error(object.error);
        return false;
      }
      return object.actions;
    });
  }
}