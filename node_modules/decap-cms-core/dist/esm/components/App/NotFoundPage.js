import _styled from "@emotion/styled/base";
import React from 'react';
import { translate } from 'react-polyglot';
import { lengths } from 'decap-cms-ui-default';
import PropTypes from 'prop-types';
import { jsx as ___EmotionJSX } from "@emotion/react";
const NotFoundContainer = /*#__PURE__*/_styled("div", {
  target: "ew40z3q0",
  label: "NotFoundContainer"
})("margin:", lengths.pageMargin, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC9Ob3RGb3VuZFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9DIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC9Ob3RGb3VuZFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtcG9seWdsb3QnO1xuaW1wb3J0IHsgbGVuZ3RocyB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IE5vdEZvdW5kQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAke2xlbmd0aHMucGFnZU1hcmdpbn07XG5gO1xuXG5mdW5jdGlvbiBOb3RGb3VuZFBhZ2UoeyB0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Tm90Rm91bmRDb250YWluZXI+XG4gICAgICA8aDI+e3QoJ2FwcC5ub3RGb3VuZFBhZ2UuaGVhZGVyJyl9PC9oMj5cbiAgICA8L05vdEZvdW5kQ29udGFpbmVyPlxuICApO1xufVxuXG5Ob3RGb3VuZFBhZ2UucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRlKCkoTm90Rm91bmRQYWdlKTtcbiJdfQ== */"));
function NotFoundPage({
  t
}) {
  return ___EmotionJSX(NotFoundContainer, null, ___EmotionJSX("h2", null, t('app.notFoundPage.header')));
}
NotFoundPage.propTypes = {
  t: PropTypes.func.isRequired
};
export default translate()(NotFoundPage);