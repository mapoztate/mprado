import React from 'react';
import { translate } from 'react-polyglot';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { jsx as ___EmotionJSX } from "@emotion/react";
function UnknownControl({
  field,
  t
}) {
  return ___EmotionJSX("div", null, t('editor.editorWidgets.unknownControl.noControl', {
    widget: field.get('widget')
  }));
}
UnknownControl.propTypes = {
  field: ImmutablePropTypes.map,
  t: PropTypes.func.isRequired
};
export default translate()(UnknownControl);