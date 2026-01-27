import { API as GitlabAPI } from 'decap-cms-backend-gitlab';
import { unsentRequest } from 'decap-cms-lib-util';
export default class API extends GitlabAPI {
  constructor(config) {
    super(config);
    this.tokenPromise = config.tokenPromise;
    this.commitAuthor = config.commitAuthor;
    this.repoURL = '';
  }
  withAuthorizationHeaders = async req => {
    const token = await this.tokenPromise();
    return unsentRequest.withHeaders({
      Authorization: `Bearer ${token}`
    }, req);
  };
  hasWriteAccess = () => Promise.resolve(true);
}