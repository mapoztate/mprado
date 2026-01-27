import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import isString from 'lodash/isString';
import { WidgetPreviewContainer } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
function toValue(value, field) {
  if (isString(value)) {
    return value;
  }
  if (Map.isMap(value)) {
    return value.get(field.getIn(['keys', 'code'], 'code'), '');
  }
  return '';
}
function CodePreview(props) {
  return ___EmotionJSX(WidgetPreviewContainer, null, ___EmotionJSX("pre", null, ___EmotionJSX("code", null, toValue(props.value, props.field))));
}
CodePreview.propTypes = {
  value: PropTypes.node
};
export default CodePreview;