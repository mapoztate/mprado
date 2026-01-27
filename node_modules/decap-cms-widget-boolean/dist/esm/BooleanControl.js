function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { css } from '@emotion/react';
import { Toggle, ToggleBackground, colors } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
function BooleanBackground({
  isActive,
  ...props
}) {
  return ___EmotionJSX(ToggleBackground, _extends({
    css: /*#__PURE__*/css("background-color:", isActive ? colors.active : colors.textFieldBorder, ";;label:BooleanBackground;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Cb29sZWFuQ29udHJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTYyIsImZpbGUiOiIuLi8uLi9zcmMvQm9vbGVhbkNvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBUb2dnbGUsIFRvZ2dsZUJhY2tncm91bmQsIGNvbG9ycyB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuZnVuY3Rpb24gQm9vbGVhbkJhY2tncm91bmQoeyBpc0FjdGl2ZSwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUb2dnbGVCYWNrZ3JvdW5kXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtpc0FjdGl2ZSA/IGNvbG9ycy5hY3RpdmUgOiBjb2xvcnMudGV4dEZpZWxkQm9yZGVyfTtcbiAgICAgIGB9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vbGVhbkNvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZm9ySUQsIG9uQ2hhbmdlLCBjbGFzc05hbWVXcmFwcGVyLCBzZXRBY3RpdmVTdHlsZSwgc2V0SW5hY3RpdmVTdHlsZSB9ID1cbiAgICAgIHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVXcmFwcGVyfT5cbiAgICAgICAgPFRvZ2dsZVxuICAgICAgICAgIGlkPXtmb3JJRH1cbiAgICAgICAgICBhY3RpdmU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBvbkZvY3VzPXtzZXRBY3RpdmVTdHlsZX1cbiAgICAgICAgICBvbkJsdXI9e3NldEluYWN0aXZlU3R5bGV9XG4gICAgICAgICAgQmFja2dyb3VuZD17Qm9vbGVhbkJhY2tncm91bmR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJvb2xlYW5Db250cm9sLnByb3BUeXBlcyA9IHtcbiAgZmllbGQ6IEltbXV0YWJsZVByb3BUeXBlcy5tYXAuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZVdyYXBwZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2V0QWN0aXZlU3R5bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldEluYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGZvcklEOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Cb29sZWFuQ29udHJvbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhbHVlOiBmYWxzZSxcbn07XG4iXX0= */"))
  }, props));
}
export default class BooleanControl extends React.Component {
  render() {
    const {
      value,
      forID,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props;
    return ___EmotionJSX("div", {
      className: classNameWrapper
    }, ___EmotionJSX(Toggle, {
      id: forID,
      active: value,
      onChange: onChange,
      onFocus: setActiveStyle,
      onBlur: setInactiveStyle,
      Background: BooleanBackground
    }));
  }
}
BooleanControl.propTypes = {
  field: ImmutablePropTypes.map.isRequired,
  onChange: PropTypes.func.isRequired,
  classNameWrapper: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.bool
};
BooleanControl.defaultProps = {
  value: false
};