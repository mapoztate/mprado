function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { fromJS } from 'immutable';
import omit from 'lodash/omit';
import { ReactEditor, useSlate } from 'slate-react';
import { Range, Transforms } from 'slate';
import { getEditorControl, getEditorComponents } from '../index';
import { jsx as ___EmotionJSX } from "@emotion/react";
var _ref = process.env.NODE_ENV === "production" ? {
  name: "1xfnuhy-Shortcode",
  styles: "margin-top:0;margin-bottom:16px;&:first-of-type{margin-top:0;};label:Shortcode;"
} : {
  name: "1xfnuhy-Shortcode",
  styles: "margin-top:0;margin-bottom:16px;&:first-of-type{margin-top:0;};label:Shortcode;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9NYXJrZG93bkNvbnRyb2wvY29tcG9uZW50cy9TaG9ydGNvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURrQiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvTWFya2Rvd25Db250cm9sL2NvbXBvbmVudHMvU2hvcnRjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgZnJvbUpTIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vbWl0JztcbmltcG9ydCB7IFJlYWN0RWRpdG9yLCB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCB7IFJhbmdlLCBUcmFuc2Zvcm1zIH0gZnJvbSAnc2xhdGUnO1xuXG5pbXBvcnQgeyBnZXRFZGl0b3JDb250cm9sLCBnZXRFZGl0b3JDb21wb25lbnRzIH0gZnJvbSAnLi4vaW5kZXgnO1xuXG5mdW5jdGlvbiBTaG9ydGNvZGUocHJvcHMpIHtcbiAgY29uc3QgZWRpdG9yID0gdXNlU2xhdGUoKTtcbiAgY29uc3QgeyBlbGVtZW50LCBkYXRhS2V5ID0gJ3Nob3J0Y29kZURhdGEnLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IEVkaXRvckNvbnRyb2wgPSBnZXRFZGl0b3JDb250cm9sKCk7XG4gIGNvbnN0IHBsdWdpbiA9IGdldEVkaXRvckNvbXBvbmVudHMoKS5nZXQoZWxlbWVudC5kYXRhLnNob3J0Y29kZSk7XG4gIGNvbnN0IGZpZWxkS2V5cyA9IFsnaWQnLCAnZnJvbUJsb2NrJywgJ3RvQmxvY2snLCAndG9QcmV2aWV3JywgJ3BhdHRlcm4nLCAnaWNvbiddO1xuXG4gIGNvbnN0IGZpZWxkID0gZnJvbUpTKG9taXQocGx1Z2luLCBmaWVsZEtleXMpKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShmcm9tSlMoZWxlbWVudC5kYXRhW2RhdGFLZXldKSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGZpZWxkTmFtZSwgdmFsdWUsIG1ldGFkYXRhKSB7XG4gICAgY29uc3QgcGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgZWxlbWVudCk7XG4gICAgY29uc3QgbmV3UHJvcGVydGllcyA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4uZWxlbWVudC5kYXRhLFxuICAgICAgICBbZGF0YUtleV06IHZhbHVlLnRvSlMoKSxcbiAgICAgICAgbWV0YWRhdGEsXG4gICAgICB9LFxuICAgIH07XG4gICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIG5ld1Byb3BlcnRpZXMsIHtcbiAgICAgIGF0OiBwYXRoLFxuICAgIH0pO1xuICAgIHNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xuICAgIGNvbnN0IHBhdGggPSBSZWFjdEVkaXRvci5maW5kUGF0aChlZGl0b3IsIGVsZW1lbnQpO1xuICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgcGF0aCk7XG4gIH1cblxuICBjb25zdCBwYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgoZWRpdG9yLCBlbGVtZW50KTtcbiAgY29uc3QgaXNTZWxlY3RlZCA9XG4gICAgZWRpdG9yLnNlbGVjdGlvbiAmJlxuICAgIHBhdGggJiZcbiAgICBSYW5nZS5pc1JhbmdlKGVkaXRvci5zZWxlY3Rpb24pICYmXG4gICAgUmFuZ2UuaW5jbHVkZXMoZWRpdG9yLnNlbGVjdGlvbiwgcGF0aCk7XG5cbiAgcmV0dXJuIChcbiAgICAhZmllbGQuaXNFbXB0eSgpICYmIChcbiAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlRm9jdXN9IG9uRm9jdXM9e2hhbmRsZUZvY3VzfT5cbiAgICAgICAgPEVkaXRvckNvbnRyb2xcbiAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGlzRWRpdG9yQ29tcG9uZW50PXt0cnVlfVxuICAgICAgICAgIG9uVmFsaWRhdGVPYmplY3Q9eygpID0+IHt9fVxuICAgICAgICAgIGlzTmV3RWRpdG9yQ29tcG9uZW50PXtlbGVtZW50LmRhdGEuc2hvcnRjb2RlTmV3fVxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcnRjb2RlO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
function Shortcode(props) {
  const editor = useSlate();
  const {
    element,
    dataKey = 'shortcodeData',
    children
  } = props;
  const EditorControl = getEditorControl();
  const plugin = getEditorComponents().get(element.data.shortcode);
  const fieldKeys = ['id', 'fromBlock', 'toBlock', 'toPreview', 'pattern', 'icon'];
  const field = fromJS(omit(plugin, fieldKeys));
  const [value, setValue] = useState(fromJS(element.data[dataKey]));
  function handleChange(fieldName, value, metadata) {
    const path = ReactEditor.findPath(editor, element);
    const newProperties = {
      data: {
        ...element.data,
        [dataKey]: value.toJS(),
        metadata
      }
    };
    Transforms.setNodes(editor, newProperties, {
      at: path
    });
    setValue(value);
  }
  function handleFocus() {
    const path = ReactEditor.findPath(editor, element);
    Transforms.select(editor, path);
  }
  const path = ReactEditor.findPath(editor, element);
  const isSelected = editor.selection && path && Range.isRange(editor.selection) && Range.includes(editor.selection, path);
  return !field.isEmpty() && ___EmotionJSX("div", {
    onClick: handleFocus,
    onFocus: handleFocus
  }, ___EmotionJSX(EditorControl, {
    css: _ref,
    value: value,
    field: field,
    onChange: handleChange,
    isEditorComponent: true,
    onValidateObject: () => {},
    isNewEditorComponent: element.data.shortcodeNew,
    isSelected: isSelected
  }), children);
}
export default Shortcode;