import PropTypes from 'prop-types';
import React from 'react';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { WidgetPreviewContainer } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
function ListPreview({
  values
}) {
  return ___EmotionJSX("ul", null, values.map((value, idx) => ___EmotionJSX("li", {
    key: idx
  }, value)));
}
function SelectPreview({
  value
}) {
  return ___EmotionJSX(WidgetPreviewContainer, null, value && (List.isList(value) ? ___EmotionJSX(ListPreview, {
    values: value
  }) : value), !value && null);
}
SelectPreview.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, ImmutablePropTypes.list])
};
export default SelectPreview;