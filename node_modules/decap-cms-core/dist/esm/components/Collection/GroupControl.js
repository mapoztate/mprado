import React from 'react';
import { translate } from 'react-polyglot';
import { Dropdown, DropdownItem } from 'decap-cms-ui-default';
import { ControlButton } from './ControlButton';
import { jsx as ___EmotionJSX } from "@emotion/react";
function GroupControl({
  viewGroups,
  t,
  onGroupClick,
  group
}) {
  const hasActiveGroup = group?.valueSeq().toJS().some(f => f.active === true);
  return ___EmotionJSX(Dropdown, {
    renderButton: () => {
      return ___EmotionJSX(ControlButton, {
        active: hasActiveGroup,
        title: t('collection.collectionTop.groupBy')
      });
    },
    closeOnSelection: false,
    dropdownTopOverlap: "30px",
    dropdownWidth: "160px",
    dropdownPosition: "left"
  }, viewGroups.map(viewGroup => {
    return ___EmotionJSX(DropdownItem, {
      key: viewGroup.id,
      label: viewGroup.label,
      onClick: () => onGroupClick(viewGroup),
      isActive: group.getIn([viewGroup.id, 'active'], false)
    });
  }));
}
export default translate()(GroupControl);