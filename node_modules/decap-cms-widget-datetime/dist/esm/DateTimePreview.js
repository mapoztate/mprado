import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
function DatePreview({
  value
}) {
  return ___EmotionJSX(WidgetPreviewContainer, null, value ? value.toString() : null);
}
DatePreview.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
export default DatePreview;