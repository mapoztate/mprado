import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import { colorsRaw } from './styles.js';
import Icon from './Icon';
import { jsx as ___EmotionJSX } from "@emotion/react";
const GoBackButtonStyle = /*#__PURE__*/_styled("a", {
  target: "e1sptrq41",
  label: "GoBackButtonStyle"
})(process.env.NODE_ENV === "production" ? {
  name: "1d6fxhx",
  styles: "display:flex;align-items:center;margin-top:50px;padding:10px;font-size:14px"
} : {
  name: "1d6fxhx",
  styles: "display:flex;align-items:center;margin-top:50px;padding:10px;font-size:14px/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Hb0JhY2tCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tDIiwiZmlsZSI6Ii4uLy4uL3NyYy9Hb0JhY2tCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgY29sb3JzUmF3IH0gZnJvbSAnLi9zdHlsZXMuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuY29uc3QgR29CYWNrQnV0dG9uU3R5bGUgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIGZvbnQtc2l6ZTogMTRweDtcbmA7XG5cbmNvbnN0IEJ1dHRvblRleHQgPSBzdHlsZWQucGBcbiAgY29sb3I6ICR7Y29sb3JzUmF3LmdyYXl9O1xuICBtYXJnaW46IDAgMTBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvQmFja0J1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gTWFudWFsbHkgdmFsaWRhdGUgUHJvcFR5cGVzIC0gUmVhY3QgMTkgYnJlYWtpbmcgY2hhbmdlXG4gICAgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKEdvQmFja0J1dHRvbi5wcm9wVHlwZXMsIHRoaXMucHJvcHMsICdwcm9wJywgJ0dvQmFja0J1dHRvbicpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaHJlZiwgdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8R29CYWNrQnV0dG9uU3R5bGUgaHJlZj17aHJlZn0+XG4gICAgICAgIDxJY29uIHR5cGU9XCJhcnJvd1wiIHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgIDxCdXR0b25UZXh0Pnt0KCd1aS5kZWZhdWx0LmdvQmFja1RvU2l0ZScpfTwvQnV0dG9uVGV4dD5cbiAgICAgIDwvR29CYWNrQnV0dG9uU3R5bGU+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const ButtonText = /*#__PURE__*/_styled("p", {
  target: "e1sptrq40",
  label: "ButtonText"
})("color:", colorsRaw.gray, ";margin:0 10px;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Hb0JhY2tCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUIyQiIsImZpbGUiOiIuLi8uLi9zcmMvR29CYWNrQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGNvbG9yc1JhdyB9IGZyb20gJy4vc3R5bGVzLmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbmNvbnN0IEdvQmFja0J1dHRvblN0eWxlID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMTBweDtcblxuICBmb250LXNpemU6IDE0cHg7XG5gO1xuXG5jb25zdCBCdXR0b25UZXh0ID0gc3R5bGVkLnBgXG4gIGNvbG9yOiAke2NvbG9yc1Jhdy5ncmF5fTtcbiAgbWFyZ2luOiAwIDEwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb0JhY2tCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIE1hbnVhbGx5IHZhbGlkYXRlIFByb3BUeXBlcyAtIFJlYWN0IDE5IGJyZWFraW5nIGNoYW5nZVxuICAgIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyhHb0JhY2tCdXR0b24ucHJvcFR5cGVzLCB0aGlzLnByb3BzLCAncHJvcCcsICdHb0JhY2tCdXR0b24nKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhyZWYsIHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEdvQmFja0J1dHRvblN0eWxlIGhyZWY9e2hyZWZ9PlxuICAgICAgICA8SWNvbiB0eXBlPVwiYXJyb3dcIiBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICA8QnV0dG9uVGV4dD57dCgndWkuZGVmYXVsdC5nb0JhY2tUb1NpdGUnKX08L0J1dHRvblRleHQ+XG4gICAgICA8L0dvQmFja0J1dHRvblN0eWxlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"));
export default class GoBackButton extends React.Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired
  };
  componentDidMount() {
    // Manually validate PropTypes - React 19 breaking change
    PropTypes.checkPropTypes(GoBackButton.propTypes, this.props, 'prop', 'GoBackButton');
  }
  render() {
    const {
      href,
      t
    } = this.props;
    return ___EmotionJSX(GoBackButtonStyle, {
      href: href
    }, ___EmotionJSX(Icon, {
      type: "arrow",
      size: "small"
    }), ___EmotionJSX(ButtonText, null, t('ui.default.goBackToSite')));
  }
}