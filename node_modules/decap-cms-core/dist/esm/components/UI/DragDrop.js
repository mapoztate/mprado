import { HTML5Backend as ReactDNDHTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider as ReactDNDProvider, DragSource as ReactDNDDragSource, DropTarget as ReactDNDDropTarget } from 'react-dnd';
import React from 'react';
import PropTypes from 'prop-types';
import { jsx as ___EmotionJSX } from "@emotion/react";
export function DragSource({
  namespace,
  ...props
}) {
  const DragComponent = ReactDNDDragSource(namespace, {
    // eslint-disable-next-line no-unused-vars
    beginDrag({
      children,
      isDragging,
      connectDragComponent,
      ...ownProps
    }) {
      // We return the rest of the props as the ID of the element being dragged.
      return ownProps;
    }
  }, connect => ({
    connectDragComponent: connect.dragSource()
  }))(({
    children,
    connectDragComponent
  }) => children(connectDragComponent));
  return /*#__PURE__*/React.createElement(DragComponent, props, props.children);
}
DragSource.propTypes = {
  namespace: PropTypes.any.isRequired,
  children: PropTypes.func.isRequired
};
export function DropTarget({
  onDrop,
  namespace,
  ...props
}) {
  const DropComponent = ReactDNDDropTarget(namespace, {
    drop(ownProps, monitor) {
      onDrop(monitor.getItem());
    }
  }, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isHovered: monitor.isOver()
  }))(({
    children,
    connectDropTarget,
    isHovered
  }) => children(connectDropTarget, {
    isHovered
  }));
  return /*#__PURE__*/React.createElement(DropComponent, props, props.children);
}
DropTarget.propTypes = {
  onDrop: PropTypes.func.isRequired,
  namespace: PropTypes.any.isRequired,
  children: PropTypes.func.isRequired
};
export function HTML5DragDrop(WrappedComponent) {
  return class HTML5DragDrop extends React.Component {
    render() {
      return ___EmotionJSX(ReactDNDProvider, {
        backend: ReactDNDHTML5Backend
      }, ___EmotionJSX(WrappedComponent, this.props));
    }
  };
}