import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { ClassNames } from '@emotion/react';
import { lengths, fonts } from 'decap-cms-ui-default';
import { createEditor } from 'slate';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { editorStyleVars, EditorControlBar } from '../styles';
import Toolbar from './Toolbar';
import defaultEmptyBlock from './plugins/blocks/defaultEmptyBlock';
import { jsx as ___EmotionJSX } from "@emotion/react";
function rawEditorStyles({
  minimal
}) {
  return `
  position: relative;
  overflow: hidden;
  overflow-x: auto;
  min-height: ${minimal ? 'auto' : lengths.richTextEditorMinHeight};
  font-family: ${fonts.mono};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 0;
  margin-top: -${editorStyleVars.stickyDistanceBottom};
`;
}
const RawEditorContainer = /*#__PURE__*/_styled("div", {
  target: "e12tj7710",
  label: "RawEditorContainer"
})(process.env.NODE_ENV === "production" ? {
  name: "bjn8wh",
  styles: "position:relative"
} : {
  name: "bjn8wh",
  styles: "position:relative/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9NYXJrZG93bkNvbnRyb2wvUmF3RWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCcUMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL01hcmtkb3duQ29udHJvbC9SYXdFZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHsgQ2xhc3NOYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGxlbmd0aHMsIGZvbnRzIH0gZnJvbSAnZGVjYXAtY21zLXVpLWRlZmF1bHQnO1xuaW1wb3J0IHsgY3JlYXRlRWRpdG9yIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHsgRWRpdGFibGUsIFJlYWN0RWRpdG9yLCBTbGF0ZSwgd2l0aFJlYWN0IH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IHsgd2l0aEhpc3RvcnkgfSBmcm9tICdzbGF0ZS1oaXN0b3J5JztcblxuaW1wb3J0IHsgZWRpdG9yU3R5bGVWYXJzLCBFZGl0b3JDb250cm9sQmFyIH0gZnJvbSAnLi4vc3R5bGVzJztcbmltcG9ydCBUb29sYmFyIGZyb20gJy4vVG9vbGJhcic7XG5pbXBvcnQgZGVmYXVsdEVtcHR5QmxvY2sgZnJvbSAnLi9wbHVnaW5zL2Jsb2Nrcy9kZWZhdWx0RW1wdHlCbG9jayc7XG5cbmZ1bmN0aW9uIHJhd0VkaXRvclN0eWxlcyh7IG1pbmltYWwgfSkge1xuICByZXR1cm4gYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1pbi1oZWlnaHQ6ICR7bWluaW1hbCA/ICdhdXRvJyA6IGxlbmd0aHMucmljaFRleHRFZGl0b3JNaW5IZWlnaHR9O1xuICBmb250LWZhbWlseTogJHtmb250cy5tb25vfTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIG1hcmdpbi10b3A6IC0ke2VkaXRvclN0eWxlVmFycy5zdGlja3lEaXN0YW5jZUJvdHRvbX07XG5gO1xufVxuXG5jb25zdCBSYXdFZGl0b3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuZnVuY3Rpb24gUmF3RWRpdG9yKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBmaWVsZCwgaXNTaG93TW9kZVRvZ2dsZSwgdCwgb25DaGFuZ2UgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGVkaXRvciA9IHVzZU1lbW8oKCkgPT4gd2l0aFJlYWN0KHdpdGhIaXN0b3J5KGNyZWF0ZUVkaXRvcigpKSksIFtdKTtcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFxuICAgIHByb3BzLnZhbHVlXG4gICAgICA/IHByb3BzLnZhbHVlLnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiBkZWZhdWx0RW1wdHlCbG9jayhsaW5lKSlcbiAgICAgIDogW2RlZmF1bHRFbXB0eUJsb2NrKCldLFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnBlbmRpbmdGb2N1cykge1xuICAgICAgUmVhY3RFZGl0b3IuZm9jdXMoZWRpdG9yKTtcbiAgICAgIHByb3BzLnBlbmRpbmdGb2N1cygpO1xuICAgIH1cbiAgfSwgW3Byb3BzLnBlbmRpbmdGb2N1c10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZU1vZGUoKSB7XG4gICAgcHJvcHMub25Nb2RlKCdyaWNoX3RleHQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgIG9uQ2hhbmdlKHZhbHVlLm1hcChsaW5lID0+IGxpbmUuY2hpbGRyZW5bMF0udGV4dCkuam9pbignXFxuJykpO1xuICAgIHNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNsYXRlIGVkaXRvcj17ZWRpdG9yfSB2YWx1ZT17dmFsdWV9IGluaXRpYWxWYWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgPFJhd0VkaXRvckNvbnRhaW5lcj5cbiAgICAgICAgPEVkaXRvckNvbnRyb2xCYXI+XG4gICAgICAgICAgPFRvb2xiYXJcbiAgICAgICAgICAgIG9uVG9nZ2xlTW9kZT17aGFuZGxlVG9nZ2xlTW9kZX1cbiAgICAgICAgICAgIGJ1dHRvbnM9e2ZpZWxkLmdldCgnYnV0dG9ucycpfVxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIHJhd01vZGVcbiAgICAgICAgICAgIGlzU2hvd01vZGVUb2dnbGU9e2lzU2hvd01vZGVUb2dnbGV9XG4gICAgICAgICAgICB0PXt0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRWRpdG9yQ29udHJvbEJhcj5cbiAgICAgICAgPENsYXNzTmFtZXM+XG4gICAgICAgICAgeyh7IGNzcywgY3ggfSkgPT4gKFxuICAgICAgICAgICAgPEVkaXRhYmxlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICAgICAgICR7cmF3RWRpdG9yU3R5bGVzKHsgbWluaW1hbDogZmllbGQuZ2V0KCdtaW5pbWFsJykgfSl9XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NsYXNzTmFtZXM+XG4gICAgICA8L1Jhd0VkaXRvckNvbnRhaW5lcj5cbiAgICA8L1NsYXRlPlxuICApO1xufVxuXG5SYXdFZGl0b3IucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Nb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpZWxkOiBJbW11dGFibGVQcm9wVHlwZXMubWFwLmlzUmVxdWlyZWQsXG4gIGlzU2hvd01vZGVUb2dnbGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYXdFZGl0b3I7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
function RawEditor(props) {
  const {
    className,
    field,
    isShowModeToggle,
    t,
    onChange
  } = props;
  const editor = useMemo(() => withReact(withHistory(createEditor())), []);
  const [value, setValue] = useState(props.value ? props.value.split('\n').map(line => defaultEmptyBlock(line)) : [defaultEmptyBlock()]);
  useEffect(() => {
    if (props.pendingFocus) {
      ReactEditor.focus(editor);
      props.pendingFocus();
    }
  }, [props.pendingFocus]);
  function handleToggleMode() {
    props.onMode('rich_text');
  }
  function handleChange(value) {
    onChange(value.map(line => line.children[0].text).join('\n'));
    setValue(value);
  }
  return ___EmotionJSX(Slate, {
    editor: editor,
    value: value,
    initialValue: value,
    onChange: handleChange
  }, ___EmotionJSX(RawEditorContainer, null, ___EmotionJSX(EditorControlBar, null, ___EmotionJSX(Toolbar, {
    onToggleMode: handleToggleMode,
    buttons: field.get('buttons'),
    disabled: true,
    rawMode: true,
    isShowModeToggle: isShowModeToggle,
    t: t
  })), ___EmotionJSX(ClassNames, null, ({
    css,
    cx
  }) => ___EmotionJSX(Editable, {
    className: cx(className, css`
                  ${rawEditorStyles({
      minimal: field.get('minimal')
    })}
                `),
    value: value,
    onChange: handleChange
  }))));
}
RawEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  onMode: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  field: ImmutablePropTypes.map.isRequired,
  isShowModeToggle: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};
export default RawEditor;