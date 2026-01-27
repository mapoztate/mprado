import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
function MapPreview({
  value
}) {
  return ___EmotionJSX(WidgetPreviewContainer, null, value ? value.toString() : null);
}
MapPreview.propTypes = {
  value: PropTypes.string
};
export default MapPreview;