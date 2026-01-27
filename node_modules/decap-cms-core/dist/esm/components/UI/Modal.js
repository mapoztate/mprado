function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import { css, Global, ClassNames } from '@emotion/react';
import ReactModal from 'react-modal';
import { transitions, shadows, lengths, zIndex } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
var _ref = process.env.NODE_ENV === "production" ? {
  name: "1o9c9d2-ReactModalGlobalStyles",
  styles: ".ReactModal__Body--open{overflow:hidden;};label:ReactModalGlobalStyles;"
} : {
  name: "1o9c9d2-ReactModalGlobalStyles",
  styles: ".ReactModal__Body--open{overflow:hidden;};label:ReactModalGlobalStyles;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1VJL01vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNpQiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3NzLCBHbG9iYWwsIENsYXNzTmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgeyB0cmFuc2l0aW9ucywgc2hhZG93cywgbGVuZ3RocywgekluZGV4IH0gZnJvbSAnZGVjYXAtY21zLXVpLWRlZmF1bHQnO1xuXG5mdW5jdGlvbiBSZWFjdE1vZGFsR2xvYmFsU3R5bGVzKCkge1xuICByZXR1cm4gKFxuICAgIDxHbG9iYWxcbiAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAuUmVhY3RNb2RhbF9fQm9keS0tb3BlbiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAvPlxuICApO1xufVxuXG5jb25zdCBzdHlsZVN0cmluZ3MgPSB7XG4gIG1vZGFsQm9keTogYFxuICAgICR7c2hhZG93cy5kcm9wRGVlcH07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAke2xlbmd0aHMuYm9yZGVyUmFkaXVzfTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAyMjAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIGAsXG4gIG92ZXJsYXk6IGBcbiAgICB6LWluZGV4OiAke3pJbmRleC56SW5kZXg5OTk5OX07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHt0cmFuc2l0aW9ucy5tYWlufSwgb3BhY2l0eSAke3RyYW5zaXRpb25zLm1haW59O1xuICBgLFxuICBvdmVybGF5QWZ0ZXJPcGVuOiBgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIG9wYWNpdHk6IDE7XG4gIGAsXG4gIG92ZXJsYXlCZWZvcmVDbG9zZTogYFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgYCxcbn07XG5cbmV4cG9ydCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIE1hbnVhbGx5IHZhbGlkYXRlIFByb3BUeXBlcyAtIFJlYWN0IDE5IGJyZWFraW5nIGNoYW5nZVxuICAgIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyhNb2RhbC5wcm9wVHlwZXMsIHRoaXMucHJvcHMsICdwcm9wJywgJ01vZGFsJyk7XG5cbiAgICBSZWFjdE1vZGFsLnNldEFwcEVsZW1lbnQoJyNuYy1yb290Jyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc09wZW4sIGNoaWxkcmVuLCBjbGFzc05hbWUsIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxSZWFjdE1vZGFsR2xvYmFsU3R5bGVzIC8+XG4gICAgICAgIDxDbGFzc05hbWVzPlxuICAgICAgICAgIHsoeyBjc3MsIGN4IH0pID0+IChcbiAgICAgICAgICAgIDxSZWFjdE1vZGFsXG4gICAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgICAgY2xvc2VUaW1lb3V0TVM9ezMwMH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt7XG4gICAgICAgICAgICAgICAgYmFzZTogY3goXG4gICAgICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgICAgICR7c3R5bGVTdHJpbmdzLm1vZGFsQm9keX07XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgYWZ0ZXJPcGVuOiAnJyxcbiAgICAgICAgICAgICAgICBiZWZvcmVDbG9zZTogJycsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9e3tcbiAgICAgICAgICAgICAgICBiYXNlOiBjc3NgXG4gICAgICAgICAgICAgICAgICAke3N0eWxlU3RyaW5ncy5vdmVybGF5fTtcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIGFmdGVyT3BlbjogY3NzYFxuICAgICAgICAgICAgICAgICAgJHtzdHlsZVN0cmluZ3Mub3ZlcmxheUFmdGVyT3Blbn07XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICBiZWZvcmVDbG9zZTogY3NzYFxuICAgICAgICAgICAgICAgICAgJHtzdHlsZVN0cmluZ3Mub3ZlcmxheUJlZm9yZUNsb3NlfTtcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1JlYWN0TW9kYWw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DbGFzc05hbWVzPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
function ReactModalGlobalStyles() {
  return ___EmotionJSX(Global, {
    styles: _ref
  });
}
const styleStrings = {
  modalBody: `
    ${shadows.dropDeep};
    background-color: #fff;
    border-radius: ${lengths.borderRadius};
    height: 80%;
    text-align: center;
    max-width: 2200px;
    padding: 20px;

    &:focus {
      outline: none;
    }
  `,
  overlay: `
    z-index: ${zIndex.zIndex99999};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color ${transitions.main}, opacity ${transitions.main};
  `,
  overlayAfterOpen: `
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
  `,
  overlayBeforeClose: `
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
  `
};
export class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    className: PropTypes.string,
    onClose: PropTypes.func.isRequired
  };
  componentDidMount() {
    // Manually validate PropTypes - React 19 breaking change
    PropTypes.checkPropTypes(Modal.propTypes, this.props, 'prop', 'Modal');
    ReactModal.setAppElement('#nc-root');
  }
  render() {
    const {
      isOpen,
      children,
      className,
      onClose
    } = this.props;
    return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(ReactModalGlobalStyles, null), ___EmotionJSX(ClassNames, null, ({
      css,
      cx
    }) => ___EmotionJSX(ReactModal, {
      isOpen: isOpen,
      onRequestClose: onClose,
      closeTimeoutMS: 300,
      className: {
        base: cx(css`
                    ${styleStrings.modalBody};
                  `, className),
        afterOpen: '',
        beforeClose: ''
      },
      overlayClassName: {
        base: css`
                  ${styleStrings.overlay};
                `,
        afterOpen: css`
                  ${styleStrings.overlayAfterOpen};
                `,
        beforeClose: css`
                  ${styleStrings.overlayBeforeClose};
                `
      }
    }, children)));
  }
}