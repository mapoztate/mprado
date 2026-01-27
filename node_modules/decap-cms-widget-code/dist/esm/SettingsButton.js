import _styled from "@emotion/styled/base";
import React from 'react';
import { Icon, buttons, shadows, zIndex } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
const StyledSettingsButton = /*#__PURE__*/_styled("button", {
  target: "epeop3r0",
  label: "StyledSettingsButton"
})(buttons.button, ";", buttons.default, ";", shadows.drop, ";display:block;position:absolute;z-index:", zIndex.zIndex100, ";right:8px;top:8px;opacity:0.8;padding:2px 4px;line-height:1;height:auto;", Icon, "{position:relative;top:1px;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZXR0aW5nc0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJMEMiLCJmaWxlIjoiLi4vLi4vc3JjL1NldHRpbmdzQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEljb24sIGJ1dHRvbnMsIHNoYWRvd3MsIHpJbmRleCB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuY29uc3QgU3R5bGVkU2V0dGluZ3NCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke2J1dHRvbnMuYnV0dG9ufTtcbiAgJHtidXR0b25zLmRlZmF1bHR9O1xuICAke3NoYWRvd3MuZHJvcH07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6ICR7ekluZGV4LnpJbmRleDEwMH07XG4gIHJpZ2h0OiA4cHg7XG4gIHRvcDogOHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBoZWlnaHQ6IGF1dG87XG5cbiAgJHtJY29ufSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMXB4O1xuICB9XG5gO1xuXG5mdW5jdGlvbiBTZXR0aW5nc0J1dHRvbih7IHNob3dDbG9zZSwgb25DbGljayB9KSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNldHRpbmdzQnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPEljb24gdHlwZT17c2hvd0Nsb3NlID8gJ2Nsb3NlJyA6ICdzZXR0aW5ncyd9IHNpemU9XCJzbWFsbFwiIC8+XG4gICAgPC9TdHlsZWRTZXR0aW5nc0J1dHRvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NCdXR0b247XG4iXX0= */"));
function SettingsButton({
  showClose,
  onClick
}) {
  return ___EmotionJSX(StyledSettingsButton, {
    onClick: onClick
  }, ___EmotionJSX(Icon, {
    type: showClose ? 'close' : 'settings',
    size: "small"
  }));
}
export default SettingsButton;