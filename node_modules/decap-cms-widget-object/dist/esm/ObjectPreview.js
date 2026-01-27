import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
function ObjectPreview({
  field
}) {
  return ___EmotionJSX(WidgetPreviewContainer, null, field && field.get('fields') || field.get('field') || null);
}
ObjectPreview.propTypes = {
  field: PropTypes.node
};
export default ObjectPreview;