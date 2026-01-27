import React from 'react';
import PropTypes from 'prop-types';
import { jsx as ___EmotionJSX } from "@emotion/react";
export function FileUploadButton({
  label,
  imagesOnly,
  onChange,
  disabled,
  className
}) {
  return ___EmotionJSX("label", {
    tabIndex: '0',
    className: `nc-fileUploadButton ${className || ''}`
  }, ___EmotionJSX("span", null, label), ___EmotionJSX("input", {
    type: "file",
    accept: imagesOnly ? 'image/*' : '*/*',
    onChange: onChange,
    disabled: disabled
  }));
}
FileUploadButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  imagesOnly: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};