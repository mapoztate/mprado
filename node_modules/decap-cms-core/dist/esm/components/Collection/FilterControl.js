import React from 'react';
import { translate } from 'react-polyglot';
import { Dropdown, DropdownCheckedItem } from 'decap-cms-ui-default';
import { ControlButton } from './ControlButton';
import { jsx as ___EmotionJSX } from "@emotion/react";
function FilterControl({
  viewFilters,
  t,
  onFilterClick,
  filter
}) {
  const hasActiveFilter = filter?.valueSeq().toJS().some(f => f.active === true);
  return ___EmotionJSX(Dropdown, {
    renderButton: () => {
      return ___EmotionJSX(ControlButton, {
        active: hasActiveFilter,
        title: t('collection.collectionTop.filterBy')
      });
    },
    closeOnSelection: false,
    dropdownTopOverlap: "30px",
    dropdownPosition: "left"
  }, viewFilters.map(viewFilter => {
    return ___EmotionJSX(DropdownCheckedItem, {
      key: viewFilter.id,
      label: viewFilter.label,
      id: viewFilter.id,
      checked: filter.getIn([viewFilter.id, 'active'], false),
      onClick: () => onFilterClick(viewFilter)
    });
  }));
}
export default translate()(FilterControl);