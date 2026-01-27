import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import { PkceAuthenticator } from 'decap-cms-lib-auth';
import { AuthenticationPage, Icon } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
const LoginButtonIcon = /*#__PURE__*/_styled(Icon, {
  target: "e1eykva80",
  label: "LoginButtonIcon"
})(process.env.NODE_ENV === "production" ? {
  name: "1gnqu05",
  styles: "margin-right:18px"
} : {
  name: "1gnqu05",
  styles: "margin-right:18px/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9DIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IFBrY2VBdXRoZW50aWNhdG9yIH0gZnJvbSAnZGVjYXAtY21zLWxpYi1hdXRoJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFnZSwgSWNvbiB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuY29uc3QgTG9naW5CdXR0b25JY29uID0gc3R5bGVkKEljb24pYFxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmljUEtDRUF1dGhlbnRpY2F0aW9uUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW5Qcm9ncmVzczogUHJvcFR5cGVzLmJvb2wsXG4gICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb25Mb2dpbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge307XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gTWFudWFsbHkgdmFsaWRhdGUgUHJvcFR5cGVzIC0gUmVhY3QgMTkgYnJlYWtpbmcgY2hhbmdlXG4gICAgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKFxuICAgICAgR2VuZXJpY1BLQ0VBdXRoZW50aWNhdGlvblBhZ2UucHJvcFR5cGVzLFxuICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICdwcm9wJyxcbiAgICAgICdHZW5lcmljUEtDRUF1dGhlbnRpY2F0aW9uUGFnZScsXG4gICAgKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGJhc2VfdXJsID0gJycsXG4gICAgICBhcHBfaWQgPSAnJyxcbiAgICAgIGF1dGhfZW5kcG9pbnQgPSAnb2F1dGgyL2F1dGhvcml6ZScsXG4gICAgICBhdXRoX3Rva2VuX2VuZHBvaW50ID0gJ29hdXRoMi90b2tlbicsXG4gICAgfSA9IHRoaXMucHJvcHMuY29uZmlnLmJhY2tlbmQ7XG4gICAgdGhpcy5hdXRoID0gbmV3IFBrY2VBdXRoZW50aWNhdG9yKHtcbiAgICAgIGJhc2VfdXJsLFxuICAgICAgYXV0aF9lbmRwb2ludCxcbiAgICAgIGFwcF9pZCxcbiAgICAgIGF1dGhfdG9rZW5fZW5kcG9pbnQsXG4gICAgICBhdXRoX3Rva2VuX2VuZHBvaW50X2NvbnRlbnRfdHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCcsXG4gICAgfSk7XG4gICAgLy8gQ29tcGxldGUgYXV0aGVudGljYXRpb24gaWYgd2Ugd2VyZSByZWRpcmVjdGVkIGJhY2sgdG8gZnJvbSB0aGUgcHJvdmlkZXIuXG4gICAgdGhpcy5hdXRoLmNvbXBsZXRlQXV0aCgoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2dpbkVycm9yOiBlcnIudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTG9naW4gPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hdXRoLmF1dGhlbnRpY2F0ZSh7IHNjb3BlOiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvIG9wZW5pZCBlbWFpbCcgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9naW5FcnJvcjogZXJyLnRvU3RyaW5nKCkgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMub25Mb2dpbihkYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpblByb2dyZXNzLCBjb25maWcsIHQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBdXRoZW50aWNhdGlvblBhZ2VcbiAgICAgICAgb25Mb2dpbj17dGhpcy5oYW5kbGVMb2dpbn1cbiAgICAgICAgbG9naW5EaXNhYmxlZD17aW5Qcm9ncmVzc31cbiAgICAgICAgbG9naW5FcnJvck1lc3NhZ2U9e3RoaXMuc3RhdGUubG9naW5FcnJvcn1cbiAgICAgICAgbG9nb1VybD17Y29uZmlnLmxvZ29fdXJsfSAvLyBEZXByZWNhdGVkLCByZXBsYWNlZCBieSBgbG9nby5zcmNgXG4gICAgICAgIGxvZ289e2NvbmZpZy5sb2dvfVxuICAgICAgICBzaXRlVXJsPXtjb25maWcuc2l0ZV91cmx9XG4gICAgICAgIHJlbmRlckJ1dHRvbkNvbnRlbnQ9eygpID0+IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8TG9naW5CdXR0b25JY29uIHR5cGU9XCJsaW5rXCIgLz4ge2luUHJvZ3Jlc3MgPyB0KCdhdXRoLmxvZ2dpbmdJbicpIDogdCgnYXV0aC5sb2dpbicpfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHQ9e3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
export default class GenericPKCEAuthenticationPage extends React.Component {
  static propTypes = {
    inProgress: PropTypes.bool,
    config: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
  };
  state = {};
  componentDidMount() {
    // Manually validate PropTypes - React 19 breaking change
    PropTypes.checkPropTypes(GenericPKCEAuthenticationPage.propTypes, this.props, 'prop', 'GenericPKCEAuthenticationPage');
    const {
      base_url = '',
      app_id = '',
      auth_endpoint = 'oauth2/authorize',
      auth_token_endpoint = 'oauth2/token'
    } = this.props.config.backend;
    this.auth = new PkceAuthenticator({
      base_url,
      auth_endpoint,
      app_id,
      auth_token_endpoint,
      auth_token_endpoint_content_type: 'application/x-www-form-urlencoded; charset=utf-8'
    });
    // Complete authentication if we were redirected back to from the provider.
    this.auth.completeAuth((err, data) => {
      if (err) {
        this.setState({
          loginError: err.toString()
        });
        return;
      }
      this.props.onLogin(data);
    });
  }
  handleLogin = e => {
    e.preventDefault();
    this.auth.authenticate({
      scope: 'https://api.github.com/repo openid email'
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
        type: "link"
      }), " ", inProgress ? t('auth.loggingIn') : t('auth.login')),
      t: t
    });
  }
}