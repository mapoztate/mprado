import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import { PkceAuthenticator } from 'decap-cms-lib-auth';
import { AuthenticationPage, Icon } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
const LoginButtonIcon = /*#__PURE__*/_styled(Icon, {
  target: "ent5iu90",
  label: "LoginButtonIcon"
})(process.env.NODE_ENV === "production" ? {
  name: "1gnqu05",
  styles: "margin-right:18px"
} : {
  name: "1gnqu05",
  styles: "margin-right:18px/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QS0NFQXV0aGVudGljYXRpb25QYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9vQyIsImZpbGUiOiIuLi8uLi9zcmMvUEtDRUF1dGhlbnRpY2F0aW9uUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCB7IFBrY2VBdXRoZW50aWNhdG9yIH0gZnJvbSAnZGVjYXAtY21zLWxpYi1hdXRoJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFnZSwgSWNvbiB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuY29uc3QgTG9naW5CdXR0b25JY29uID0gc3R5bGVkKEljb24pYFxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG5gO1xuXG5mdW5jdGlvbiBub3JtYWxpemVDbGFpbXNUb1VzZXIoXG4gIGVtYWlsX2NsYWltLFxuICBmdWxsX25hbWVfY2xhaW0sXG4gIGZpcnN0X25hbWVfY2xhaW0sXG4gIGxhc3RfbmFtZV9jbGFpbSxcbiAgYXZhdGFyX3VybF9jbGFpbSxcbikge1xuICByZXR1cm4gKHVzZXIsIGNsYWltcykgPT4ge1xuICAgIGlmICghY2xhaW1zKSByZXR1cm47XG5cbiAgICBpZiAoIXVzZXIuZW1haWwgJiYgY2xhaW1zW2VtYWlsX2NsYWltXSkge1xuICAgICAgdXNlci5lbWFpbCA9IGNsYWltc1tlbWFpbF9jbGFpbV07XG4gICAgfVxuICAgIGlmICghdXNlci51c2VyX21ldGFkYXRhLmZ1bGxfbmFtZSAmJiBmdWxsX25hbWVfY2xhaW0gJiYgY2xhaW1zW2Z1bGxfbmFtZV9jbGFpbV0pIHtcbiAgICAgIHVzZXIudXNlcl9tZXRhZGF0YS5mdWxsX25hbWUgPSBjbGFpbXNbZnVsbF9uYW1lX2NsYWltXTtcbiAgICB9XG4gICAgaWYgKCF1c2VyLnVzZXJfbWV0YWRhdGEuZnVsbF9uYW1lICYmIChmaXJzdF9uYW1lX2NsYWltIHx8IGxhc3RfbmFtZV9jbGFpbSkpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBbXTtcbiAgICAgIGlmIChjbGFpbXNbZmlyc3RfbmFtZV9jbGFpbV0pIG5hbWUucHVzaChjbGFpbXNbZmlyc3RfbmFtZV9jbGFpbV0pO1xuICAgICAgaWYgKGNsYWltc1tsYXN0X25hbWVfY2xhaW1dKSBuYW1lLnB1c2goY2xhaW1zW2xhc3RfbmFtZV9jbGFpbV0pO1xuICAgICAgaWYgKG5hbWUubGVuZ3RoKSB7XG4gICAgICAgIHVzZXIudXNlcl9tZXRhZGF0YS5mdWxsX25hbWUgPSBuYW1lLmpvaW4oJyAnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF1c2VyLnVzZXJfbWV0YWRhdGEuYXZhdGFyX3VybCAmJiBhdmF0YXJfdXJsX2NsYWltICYmIGNsYWltc1thdmF0YXJfdXJsX2NsYWltXSkge1xuICAgICAgdXNlci51c2VyX21ldGFkYXRhLmF2YXRhcl91cmwgPSBjbGFpbXNbYXZhdGFyX3VybF9jbGFpbV07XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQS0NFQXV0aGVudGljYXRpb25QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpblByb2dyZXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBvbkxvZ2luOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGUgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBPbGQgY29uZmlndXJhdGlvbiBvcHRpb25zLCBhdmFpbGFibGUgZnJvbSB0aGUgYmFja2VuZCBjb25maWd1cmF0aW9uXG4gICAgY29uc3Qge1xuICAgICAgYmFzZV91cmw6IGJhY2tlbmRfYmFzZV91cmwgPSAnJyxcbiAgICAgIGFwcF9pZDogYmFja2VuZF9hcHBfaWQgPSAnJyxcbiAgICAgIGF1dGhfZW5kcG9pbnQ6IGJhY2tlbmRfYXV0aF9lbmRwb2ludCA9ICdvYXV0aDIvYXV0aG9yaXplJyxcbiAgICAgIGF1dGhfdG9rZW5fZW5kcG9pbnQ6IGJhY2tlbmRfYXV0aF90b2tlbl9lbmRwb2ludCA9ICdvYXV0aDIvdG9rZW4nLFxuICAgIH0gPSB0aGlzLnByb3BzLmNvbmZpZy5iYWNrZW5kO1xuICAgIC8vIE5ldyBjb25maWd1cmF0aW9uIG9wdGlvbnMsIHNlcGFyYXRlbHkgZGVmaW5lZCBpbiB0aGUgXCJhdXRoXCIgY29uZmlndXJhdGlvblxuICAgIGNvbnN0IHtcbiAgICAgIHVzZV9vaWRjID0gZmFsc2UsXG4gICAgICBiYXNlX3VybCA9IGJhY2tlbmRfYmFzZV91cmwsXG4gICAgICBhdXRoX2VuZHBvaW50ID0gYmFja2VuZF9hdXRoX2VuZHBvaW50LFxuICAgICAgYXV0aF90b2tlbl9lbmRwb2ludCA9IGJhY2tlbmRfYXV0aF90b2tlbl9lbmRwb2ludCxcbiAgICAgIGFwcF9pZCA9IGJhY2tlbmRfYXBwX2lkLFxuICAgICAgYXV0aF90b2tlbl9lbmRwb2ludF9jb250ZW50X3R5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgIGVtYWlsX2NsYWltID0gJ2VtYWlsJyxcbiAgICAgIGZ1bGxfbmFtZV9jbGFpbSxcbiAgICAgIGZpcnN0X25hbWVfY2xhaW0sXG4gICAgICBsYXN0X25hbWVfY2xhaW0sXG4gICAgICBhdmF0YXJfdXJsX2NsYWltLFxuICAgIH0gPSB0aGlzLnByb3BzLmNvbmZpZy5hdXRoIHx8IHt9O1xuXG4gICAgY29uc3Qgbm9ybWFsaXplQ2xhaW1zID0gbm9ybWFsaXplQ2xhaW1zVG9Vc2VyKFxuICAgICAgZW1haWxfY2xhaW0sXG4gICAgICBmdWxsX25hbWVfY2xhaW0sXG4gICAgICBmaXJzdF9uYW1lX2NsYWltLFxuICAgICAgbGFzdF9uYW1lX2NsYWltLFxuICAgICAgYXZhdGFyX3VybF9jbGFpbSxcbiAgICApO1xuXG4gICAgdGhpcy5hdXRoID0gbmV3IFBrY2VBdXRoZW50aWNhdG9yKHtcbiAgICAgIGJhc2VfdXJsLFxuICAgICAgYXBwX2lkLFxuICAgICAgdXNlX29pZGMsXG4gICAgICBhdXRoX2VuZHBvaW50LFxuICAgICAgYXV0aF90b2tlbl9lbmRwb2ludCxcbiAgICAgIGF1dGhfdG9rZW5fZW5kcG9pbnRfY29udGVudF90eXBlLFxuICAgIH0pO1xuXG4gICAgLy8gQ29tcGxldGUgYXV0aGVudGljYXRpb24gaWYgd2Ugd2VyZSByZWRpcmVjdGVkIGJhY2sgZnJvbSB0aGUgcHJvdmlkZXIuXG4gICAgdGhpcy5hdXRoLmNvbXBsZXRlQXV0aCgoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2dpbkVycm9yOiBlcnIudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkYXRhLnVzZXJfbWV0YWRhdGEgPSB7fTtcbiAgICAgIGlmIChkYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICBkYXRhLnRva2VuID0gZGF0YS5hY2Nlc3NfdG9rZW47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGF0YS5jbGFpbXMgPSBqd3REZWNvZGUoZGF0YS5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgIG5vcm1hbGl6ZUNsYWltcyhkYXRhLCBkYXRhLmNsYWltcyk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8qIElnbm9yZSAqL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5pZF90b2tlbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRhdGEuaWRDbGFpbXMgPSBqd3REZWNvZGUoZGF0YS5pZF90b2tlbik7XG4gICAgICAgICAgbm9ybWFsaXplQ2xhaW1zKGRhdGEsIGRhdGEuaWRDbGFpbXMpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvKiBJZ25vcmUgKi9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLm9uTG9naW4oZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVMb2dpbiA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXMucHJvcHMuY29uZmlnLmF1dGg/LnNjb3BlIHx8IHRoaXMucHJvcHMuY29uZmlnLmF1dGhfc2NvcGUgfHwgJ29wZW5pZCBlbWFpbCc7XG4gICAgdGhpcy5hdXRoLmF1dGhlbnRpY2F0ZSh7IHNjb3BlIH0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ2luRXJyb3I6IGVyci50b1N0cmluZygpIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm9uTG9naW4oZGF0YSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5Qcm9ncmVzcywgY29uZmlnLCB0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8QXV0aGVudGljYXRpb25QYWdlXG4gICAgICAgIG9uTG9naW49e3RoaXMuaGFuZGxlTG9naW59XG4gICAgICAgIGxvZ2luRGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgIGxvZ2luRXJyb3JNZXNzYWdlPXt0aGlzLnN0YXRlLmxvZ2luRXJyb3J9XG4gICAgICAgIGxvZ29Vcmw9e2NvbmZpZy5sb2dvX3VybH0gLy8gRGVwcmVjYXRlZCwgcmVwbGFjZWQgYnkgYGxvZ28uc3JjYFxuICAgICAgICBsb2dvPXtjb25maWcubG9nb31cbiAgICAgICAgc2l0ZVVybD17Y29uZmlnLnNpdGVfdXJsfVxuICAgICAgICByZW5kZXJCdXR0b25Db250ZW50PXsoKSA9PiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPExvZ2luQnV0dG9uSWNvbiB0eXBlPVwibGlua1wiIC8+IHtpblByb2dyZXNzID8gdCgnYXV0aC5sb2dnaW5nSW4nKSA6IHQoJ2F1dGgubG9naW4nKX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB0PXt0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
function normalizeClaimsToUser(email_claim, full_name_claim, first_name_claim, last_name_claim, avatar_url_claim) {
  return (user, claims) => {
    if (!claims) return;
    if (!user.email && claims[email_claim]) {
      user.email = claims[email_claim];
    }
    if (!user.user_metadata.full_name && full_name_claim && claims[full_name_claim]) {
      user.user_metadata.full_name = claims[full_name_claim];
    }
    if (!user.user_metadata.full_name && (first_name_claim || last_name_claim)) {
      const name = [];
      if (claims[first_name_claim]) name.push(claims[first_name_claim]);
      if (claims[last_name_claim]) name.push(claims[last_name_claim]);
      if (name.length) {
        user.user_metadata.full_name = name.join(' ');
      }
    }
    if (!user.user_metadata.avatar_url && avatar_url_claim && claims[avatar_url_claim]) {
      user.user_metadata.avatar_url = claims[avatar_url_claim];
    }
  };
}
export default class PKCEAuthenticationPage extends React.Component {
  static propTypes = {
    inProgress: PropTypes.bool,
    config: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
  };
  state = {};
  componentDidMount() {
    // Old configuration options, available from the backend configuration
    const {
      base_url: backend_base_url = '',
      app_id: backend_app_id = '',
      auth_endpoint: backend_auth_endpoint = 'oauth2/authorize',
      auth_token_endpoint: backend_auth_token_endpoint = 'oauth2/token'
    } = this.props.config.backend;
    // New configuration options, separately defined in the "auth" configuration
    const {
      use_oidc = false,
      base_url = backend_base_url,
      auth_endpoint = backend_auth_endpoint,
      auth_token_endpoint = backend_auth_token_endpoint,
      app_id = backend_app_id,
      auth_token_endpoint_content_type = 'application/x-www-form-urlencoded; charset=utf-8',
      email_claim = 'email',
      full_name_claim,
      first_name_claim,
      last_name_claim,
      avatar_url_claim
    } = this.props.config.auth || {};
    const normalizeClaims = normalizeClaimsToUser(email_claim, full_name_claim, first_name_claim, last_name_claim, avatar_url_claim);
    this.auth = new PkceAuthenticator({
      base_url,
      app_id,
      use_oidc,
      auth_endpoint,
      auth_token_endpoint,
      auth_token_endpoint_content_type
    });

    // Complete authentication if we were redirected back from the provider.
    this.auth.completeAuth((err, data) => {
      if (err) {
        this.setState({
          loginError: err.toString()
        });
        return;
      }
      data.user_metadata = {};
      if (data.access_token) {
        data.token = data.access_token;
        try {
          data.claims = jwtDecode(data.access_token);
          normalizeClaims(data, data.claims);
        } catch {
          /* Ignore */
        }
      }
      if (data.id_token) {
        try {
          data.idClaims = jwtDecode(data.id_token);
          normalizeClaims(data, data.idClaims);
        } catch {
          /* Ignore */
        }
      }
      this.props.onLogin(data);
    });
  }
  handleLogin = e => {
    e.preventDefault();
    const scope = this.props.config.auth?.scope || this.props.config.auth_scope || 'openid email';
    this.auth.authenticate({
      scope
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