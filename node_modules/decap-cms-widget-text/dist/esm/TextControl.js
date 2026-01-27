function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import { jsx as ___EmotionJSX } from "@emotion/react";
var _ref = process.env.NODE_ENV === "production" ? {
  name: "1mnv7s1-TextControl",
  styles: "font-family:inherit;label:TextControl;"
} : {
  name: "1mnv7s1-TextControl",
  styles: "font-family:inherit;label:TextControl;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0Q29udHJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q1EiLCJmaWxlIjoiLi4vLi4vc3JjL1RleHRDb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Q29udHJvbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZm9ySUQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5ub2RlLFxuICAgIGNsYXNzTmFtZVdyYXBwZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzZXRBY3RpdmVTdHlsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZXRJbmFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6ICcnLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIE1hbnVhbGx5IHZhbGlkYXRlIFByb3BUeXBlcyAtIFJlYWN0IDE5IGJyZWFraW5nIGNoYW5nZVxuICAgIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyhUZXh0Q29udHJvbC5wcm9wVHlwZXMsIHRoaXMucHJvcHMsICdwcm9wJywgJ1RleHRDb250cm9sJyk7XG4gIH1cblxuICAvKipcbiAgICogQWx3YXlzIHVwZGF0ZSB0byBlbnN1cmUgYHJlYWN0LXRleHRhcmVhLWF1dG9zaXplYCBwcm9wZXJseSBjYWxjdWxhdGVzXG4gICAqIGhlaWdodC4gQ2VydGFpbiBzaXR1YXRpb25zLCBzdWNoIGFzIHRoaXMgd2lkZ2V0IGJlaW5nIG5lc3RlZCBpbiBhIGxpc3RcbiAgICogaXRlbSB0aGF0IGdldHMgcmVhcnJhbmdlZCwgY2FuIGxlYXZlIHRoZSB0ZXh0YXJlYSBpbiBhIG1pbmltYWwgaGVpZ2h0XG4gICAqIHN0YXRlLiBBbHdheXMgdXBkYXRpbmcgdGhpcyBwYXJ0aWN1bGFyIHdpZGdldCBzaG91bGQgZ2VuZXJhbGx5IGJlIGxvdyBjb3N0LFxuICAgKiBidXQgdGhpcyBzaG91bGQgYmUgb3B0aW1pemVkIGluIHRoZSBmdXR1cmUuXG4gICAqL1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb3JJRCwgdmFsdWUsIG9uQ2hhbmdlLCBjbGFzc05hbWVXcmFwcGVyLCBzZXRBY3RpdmVTdHlsZSwgc2V0SW5hY3RpdmVTdHlsZSB9ID1cbiAgICAgIHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRhcmVhXG4gICAgICAgIGlkPXtmb3JJRH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZVdyYXBwZXJ9XG4gICAgICAgIG9uRm9jdXM9e3NldEFjdGl2ZVN0eWxlfVxuICAgICAgICBvbkJsdXI9e3NldEluYWN0aXZlU3R5bGV9XG4gICAgICAgIG1pblJvd3M9ezV9XG4gICAgICAgIGNzcz17eyBmb250RmFtaWx5OiAnaW5oZXJpdCcgfX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
export default class TextControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired
  };
  static defaultProps = {
    value: ''
  };
  componentDidMount() {
    // Manually validate PropTypes - React 19 breaking change
    PropTypes.checkPropTypes(TextControl.propTypes, this.props, 'prop', 'TextControl');
  }

  /**
   * Always update to ensure `react-textarea-autosize` properly calculates
   * height. Certain situations, such as this widget being nested in a list
   * item that gets rearranged, can leave the textarea in a minimal height
   * state. Always updating this particular widget should generally be low cost,
   * but this should be optimized in the future.
   */
  shouldComponentUpdate() {
    return true;
  }
  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props;
    return ___EmotionJSX(Textarea, {
      id: forID,
      value: value || '',
      className: classNameWrapper,
      onFocus: setActiveStyle,
      onBlur: setInactiveStyle,
      minRows: 5,
      css: _ref,
      onChange: e => onChange(e.target.value)
    });
  }
}