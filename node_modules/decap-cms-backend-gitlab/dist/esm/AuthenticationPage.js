import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import { NetlifyAuthenticator, ImplicitAuthenticator, PkceAuthenticator } from 'decap-cms-lib-auth';
import { AuthenticationPage, Icon } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
const LoginButtonIcon = /*#__PURE__*/_styled(Icon, {
  target: "e80yw6v0",
  label: "LoginButtonIcon"
})(process.env.NODE_ENV === "production" ? {
  name: "1gnqu05",
  styles: "margin-right:18px"
} : {
  name: "1gnqu05",
  styles: "margin-right:18px/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW9DIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7XG4gIE5ldGxpZnlBdXRoZW50aWNhdG9yLFxuICBJbXBsaWNpdEF1dGhlbnRpY2F0b3IsXG4gIFBrY2VBdXRoZW50aWNhdG9yLFxufSBmcm9tICdkZWNhcC1jbXMtbGliLWF1dGgnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25QYWdlLCBJY29uIH0gZnJvbSAnZGVjYXAtY21zLXVpLWRlZmF1bHQnO1xuXG5jb25zdCBMb2dpbkJ1dHRvbkljb24gPSBzdHlsZWQoSWNvbilgXG4gIG1hcmdpbi1yaWdodDogMThweDtcbmA7XG5cbmNvbnN0IGNsaWVudFNpZGVBdXRoZW50aWNhdG9ycyA9IHtcbiAgcGtjZTogKHtcbiAgICBiYXNlX3VybCxcbiAgICBhdXRoX2VuZHBvaW50LFxuICAgIGFwcF9pZCxcbiAgICBhdXRoX3Rva2VuX2VuZHBvaW50fSkgPT5cbiAgICBuZXcgUGtjZUF1dGhlbnRpY2F0b3Ioe1xuICAgICAgYmFzZV91cmwsXG4gICAgICBhdXRoX2VuZHBvaW50LFxuICAgICAgYXBwX2lkLFxuICAgICAgYXV0aF90b2tlbl9lbmRwb2ludCxcbiAgICAgIGF1dGhfdG9rZW5fZW5kcG9pbnRfY29udGVudF90eXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgfSksXG5cbiAgaW1wbGljaXQ6ICh7XG4gICAgYmFzZV91cmwsXG4gICAgYXV0aF9lbmRwb2ludCxcbiAgICBhcHBfaWQsXG4gICAgY2xlYXJIYXNoIH0pID0+XG4gICAgbmV3IEltcGxpY2l0QXV0aGVudGljYXRvcih7XG4gICAgICBiYXNlX3VybCxcbiAgICAgIGF1dGhfZW5kcG9pbnQsXG4gICAgICBhcHBfaWQsXG4gICAgICBjbGVhckhhc2gsXG4gICAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRMYWJBdXRoZW50aWNhdGlvblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uTG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5Qcm9ncmVzczogUHJvcFR5cGVzLmJvb2wsXG4gICAgYmFzZV91cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l0ZUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGF1dGhFbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjbGVhckhhc2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGUgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBNYW51YWxseSB2YWxpZGF0ZSBQcm9wVHlwZXMgLSBSZWFjdCAxOSBicmVha2luZyBjaGFuZ2VcbiAgICBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoR2l0TGFiQXV0aGVudGljYXRpb25QYWdlLnByb3BUeXBlcywgdGhpcy5wcm9wcywgJ3Byb3AnLCAnR2l0TGFiQXV0aGVudGljYXRpb25QYWdlJyk7XG5cbiAgICBjb25zdCB7XG4gICAgICBhdXRoX3R5cGU6IGF1dGhUeXBlID0gJycsXG4gICAgICBiYXNlX3VybCA9ICdodHRwczovL2dpdGxhYi5jb20nLFxuICAgICAgYXV0aF9lbmRwb2ludCA9ICdvYXV0aC9hdXRob3JpemUnLFxuICAgICAgYXBwX2lkID0gJycsXG4gICAgfSA9IHRoaXMucHJvcHMuY29uZmlnLmJhY2tlbmQ7XG5cbiAgICBpZiAoY2xpZW50U2lkZUF1dGhlbnRpY2F0b3JzW2F1dGhUeXBlXSkge1xuICAgICAgdGhpcy5hdXRoID0gY2xpZW50U2lkZUF1dGhlbnRpY2F0b3JzW2F1dGhUeXBlXSh7XG4gICAgICAgIGJhc2VfdXJsLFxuICAgICAgICBhdXRoX2VuZHBvaW50LFxuICAgICAgICBhcHBfaWQsXG4gICAgICAgIGF1dGhfdG9rZW5fZW5kcG9pbnQ6ICdvYXV0aC90b2tlbicsXG4gICAgICAgIGNsZWFySGFzaDogdGhpcy5wcm9wcy5jbGVhckhhc2gsXG4gICAgICB9KTtcbiAgICAgIC8vIENvbXBsZXRlIGltcGxpY2l0IGF1dGhlbnRpY2F0aW9uIGlmIHdlIHdlcmUgcmVkaXJlY3RlZCBiYWNrIHRvIGZyb20gdGhlIHByb3ZpZGVyLlxuICAgICAgdGhpcy5hdXRoLmNvbXBsZXRlQXV0aCgoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9naW5FcnJvcjogZXJyLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMub25Mb2dpbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBuZXcgTmV0bGlmeUF1dGhlbnRpY2F0b3Ioe1xuICAgICAgICBiYXNlX3VybDogdGhpcy5wcm9wcy5iYXNlX3VybCxcbiAgICAgICAgc2l0ZV9pZDpcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ob3N0LnNwbGl0KCc6JylbMF0gPT09ICdsb2NhbGhvc3QnXG4gICAgICAgICAgICA/ICdkZW1vLmRlY2FwY21zLm9yZydcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5zaXRlSWQsXG4gICAgICAgIGF1dGhfZW5kcG9pbnQ6IHRoaXMucHJvcHMuYXV0aEVuZHBvaW50LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTG9naW4gPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hdXRoLmF1dGhlbnRpY2F0ZSh7IHByb3ZpZGVyOiAnZ2l0bGFiJywgc2NvcGU6ICdhcGknIH0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ2luRXJyb3I6IGVyci50b1N0cmluZygpIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm9uTG9naW4oZGF0YSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5Qcm9ncmVzcywgY29uZmlnLCB0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8QXV0aGVudGljYXRpb25QYWdlXG4gICAgICAgIG9uTG9naW49e3RoaXMuaGFuZGxlTG9naW59XG4gICAgICAgIGxvZ2luRGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgIGxvZ2luRXJyb3JNZXNzYWdlPXt0aGlzLnN0YXRlLmxvZ2luRXJyb3J9XG4gICAgICAgIGxvZ29Vcmw9e2NvbmZpZy5sb2dvX3VybH0gLy8gRGVwcmVjYXRlZCwgcmVwbGFjZWQgYnkgYGxvZ28uc3JjYFxuICAgICAgICBsb2dvPXtjb25maWcubG9nb31cbiAgICAgICAgc2l0ZVVybD17Y29uZmlnLnNpdGVfdXJsfVxuICAgICAgICByZW5kZXJCdXR0b25Db250ZW50PXsoKSA9PiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPExvZ2luQnV0dG9uSWNvbiB0eXBlPVwiZ2l0bGFiXCIgLz57JyAnfVxuICAgICAgICAgICAge2luUHJvZ3Jlc3MgPyB0KCdhdXRoLmxvZ2dpbmdJbicpIDogdCgnYXV0aC5sb2dpbldpdGhHaXRMYWInKX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB0PXt0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const clientSideAuthenticators = {
  pkce: ({
    base_url,
    auth_endpoint,
    app_id,
    auth_token_endpoint
  }) => new PkceAuthenticator({
    base_url,
    auth_endpoint,
    app_id,
    auth_token_endpoint,
    auth_token_endpoint_content_type: 'application/json; charset=utf-8'
  }),
  implicit: ({
    base_url,
    auth_endpoint,
    app_id,
    clearHash
  }) => new ImplicitAuthenticator({
    base_url,
    auth_endpoint,
    app_id,
    clearHash
  })
};
export default class GitLabAuthenticationPage extends React.Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    inProgress: PropTypes.bool,
    base_url: PropTypes.string,
    siteId: PropTypes.string,
    authEndpoint: PropTypes.string,
    config: PropTypes.object.isRequired,
    clearHash: PropTypes.func,
    t: PropTypes.func.isRequired
  };
  state = {};
  componentDidMount() {
    // Manually validate PropTypes - React 19 breaking change
    PropTypes.checkPropTypes(GitLabAuthenticationPage.propTypes, this.props, 'prop', 'GitLabAuthenticationPage');
    const {
      auth_type: authType = '',
      base_url = 'https://gitlab.com',
      auth_endpoint = 'oauth/authorize',
      app_id = ''
    } = this.props.config.backend;
    if (clientSideAuthenticators[authType]) {
      this.auth = clientSideAuthenticators[authType]({
        base_url,
        auth_endpoint,
        app_id,
        auth_token_endpoint: 'oauth/token',
        clearHash: this.props.clearHash
      });
      // Complete implicit authentication if we were redirected back to from the provider.
      this.auth.completeAuth((err, data) => {
        if (err) {
          this.setState({
            loginError: err.toString()
          });
          return;
        }
        this.props.onLogin(data);
      });
    } else {
      this.auth = new NetlifyAuthenticator({
        base_url: this.props.base_url,
        site_id: document.location.host.split(':')[0] === 'localhost' ? 'demo.decapcms.org' : this.props.siteId,
        auth_endpoint: this.props.authEndpoint
      });
    }
  }
  handleLogin = e => {
    e.preventDefault();
    this.auth.authenticate({
      provider: 'gitlab',
      scope: 'api'
    }, (err, data) => {
      if (err) {
        this.setState({
          loginError: err.toString()
        });
        return;
      }
      this.props.onLogin(data);
    });
  };
  render() {
    const {
      inProgress,
      config,
      t
    } = this.props;
    return ___EmotionJSX(AuthenticationPage, {
      onLogin: this.handleLogin,
      loginDisabled: inProgress,
      loginErrorMessage: this.state.loginError,
      logoUrl: config.logo_url // Deprecated, replaced by `logo.src`
      ,
      logo: config.logo,
      siteUrl: config.site_url,
      renderButtonContent: () => ___EmotionJSX(React.Fragment, null, ___EmotionJSX(LoginButtonIcon, {
        type: "gitlab"
      }), ' ', inProgress ? t('auth.loggingIn') : t('auth.loginWithGitLab')),
      t: t
    });
  }
}