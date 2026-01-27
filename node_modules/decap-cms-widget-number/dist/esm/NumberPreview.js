import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
function NumberPreview({
  value
}) {
  return ___EmotionJSX(WidgetPreviewContainer, null, value);
}
NumberPreview.propTypes = {
  value: PropTypes.node
};
export default NumberPreview;