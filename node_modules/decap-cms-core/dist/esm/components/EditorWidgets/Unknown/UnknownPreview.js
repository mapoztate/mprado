import React from 'react';
import { translate } from 'react-polyglot';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { jsx as ___EmotionJSX } from "@emotion/react";
function UnknownPreview({
  field,
  t
}) {
  return ___EmotionJSX("div", {
    className: "nc-widgetPreview"
  }, t('editor.editorWidgets.unknownPreview.noPreview', {
    widget: field.get('widget')
  }));
}
UnknownPreview.propTypes = {
  field: ImmutablePropTypes.map,
  t: PropTypes.func.isRequired
};
export default translate()(UnknownPreview);