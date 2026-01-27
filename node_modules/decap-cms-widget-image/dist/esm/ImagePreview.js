import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { WidgetPreviewContainer } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
const StyledImage = /*#__PURE__*/_styled(({
  src
}) => ___EmotionJSX("img", {
  src: src || '',
  role: "presentation"
}), {
  target: "eeuykvb0",
  label: "StyledImage"
})(process.env.NODE_ENV === "production" ? {
  name: "waguu7",
  styles: "display:block;max-width:100%;height:auto"
} : {
  name: "waguu7",
  styles: "display:block;max-width:100%;height:auto/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbWFnZVByZXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9GIiwiZmlsZSI6Ii4uLy4uL3NyYy9JbWFnZVByZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHsgV2lkZ2V0UHJldmlld0NvbnRhaW5lciB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoKHsgc3JjIH0pID0+IDxpbWcgc3JjPXtzcmMgfHwgJyd9IHJvbGU9XCJwcmVzZW50YXRpb25cIiAvPilgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbmA7XG5cbmZ1bmN0aW9uIFN0eWxlZEltYWdlQXNzZXQoeyBnZXRBc3NldCwgdmFsdWUsIGZpZWxkIH0pIHtcbiAgbGV0IHNyYyA9ICcnO1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3JjID0gZ2V0QXNzZXQodmFsdWUsIGZpZWxkKTtcbiAgfVxuICByZXR1cm4gPFN0eWxlZEltYWdlIHNyYz17c3JjfSAvPjtcbn1cblxuZnVuY3Rpb24gSW1hZ2VQcmV2aWV3Q29udGVudChwcm9wcykge1xuICBjb25zdCB7IHZhbHVlLCBnZXRBc3NldCwgZmllbGQgfSA9IHByb3BzO1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgTGlzdC5pc0xpc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcCgodmFsLCBpbmRleCkgPT4gKFxuICAgICAgPFN0eWxlZEltYWdlQXNzZXQga2V5PXtpbmRleH0gdmFsdWU9e3ZhbH0gZ2V0QXNzZXQ9e2dldEFzc2V0fSBmaWVsZD17ZmllbGR9IC8+XG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIDxTdHlsZWRJbWFnZUFzc2V0IHsuLi5wcm9wc30gLz47XG59XG5cbmZ1bmN0aW9uIEltYWdlUHJldmlldyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXaWRnZXRQcmV2aWV3Q29udGFpbmVyPlxuICAgICAge3Byb3BzLnZhbHVlID8gPEltYWdlUHJldmlld0NvbnRlbnQgey4uLnByb3BzfSAvPiA6IG51bGx9XG4gICAgPC9XaWRnZXRQcmV2aWV3Q29udGFpbmVyPlxuICApO1xufVxuXG5JbWFnZVByZXZpZXcucHJvcFR5cGVzID0ge1xuICBnZXRBc3NldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VQcmV2aWV3O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
function StyledImageAsset({
  getAsset,
  value,
  field
}) {
  let src = '';
  if (value instanceof File) {
    src = URL.createObjectURL(value);
  } else {
    src = getAsset(value, field);
  }
  return ___EmotionJSX(StyledImage, {
    src: src
  });
}
function ImagePreviewContent(props) {
  const {
    value,
    getAsset,
    field
  } = props;
  if (Array.isArray(value) || List.isList(value)) {
    return value.map((val, index) => ___EmotionJSX(StyledImageAsset, {
      key: index,
      value: val,
      getAsset: getAsset,
      field: field
    }));
  }
  return ___EmotionJSX(StyledImageAsset, props);
}
function ImagePreview(props) {
  return ___EmotionJSX(WidgetPreviewContainer, null, props.value ? ___EmotionJSX(ImagePreviewContent, props) : null);
}
ImagePreview.propTypes = {
  getAsset: PropTypes.func.isRequired,
  value: PropTypes.node
};
export default ImagePreview;