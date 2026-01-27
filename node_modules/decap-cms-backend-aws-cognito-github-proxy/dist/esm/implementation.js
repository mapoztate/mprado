import * as React from 'react';
import { GitHubBackend } from 'decap-cms-backend-github';
import { PKCEAuthenticationPage } from 'decap-cms-ui-auth';
import { jsx as ___EmotionJSX } from "@emotion/react";
export default class AwsCognitoGitHubProxyBackend extends GitHubBackend {
  constructor(config, options = {}) {
    super(config, options);
    this.bypassWriteAccessCheckForAppTokens = true;
    this.tokenKeyword = 'Bearer';
  }
  authComponent() {
    const wrappedAuthenticationPage = props => {
      const allProps = {
        ...props,
        backend: this
      };
      return ___EmotionJSX(PKCEAuthenticationPage, allProps);
    };
    wrappedAuthenticationPage.displayName = 'AuthenticationPage';
    return wrappedAuthenticationPage;
  }
  async currentUser({
    token
  }) {
    if (!this._currentUserPromise) {
      this._currentUserPromise = fetch(this.baseUrl + '/oauth2/userInfo', {
        headers: {
          Authorization: `${this.tokenKeyword} ${token}`
        }
      }).then(async res => {
        if (res.status == 401) {
          this.logout();
          return Promise.reject('Token expired');
        }
        const userInfo = await res.json();
        const owner = this.originRepo.split('/')[1];
        return {
          name: userInfo.email,
          login: owner,
          avatar_url: `https://github.com/${owner}.png`
        };
      });
    }
    return this._currentUserPromise;
  }
  async getPullRequestAuthor(pullRequest) {
    return pullRequest.user?.login;
  }
}