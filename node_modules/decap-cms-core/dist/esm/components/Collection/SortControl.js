function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { translate } from 'react-polyglot';
import { Dropdown, DropdownItem } from 'decap-cms-ui-default';
import { SortDirection } from '../../types/redux';
import { ControlButton } from './ControlButton';
import { jsx as ___EmotionJSX } from "@emotion/react";
function nextSortDirection(direction) {
  switch (direction) {
    case SortDirection.Ascending:
      return SortDirection.Descending;
    case SortDirection.Descending:
      return SortDirection.None;
    default:
      return SortDirection.Ascending;
  }
}
function sortIconProps(sortDir) {
  return {
    icon: 'chevron',
    iconDirection: sortIconDirections[sortDir],
    iconSmall: true
  };
}
const sortIconDirections = {
  [SortDirection.Ascending]: 'up',
  [SortDirection.Descending]: 'down'
};
function SortControl({
  t,
  fields,
  onSortClick,
  sort
}) {
  const hasActiveSort = sort?.valueSeq().toJS().some(s => s.direction !== SortDirection.None);
  return ___EmotionJSX(Dropdown, {
    renderButton: () => {
      return ___EmotionJSX(ControlButton, {
        active: hasActiveSort,
        title: t('collection.collectionTop.sortBy')
      });
    },
    closeOnSelection: false,
    dropdownTopOverlap: "30px",
    dropdownWidth: "160px",
    dropdownPosition: "left"
  }, fields.map(field => {
    const sortDir = sort?.getIn([field.key, 'direction']);
    const isActive = sortDir && sortDir !== SortDirection.None;
    const nextSortDir = nextSortDirection(sortDir);
    return ___EmotionJSX(DropdownItem, _extends({
      key: field.key,
      label: field.label,
      onClick: () => onSortClick(field.key, nextSortDir),
      isActive: isActive
    }, isActive && sortIconProps(sortDir)));
  }));
}
export default translate()(SortControl);