import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import { PkceAuthenticator } from 'decap-cms-lib-auth';
import { AuthenticationPage, Icon } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
const LoginButtonIcon = /*#__PURE__*/_styled(Icon, {
  target: "es1j68m0",
  label: "LoginButtonIcon"
})(process.env.NODE_ENV === "production" ? {
  name: "1gnqu05",
  styles: "margin-right:18px"
} : {
  name: "1gnqu05",
  styles: "margin-right:18px/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9DIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IFBrY2VBdXRoZW50aWNhdG9yIH0gZnJvbSAnZGVjYXAtY21zLWxpYi1hdXRoJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFnZSwgSWNvbiB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuY29uc3QgTG9naW5CdXR0b25JY29uID0gc3R5bGVkKEljb24pYFxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRlYUF1dGhlbnRpY2F0aW9uUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW5Qcm9ncmVzczogUHJvcFR5cGVzLmJvb2wsXG4gICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb25Mb2dpbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge307XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gTWFudWFsbHkgdmFsaWRhdGUgUHJvcFR5cGVzIC0gUmVhY3QgMTkgYnJlYWtpbmcgY2hhbmdlXG4gICAgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKFxuICAgICAgR2l0ZWFBdXRoZW50aWNhdGlvblBhZ2UucHJvcFR5cGVzLFxuICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICdwcm9wJyxcbiAgICAgICdHaXRlYUF1dGhlbnRpY2F0aW9uUGFnZScsXG4gICAgKTtcblxuICAgIGNvbnN0IHsgYmFzZV91cmwgPSAnaHR0cHM6Ly90cnkuZ2l0ZWEuaW8nLCBhcHBfaWQgPSAnJyB9ID0gdGhpcy5wcm9wcy5jb25maWcuYmFja2VuZDtcbiAgICB0aGlzLmF1dGggPSBuZXcgUGtjZUF1dGhlbnRpY2F0b3Ioe1xuICAgICAgYmFzZV91cmwsXG4gICAgICBhdXRoX2VuZHBvaW50OiAnbG9naW4vb2F1dGgvYXV0aG9yaXplJyxcbiAgICAgIGFwcF9pZCxcbiAgICAgIGF1dGhfdG9rZW5fZW5kcG9pbnQ6ICdsb2dpbi9vYXV0aC9hY2Nlc3NfdG9rZW4nLFxuICAgICAgYXV0aF90b2tlbl9lbmRwb2ludF9jb250ZW50X3R5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICB9KTtcbiAgICAvLyBDb21wbGV0ZSBhdXRoZW50aWNhdGlvbiBpZiB3ZSB3ZXJlIHJlZGlyZWN0ZWQgYmFjayB0byBmcm9tIHRoZSBwcm92aWRlci5cbiAgICB0aGlzLmF1dGguY29tcGxldGVBdXRoKChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ2luRXJyb3I6IGVyci50b1N0cmluZygpIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGRhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luKGRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTG9naW4gPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hdXRoLmF1dGhlbnRpY2F0ZSh7IHNjb3BlOiAncmVwb3NpdG9yeScgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9naW5FcnJvcjogZXJyLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMub25Mb2dpbihkYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpblByb2dyZXNzLCBjb25maWcsIHQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBdXRoZW50aWNhdGlvblBhZ2VcbiAgICAgICAgb25Mb2dpbj17dGhpcy5oYW5kbGVMb2dpbn1cbiAgICAgICAgbG9naW5EaXNhYmxlZD17aW5Qcm9ncmVzc31cbiAgICAgICAgbG9naW5FcnJvck1lc3NhZ2U9e3RoaXMuc3RhdGUubG9naW5FcnJvcn1cbiAgICAgICAgbG9nb1VybD17Y29uZmlnLmxvZ29fdXJsfSAvLyBEZXByZWNhdGVkLCByZXBsYWNlZCBieSBgbG9nby5zcmNgXG4gICAgICAgIGxvZ289e2NvbmZpZy5sb2dvfVxuICAgICAgICBzaXRlVXJsPXtjb25maWcuc2l0ZV91cmx9XG4gICAgICAgIHJlbmRlckJ1dHRvbkNvbnRlbnQ9eygpID0+IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8TG9naW5CdXR0b25JY29uIHR5cGU9XCJnaXRlYVwiIC8+eycgJ31cbiAgICAgICAgICAgIHtpblByb2dyZXNzID8gdCgnYXV0aC5sb2dnaW5nSW4nKSA6IHQoJ2F1dGgubG9naW5XaXRoR2l0ZWEnKX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB0PXt0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
export default class GiteaAuthenticationPage extends React.Component {
  static propTypes = {
    inProgress: PropTypes.bool,
    config: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
  };
  state = {};
  componentDidMount() {
    // Manually validate PropTypes - React 19 breaking change
    PropTypes.checkPropTypes(GiteaAuthenticationPage.propTypes, this.props, 'prop', 'GiteaAuthenticationPage');
    const {
      base_url = 'https://try.gitea.io',
      app_id = ''
    } = this.props.config.backend;
    this.auth = new PkceAuthenticator({
      base_url,
      auth_endpoint: 'login/oauth/authorize',
      app_id,
      auth_token_endpoint: 'login/oauth/access_token',
      auth_token_endpoint_content_type: 'application/json; charset=utf-8'
    });
    // Complete authentication if we were redirected back to from the provider.
    this.auth.completeAuth((err, data) => {
      if (err) {
        this.setState({
          loginError: err.toString()
        });
        return;
      } else if (data) {
        this.props.onLogin(data);
      }
    });
  }
  handleLogin = e => {
    e.preventDefault();
    this.auth.authenticate({
      scope: 'repository'
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
        type: "gitea"
      }), ' ', inProgress ? t('auth.loggingIn') : t('auth.loginWithGitea')),
      t: t
    });
  }
}