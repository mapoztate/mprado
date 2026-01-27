import _styled from "@emotion/styled/base";
import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import isEmpty from 'lodash/isEmpty';
import { translate } from 'react-polyglot';
import { colors } from 'decap-cms-ui-default';
import { Modal } from '../UI';
import MediaLibraryTop from './MediaLibraryTop';
import MediaLibraryCardGrid from './MediaLibraryCardGrid';
import EmptyMessage from './EmptyMessage';

/**
 * Responsive styling needs to be overhauled. Current setup requires specifying
 * widths per breakpoint.
 */
import { jsx as ___EmotionJSX } from "@emotion/react";
const cardWidth = `280px`;
const cardHeight = `240px`;
const cardMargin = `10px`;

/**
 * cardWidth + cardMargin * 2 = cardOutsideWidth
 * (not using calc because this will be nested in other calcs)
 */
const cardOutsideWidth = `300px`;
const StyledModal = /*#__PURE__*/_styled(Modal, {
  target: "e4d0svf0",
  label: "StyledModal"
})("display:grid;grid-template-rows:120px auto;width:calc(", cardOutsideWidth, " + 20px);background-color:", props => props.isPrivate && colors.grayDark, ";@media (min-width: 800px){width:calc(", cardOutsideWidth, " * 2 + 20px);}@media (min-width: 1120px){width:calc(", cardOutsideWidth, " * 3 + 20px);}@media (min-width: 1440px){width:calc(", cardOutsideWidth, " * 4 + 20px);}@media (min-width: 1760px){width:calc(", cardOutsideWidth, " * 5 + 20px);}@media (min-width: 2080px){width:calc(", cardOutsideWidth, " * 6 + 20px);}h1{color:", props => props.isPrivate && colors.textFieldBorder, ";}button:disabled,label[disabled]{background-color:", props => props.isPrivate && `rgba(217, 217, 217, 0.15)`, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lZGlhTGlicmFyeS9NZWRpYUxpYnJhcnlNb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmlDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lZGlhTGlicmFyeS9NZWRpYUxpYnJhcnlNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LXBvbHlnbG90JztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9VSSc7XG5pbXBvcnQgTWVkaWFMaWJyYXJ5VG9wIGZyb20gJy4vTWVkaWFMaWJyYXJ5VG9wJztcbmltcG9ydCBNZWRpYUxpYnJhcnlDYXJkR3JpZCBmcm9tICcuL01lZGlhTGlicmFyeUNhcmRHcmlkJztcbmltcG9ydCBFbXB0eU1lc3NhZ2UgZnJvbSAnLi9FbXB0eU1lc3NhZ2UnO1xuXG4vKipcbiAqIFJlc3BvbnNpdmUgc3R5bGluZyBuZWVkcyB0byBiZSBvdmVyaGF1bGVkLiBDdXJyZW50IHNldHVwIHJlcXVpcmVzIHNwZWNpZnlpbmdcbiAqIHdpZHRocyBwZXIgYnJlYWtwb2ludC5cbiAqL1xuY29uc3QgY2FyZFdpZHRoID0gYDI4MHB4YDtcbmNvbnN0IGNhcmRIZWlnaHQgPSBgMjQwcHhgO1xuY29uc3QgY2FyZE1hcmdpbiA9IGAxMHB4YDtcblxuLyoqXG4gKiBjYXJkV2lkdGggKyBjYXJkTWFyZ2luICogMiA9IGNhcmRPdXRzaWRlV2lkdGhcbiAqIChub3QgdXNpbmcgY2FsYyBiZWNhdXNlIHRoaXMgd2lsbCBiZSBuZXN0ZWQgaW4gb3RoZXIgY2FsY3MpXG4gKi9cbmNvbnN0IGNhcmRPdXRzaWRlV2lkdGggPSBgMzAwcHhgO1xuXG5jb25zdCBTdHlsZWRNb2RhbCA9IHN0eWxlZChNb2RhbClgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggYXV0bztcbiAgd2lkdGg6IGNhbGMoJHtjYXJkT3V0c2lkZVdpZHRofSArIDIwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmlzUHJpdmF0ZSAmJiBjb2xvcnMuZ3JheURhcmt9O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAgIHdpZHRoOiBjYWxjKCR7Y2FyZE91dHNpZGVXaWR0aH0gKiAyICsgMjBweCk7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTEyMHB4KSB7XG4gICAgd2lkdGg6IGNhbGMoJHtjYXJkT3V0c2lkZVdpZHRofSAqIDMgKyAyMHB4KTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICB3aWR0aDogY2FsYygke2NhcmRPdXRzaWRlV2lkdGh9ICogNCArIDIwcHgpO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE3NjBweCkge1xuICAgIHdpZHRoOiBjYWxjKCR7Y2FyZE91dHNpZGVXaWR0aH0gKiA1ICsgMjBweCk7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMjA4MHB4KSB7XG4gICAgd2lkdGg6IGNhbGMoJHtjYXJkT3V0c2lkZVdpZHRofSAqIDYgKyAyMHB4KTtcbiAgfVxuXG4gIGgxIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5pc1ByaXZhdGUgJiYgY29sb3JzLnRleHRGaWVsZEJvcmRlcn07XG4gIH1cblxuICBidXR0b246ZGlzYWJsZWQsXG4gIGxhYmVsW2Rpc2FibGVkXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5pc1ByaXZhdGUgJiYgYHJnYmEoMjE3LCAyMTcsIDIxNywgMC4xNSlgfTtcbiAgfVxuYDtcblxuZnVuY3Rpb24gTWVkaWFMaWJyYXJ5TW9kYWwoe1xuICBpc1Zpc2libGUsXG4gIGNhbkluc2VydCxcbiAgZmlsZXMsXG4gIGR5bmFtaWNTZWFyY2gsXG4gIGR5bmFtaWNTZWFyY2hBY3RpdmUsXG4gIGZvckltYWdlLFxuICBpc0xvYWRpbmcsXG4gIGlzUGVyc2lzdGluZyxcbiAgaXNEZWxldGluZyxcbiAgaGFzTmV4dFBhZ2UsXG4gIGlzUGFnaW5hdGluZyxcbiAgcHJpdmF0ZVVwbG9hZCxcbiAgcXVlcnksXG4gIHNlbGVjdGVkRmlsZSxcbiAgaGFuZGxlRmlsdGVyLFxuICBoYW5kbGVRdWVyeSxcbiAgdG9UYWJsZURhdGEsXG4gIGhhbmRsZUNsb3NlLFxuICBoYW5kbGVTZWFyY2hDaGFuZ2UsXG4gIGhhbmRsZVNlYXJjaEtleURvd24sXG4gIGhhbmRsZVBlcnNpc3QsXG4gIGhhbmRsZURlbGV0ZSxcbiAgaGFuZGxlSW5zZXJ0LFxuICBoYW5kbGVEb3dubG9hZCxcbiAgc2V0U2Nyb2xsQ29udGFpbmVyUmVmLFxuICBoYW5kbGVBc3NldENsaWNrLFxuICBoYW5kbGVMb2FkTW9yZSxcbiAgbG9hZERpc3BsYXlVUkwsXG4gIGRpc3BsYXlVUkxzLFxuICB0LFxufSkge1xuICBjb25zdCBmaWx0ZXJlZEZpbGVzID0gZm9ySW1hZ2UgPyBoYW5kbGVGaWx0ZXIoZmlsZXMpIDogZmlsZXM7XG4gIGNvbnN0IHF1ZXJpZWRGaWxlcyA9ICFkeW5hbWljU2VhcmNoICYmIHF1ZXJ5ID8gaGFuZGxlUXVlcnkocXVlcnksIGZpbHRlcmVkRmlsZXMpIDogZmlsdGVyZWRGaWxlcztcbiAgY29uc3QgdGFibGVEYXRhID0gdG9UYWJsZURhdGEocXVlcmllZEZpbGVzKTtcbiAgY29uc3QgaGFzRmlsZXMgPSBmaWxlcyAmJiAhIWZpbGVzLmxlbmd0aDtcbiAgY29uc3QgaGFzRmlsdGVyZWRGaWxlcyA9IGZpbHRlcmVkRmlsZXMgJiYgISFmaWx0ZXJlZEZpbGVzLmxlbmd0aDtcbiAgY29uc3QgaGFzU2VhcmNoUmVzdWx0cyA9IHF1ZXJpZWRGaWxlcyAmJiAhIXF1ZXJpZWRGaWxlcy5sZW5ndGg7XG4gIGNvbnN0IGhhc01lZGlhID0gaGFzU2VhcmNoUmVzdWx0cztcbiAgY29uc3Qgc2hvdWxkU2hvd0VtcHR5TWVzc2FnZSA9ICFoYXNNZWRpYTtcbiAgY29uc3QgZW1wdHlNZXNzYWdlID1cbiAgICAoaXNMb2FkaW5nICYmICFoYXNNZWRpYSAmJiB0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5TW9kYWwubG9hZGluZycpKSB8fFxuICAgIChkeW5hbWljU2VhcmNoQWN0aXZlICYmIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlNb2RhbC5ub1Jlc3VsdHMnKSkgfHxcbiAgICAoIWhhc0ZpbGVzICYmIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlNb2RhbC5ub0Fzc2V0c0ZvdW5kJykpIHx8XG4gICAgKCFoYXNGaWx0ZXJlZEZpbGVzICYmIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlNb2RhbC5ub0ltYWdlc0ZvdW5kJykpIHx8XG4gICAgKCFoYXNTZWFyY2hSZXN1bHRzICYmIHQoJ21lZGlhTGlicmFyeS5tZWRpYUxpYnJhcnlNb2RhbC5ub1Jlc3VsdHMnKSk7XG5cbiAgY29uc3QgaGFzU2VsZWN0aW9uID0gaGFzTWVkaWEgJiYgIWlzRW1wdHkoc2VsZWN0ZWRGaWxlKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRNb2RhbCBpc09wZW49e2lzVmlzaWJsZX0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGlzUHJpdmF0ZT17cHJpdmF0ZVVwbG9hZH0+XG4gICAgICA8TWVkaWFMaWJyYXJ5VG9wXG4gICAgICAgIHQ9e3R9XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBwcml2YXRlVXBsb2FkPXtwcml2YXRlVXBsb2FkfVxuICAgICAgICBmb3JJbWFnZT17Zm9ySW1hZ2V9XG4gICAgICAgIG9uRG93bmxvYWQ9e2hhbmRsZURvd25sb2FkfVxuICAgICAgICBvblVwbG9hZD17aGFuZGxlUGVyc2lzdH1cbiAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICBvblNlYXJjaEtleURvd249e2hhbmRsZVNlYXJjaEtleURvd259XG4gICAgICAgIHNlYXJjaERpc2FibGVkPXshZHluYW1pY1NlYXJjaEFjdGl2ZSAmJiAhaGFzRmlsdGVyZWRGaWxlc31cbiAgICAgICAgb25EZWxldGU9e2hhbmRsZURlbGV0ZX1cbiAgICAgICAgY2FuSW5zZXJ0PXtjYW5JbnNlcnR9XG4gICAgICAgIG9uSW5zZXJ0PXtoYW5kbGVJbnNlcnR9XG4gICAgICAgIGhhc1NlbGVjdGlvbj17aGFzU2VsZWN0aW9ufVxuICAgICAgICBpc1BlcnNpc3Rpbmc9e2lzUGVyc2lzdGluZ31cbiAgICAgICAgaXNEZWxldGluZz17aXNEZWxldGluZ31cbiAgICAgICAgc2VsZWN0ZWRGaWxlPXtzZWxlY3RlZEZpbGV9XG4gICAgICAvPlxuICAgICAgeyFzaG91bGRTaG93RW1wdHlNZXNzYWdlID8gbnVsbCA6IChcbiAgICAgICAgPEVtcHR5TWVzc2FnZSBjb250ZW50PXtlbXB0eU1lc3NhZ2V9IGlzUHJpdmF0ZT17cHJpdmF0ZVVwbG9hZH0gLz5cbiAgICAgICl9XG4gICAgICA8TWVkaWFMaWJyYXJ5Q2FyZEdyaWRcbiAgICAgICAgc2V0U2Nyb2xsQ29udGFpbmVyUmVmPXtzZXRTY3JvbGxDb250YWluZXJSZWZ9XG4gICAgICAgIG1lZGlhSXRlbXM9e3RhYmxlRGF0YX1cbiAgICAgICAgaXNTZWxlY3RlZEZpbGU9e2ZpbGUgPT4gc2VsZWN0ZWRGaWxlLmtleSA9PT0gZmlsZS5rZXl9XG4gICAgICAgIG9uQXNzZXRDbGljaz17aGFuZGxlQXNzZXRDbGlja31cbiAgICAgICAgY2FuTG9hZE1vcmU9e2hhc05leHRQYWdlfVxuICAgICAgICBvbkxvYWRNb3JlPXtoYW5kbGVMb2FkTW9yZX1cbiAgICAgICAgaXNQYWdpbmF0aW5nPXtpc1BhZ2luYXRpbmd9XG4gICAgICAgIHBhZ2luYXRpbmdNZXNzYWdlPXt0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5TW9kYWwubG9hZGluZycpfVxuICAgICAgICBjYXJkRHJhZnRUZXh0PXt0KCdtZWRpYUxpYnJhcnkubWVkaWFMaWJyYXJ5Q2FyZC5kcmFmdCcpfVxuICAgICAgICBjYXJkV2lkdGg9e2NhcmRXaWR0aH1cbiAgICAgICAgY2FyZEhlaWdodD17Y2FyZEhlaWdodH1cbiAgICAgICAgY2FyZE1hcmdpbj17Y2FyZE1hcmdpbn1cbiAgICAgICAgaXNQcml2YXRlPXtwcml2YXRlVXBsb2FkfVxuICAgICAgICBsb2FkRGlzcGxheVVSTD17bG9hZERpc3BsYXlVUkx9XG4gICAgICAgIGRpc3BsYXlVUkxzPXtkaXNwbGF5VVJMc31cbiAgICAgIC8+XG4gICAgPC9TdHlsZWRNb2RhbD5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZpbGVTaGFwZSA9IHtcbiAgZGlzcGxheVVSTDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGtleTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHF1ZXJ5T3JkZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbk1lZGlhTGlicmFyeU1vZGFsLnByb3BUeXBlcyA9IHtcbiAgaXNWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2FuSW5zZXJ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgZmlsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZShmaWxlU2hhcGUpKS5pc1JlcXVpcmVkLFxuICBkeW5hbWljU2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgZHluYW1pY1NlYXJjaEFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZvckltYWdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNQZXJzaXN0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNEZWxldGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGhhc05leHRQYWdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNQYWdpbmF0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgcHJpdmF0ZVVwbG9hZDogUHJvcFR5cGVzLmJvb2wsXG4gIHF1ZXJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZEZpbGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zaGFwZShmaWxlU2hhcGUpLCBQcm9wVHlwZXMuc2hhcGUoe30pXSksXG4gIGhhbmRsZUZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlUXVlcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvVGFibGVEYXRhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVDbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlU2VhcmNoQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVTZWFyY2hLZXlEb3duOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVQZXJzaXN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVEZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUluc2VydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2V0U2Nyb2xsQ29udGFpbmVyUmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVBc3NldENsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVMb2FkTW9yZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbG9hZERpc3BsYXlVUkw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpc3BsYXlVUkxzOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihNYXApLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGUoKShNZWRpYUxpYnJhcnlNb2RhbCk7XG4iXX0= */"));
function MediaLibraryModal({
  isVisible,
  canInsert,
  files,
  dynamicSearch,
  dynamicSearchActive,
  forImage,
  isLoading,
  isPersisting,
  isDeleting,
  hasNextPage,
  isPaginating,
  privateUpload,
  query,
  selectedFile,
  handleFilter,
  handleQuery,
  toTableData,
  handleClose,
  handleSearchChange,
  handleSearchKeyDown,
  handlePersist,
  handleDelete,
  handleInsert,
  handleDownload,
  setScrollContainerRef,
  handleAssetClick,
  handleLoadMore,
  loadDisplayURL,
  displayURLs,
  t
}) {
  const filteredFiles = forImage ? handleFilter(files) : files;
  const queriedFiles = !dynamicSearch && query ? handleQuery(query, filteredFiles) : filteredFiles;
  const tableData = toTableData(queriedFiles);
  const hasFiles = files && !!files.length;
  const hasFilteredFiles = filteredFiles && !!filteredFiles.length;
  const hasSearchResults = queriedFiles && !!queriedFiles.length;
  const hasMedia = hasSearchResults;
  const shouldShowEmptyMessage = !hasMedia;
  const emptyMessage = isLoading && !hasMedia && t('mediaLibrary.mediaLibraryModal.loading') || dynamicSearchActive && t('mediaLibrary.mediaLibraryModal.noResults') || !hasFiles && t('mediaLibrary.mediaLibraryModal.noAssetsFound') || !hasFilteredFiles && t('mediaLibrary.mediaLibraryModal.noImagesFound') || !hasSearchResults && t('mediaLibrary.mediaLibraryModal.noResults');
  const hasSelection = hasMedia && !isEmpty(selectedFile);
  return ___EmotionJSX(StyledModal, {
    isOpen: isVisible,
    onClose: handleClose,
    isPrivate: privateUpload
  }, ___EmotionJSX(MediaLibraryTop, {
    t: t,
    onClose: handleClose,
    privateUpload: privateUpload,
    forImage: forImage,
    onDownload: handleDownload,
    onUpload: handlePersist,
    query: query,
    onSearchChange: handleSearchChange,
    onSearchKeyDown: handleSearchKeyDown,
    searchDisabled: !dynamicSearchActive && !hasFilteredFiles,
    onDelete: handleDelete,
    canInsert: canInsert,
    onInsert: handleInsert,
    hasSelection: hasSelection,
    isPersisting: isPersisting,
    isDeleting: isDeleting,
    selectedFile: selectedFile
  }), !shouldShowEmptyMessage ? null : ___EmotionJSX(EmptyMessage, {
    content: emptyMessage,
    isPrivate: privateUpload
  }), ___EmotionJSX(MediaLibraryCardGrid, {
    setScrollContainerRef: setScrollContainerRef,
    mediaItems: tableData,
    isSelectedFile: file => selectedFile.key === file.key,
    onAssetClick: handleAssetClick,
    canLoadMore: hasNextPage,
    onLoadMore: handleLoadMore,
    isPaginating: isPaginating,
    paginatingMessage: t('mediaLibrary.mediaLibraryModal.loading'),
    cardDraftText: t('mediaLibrary.mediaLibraryCard.draft'),
    cardWidth: cardWidth,
    cardHeight: cardHeight,
    cardMargin: cardMargin,
    isPrivate: privateUpload,
    loadDisplayURL: loadDisplayURL,
    displayURLs: displayURLs
  }));
}
export const fileShape = {
  displayURL: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  queryOrder: PropTypes.number,
  size: PropTypes.number,
  path: PropTypes.string.isRequired
};
MediaLibraryModal.propTypes = {
  isVisible: PropTypes.bool,
  canInsert: PropTypes.bool,
  files: PropTypes.arrayOf(PropTypes.shape(fileShape)).isRequired,
  dynamicSearch: PropTypes.bool,
  dynamicSearchActive: PropTypes.bool,
  forImage: PropTypes.bool,
  isLoading: PropTypes.bool,
  isPersisting: PropTypes.bool,
  isDeleting: PropTypes.bool,
  hasNextPage: PropTypes.bool,
  isPaginating: PropTypes.bool,
  privateUpload: PropTypes.bool,
  query: PropTypes.string,
  selectedFile: PropTypes.oneOfType([PropTypes.shape(fileShape), PropTypes.shape({})]),
  handleFilter: PropTypes.func.isRequired,
  handleQuery: PropTypes.func.isRequired,
  toTableData: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchKeyDown: PropTypes.func.isRequired,
  handlePersist: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleInsert: PropTypes.func.isRequired,
  setScrollContainerRef: PropTypes.func.isRequired,
  handleAssetClick: PropTypes.func.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
  loadDisplayURL: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  displayURLs: PropTypes.instanceOf(Map).isRequired
};
export default translate()(MediaLibraryModal);