import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import { ImplicitAuthenticator } from 'decap-cms-lib-auth';
import { AuthenticationPage, Icon } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
const LoginButtonIcon = /*#__PURE__*/_styled(Icon, {
  target: "e1n0346u0",
  label: "LoginButtonIcon"
})(process.env.NODE_ENV === "production" ? {
  name: "1gnqu05",
  styles: "margin-right:18px"
} : {
  name: "1gnqu05",
  styles: "margin-right:18px/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9DIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEltcGxpY2l0QXV0aGVudGljYXRvciB9IGZyb20gJ2RlY2FwLWNtcy1saWItYXV0aCc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblBhZ2UsIEljb24gfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmNvbnN0IExvZ2luQnV0dG9uSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXp1cmVBdXRoZW50aWNhdGlvblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uTG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5Qcm9ncmVzczogUHJvcFR5cGVzLmJvb2wsXG4gICAgYmFzZV91cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l0ZUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGF1dGhFbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjbGVhckhhc2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGUgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBNYW51YWxseSB2YWxpZGF0ZSBQcm9wVHlwZXMgLSBSZWFjdCAxOSBicmVha2luZyBjaGFuZ2VcbiAgICBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoXG4gICAgICBBenVyZUF1dGhlbnRpY2F0aW9uUGFnZS5wcm9wVHlwZXMsXG4gICAgICB0aGlzLnByb3BzLFxuICAgICAgJ3Byb3AnLFxuICAgICAgJ0F6dXJlQXV0aGVudGljYXRpb25QYWdlJyxcbiAgICApO1xuXG4gICAgdGhpcy5hdXRoID0gbmV3IEltcGxpY2l0QXV0aGVudGljYXRvcih7XG4gICAgICBiYXNlX3VybDogYGh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS8ke3RoaXMucHJvcHMuY29uZmlnLmJhY2tlbmQudGVuYW50X2lkfWAsXG4gICAgICBhdXRoX2VuZHBvaW50OiAnb2F1dGgyL2F1dGhvcml6ZScsXG4gICAgICBhcHBfaWQ6IHRoaXMucHJvcHMuY29uZmlnLmJhY2tlbmQuYXBwX2lkLFxuICAgICAgY2xlYXJIYXNoOiB0aGlzLnByb3BzLmNsZWFySGFzaCxcbiAgICB9KTtcbiAgICAvLyBDb21wbGV0ZSBpbXBsaWNpdCBhdXRoZW50aWNhdGlvbiBpZiB3ZSB3ZXJlIHJlZGlyZWN0ZWQgYmFjayB0byBmcm9tIHRoZSBwcm92aWRlci5cbiAgICB0aGlzLmF1dGguY29tcGxldGVBdXRoKChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTG9naW4gPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hdXRoLmF1dGhlbnRpY2F0ZShcbiAgICAgIHtcbiAgICAgICAgc2NvcGU6ICd2c28uY29kZV9mdWxsLHVzZXIucmVhZCcsXG4gICAgICAgIHJlc291cmNlOiAnNDk5Yjg0YWMtMTMyMS00MjdmLWFhMTctMjY3Y2E2OTc1Nzk4JyxcbiAgICAgICAgcHJvbXB0OiAnc2VsZWN0X2FjY291bnQnLFxuICAgICAgfSxcbiAgICAgIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2dpbkVycm9yOiBlcnIudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luKGRhdGEpO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluUHJvZ3Jlc3MsIGNvbmZpZywgdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QXV0aGVudGljYXRpb25QYWdlXG4gICAgICAgIG9uTG9naW49e3RoaXMuaGFuZGxlTG9naW59XG4gICAgICAgIGxvZ2luRGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgIGxvZ2luRXJyb3JNZXNzYWdlPXt0aGlzLnN0YXRlLmxvZ2luRXJyb3J9XG4gICAgICAgIGxvZ29Vcmw9e2NvbmZpZy5sb2dvX3VybH0gLy8gRGVwcmVjYXRlZCwgcmVwbGFjZWQgYnkgYGxvZ28uc3JjYFxuICAgICAgICBsb2dvPXtjb25maWcubG9nb31cbiAgICAgICAgcmVuZGVyQnV0dG9uQ29udGVudD17KCkgPT4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxMb2dpbkJ1dHRvbkljb24gdHlwZT1cImF6dXJlXCIgLz5cbiAgICAgICAgICAgIHtpblByb2dyZXNzID8gdCgnYXV0aC5sb2dnaW5nSW4nKSA6IHQoJ2F1dGgubG9naW5XaXRoQXp1cmUnKX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB0PXt0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
export default class AzureAuthenticationPage extends React.Component {
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
    PropTypes.checkPropTypes(AzureAuthenticationPage.propTypes, this.props, 'prop', 'AzureAuthenticationPage');
    this.auth = new ImplicitAuthenticator({
      base_url: `https://login.microsoftonline.com/${this.props.config.backend.tenant_id}`,
      auth_endpoint: 'oauth2/authorize',
      app_id: this.props.config.backend.app_id,
      clearHash: this.props.clearHash
    });
    // Complete implicit authentication if we were redirected back to from the provider.
    this.auth.completeAuth((err, data) => {
      if (err) {
        alert(err);
        return;
      }
      this.props.onLogin(data);
    });
  }
  handleLogin = e => {
    e.preventDefault();
    this.auth.authenticate({
      scope: 'vso.code_full,user.read',
      resource: '499b84ac-1321-427f-aa17-267ca6975798',
      prompt: 'select_account'
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
      renderButtonContent: () => ___EmotionJSX(React.Fragment, null, ___EmotionJSX(LoginButtonIcon, {
        type: "azure"
      }), inProgress ? t('auth.loggingIn') : t('auth.loginWithAzure')),
      t: t
    });
  }
}