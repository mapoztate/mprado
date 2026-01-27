import { API as GithubAPI } from 'decap-cms-backend-github';
import { APIError } from 'decap-cms-lib-util';
export default class API extends GithubAPI {
  constructor(config) {
    super({
      getUser: () => Promise.reject('Never used'),
      ...config
    });
    this.apiRoot = config.apiRoot;
    this.tokenPromise = config.tokenPromise;
    this.commitAuthor = config.commitAuthor;
    this.isLargeMedia = config.isLargeMedia;
    this.repoURL = '';
    this.originRepoURL = '';
  }
  hasWriteAccess() {
    return this.getDefaultBranch().then(() => true).catch(error => {
      if (error.status === 401) {
        if (error.message === 'Bad credentials') {
          throw new APIError('Git Gateway Error: Please ask your site administrator to reissue the Git Gateway token.', error.status, 'Git Gateway');
        } else {
          return false;
        }
      } else if (error.status === 404 && (error.message === undefined || error.message === 'Unable to locate site configuration')) {
        throw new APIError(`Git Gateway Error: Please make sure Git Gateway is enabled on your site.`, error.status, 'Git Gateway');
      } else {
        console.error('Problem fetching repo data from Git Gateway');
        throw error;
      }
    });
  }
  requestHeaders(headers = {}) {
    return this.tokenPromise().then(jwtToken => {
      const baseHeader = {
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json; charset=utf-8',
        ...headers
      };
      return baseHeader;
    });
  }
  handleRequestError(error, responseStatus) {
    throw new APIError(error.message || error.msg, responseStatus, 'Git Gateway');
  }
  user() {
    return Promise.resolve({
      login: '',
      ...this.commitAuthor
    });
  }
  async getHeadReference(head) {
    if (!this.repoOwner) {
      // get the repo owner from the branch url
      // this is required for returning the full head reference, e.g. owner:head
      // when filtering pull requests based on the head
      const branch = await this.getDefaultBranch();
      const self = branch._links.self;
      const regex = new RegExp('https?://.+?/repos/(.+?)/');
      const owner = self.match(regex);
      this.repoOwner = owner ? owner[1] : '';
    }
    return super.getHeadReference(head);
  }
  commit(message, changeTree) {
    const commitParams = {
      message,
      tree: changeTree.sha,
      parents: changeTree.parentSha ? [changeTree.parentSha] : []
    };
    if (this.commitAuthor) {
      commitParams.author = {
        ...this.commitAuthor,
        date: new Date().toISOString()
      };
    }
    return this.request('/git/commits', {
      method: 'POST',
      body: JSON.stringify(commitParams)
    });
  }
  nextUrlProcessor() {
    return url => url.replace(/^(?:[a-z]+:\/\/.+?\/.+?\/.+?\/)/, `${this.apiRoot}/`);
  }
  async diffFromFile(file) {
    const diff = await super.diffFromFile(file);
    return {
      ...diff,
      binary: diff.binary || (await this.isLargeMedia(file.filename))
    };
  }
}