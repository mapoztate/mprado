import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
function StringPreview({
  value
}) {
  return ___EmotionJSX(WidgetPreviewContainer, null, value);
}
StringPreview.propTypes = {
  value: PropTypes.node
};
export default StringPreview;