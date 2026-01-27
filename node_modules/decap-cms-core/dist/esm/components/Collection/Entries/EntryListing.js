import _styled from "@emotion/styled/base";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Waypoint } from 'react-waypoint';
import { Map, List } from 'immutable';
import { selectFields, selectInferredField } from '../../../reducers/collections';
import { filterNestedEntries } from './EntriesCollection';
import EntryCard from './EntryCard';
import { jsx as ___EmotionJSX } from "@emotion/react";
const CardsGrid = /*#__PURE__*/_styled("ul", {
  target: "etq0ss00",
  label: "CardsGrid"
})(process.env.NODE_ENV === "production" ? {
  name: "1dbthoi",
  styles: "display:flex;flex-flow:row wrap;list-style-type:none;margin-left:-12px;margin-top:16px;margin-bottom:16px"
} : {
  name: "1dbthoi",
  styles: "display:flex;flex-flow:row wrap;list-style-type:none;margin-left:-12px;margin-top:16px;margin-bottom:16px/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyeUxpc3RpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzJCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyeUxpc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBXYXlwb2ludCB9IGZyb20gJ3JlYWN0LXdheXBvaW50JztcbmltcG9ydCB7IE1hcCwgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCB7IHNlbGVjdEZpZWxkcywgc2VsZWN0SW5mZXJyZWRGaWVsZCB9IGZyb20gJy4uLy4uLy4uL3JlZHVjZXJzL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IGZpbHRlck5lc3RlZEVudHJpZXMgfSBmcm9tICcuL0VudHJpZXNDb2xsZWN0aW9uJztcbmltcG9ydCBFbnRyeUNhcmQgZnJvbSAnLi9FbnRyeUNhcmQnO1xuXG5jb25zdCBDYXJkc0dyaWQgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuYDtcblxuY2xhc3MgRW50cnlMaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb2xsZWN0aW9uczogSW1tdXRhYmxlUHJvcFR5cGVzLml0ZXJhYmxlLmlzUmVxdWlyZWQsXG4gICAgZW50cmllczogSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gICAgdmlld1N0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1cnNvcjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIGhhbmRsZUN1cnNvckFjdGlvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBnZXRVbnB1Ymxpc2hlZEVudHJpZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZ2V0V29ya2Zsb3dTdGF0dXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZmlsdGVyVGVybTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBNYW51YWxseSB2YWxpZGF0ZSBQcm9wVHlwZXMgLSBSZWFjdCAxOSBicmVha2luZyBjaGFuZ2VcbiAgICBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoRW50cnlMaXN0aW5nLnByb3BUeXBlcywgdGhpcy5wcm9wcywgJ3Byb3AnLCAnRW50cnlMaXN0aW5nJyk7XG4gIH1cblxuICBoYXNNb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhc01vcmUgPSB0aGlzLnByb3BzLmN1cnNvcj8uYWN0aW9ucz8uaGFzKCdhcHBlbmRfbmV4dCcpO1xuICAgIHJldHVybiBoYXNNb3JlO1xuICB9O1xuXG4gIGhhbmRsZUxvYWRNb3JlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmhhc01vcmUoKSkge1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVDdXJzb3JBY3Rpb25zKCdhcHBlbmRfbmV4dCcpO1xuICAgIH1cbiAgfTtcblxuICBpbmZlckZpZWxkcyA9IGNvbGxlY3Rpb24gPT4ge1xuICAgIGNvbnN0IHRpdGxlRmllbGQgPSBzZWxlY3RJbmZlcnJlZEZpZWxkKGNvbGxlY3Rpb24sICd0aXRsZScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRmllbGQgPSBzZWxlY3RJbmZlcnJlZEZpZWxkKGNvbGxlY3Rpb24sICdkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGltYWdlRmllbGQgPSBzZWxlY3RJbmZlcnJlZEZpZWxkKGNvbGxlY3Rpb24sICdpbWFnZScpO1xuICAgIGNvbnN0IGZpZWxkcyA9IHNlbGVjdEZpZWxkcyhjb2xsZWN0aW9uKTtcbiAgICBjb25zdCBpbmZlcnJlZEZpZWxkcyA9IFt0aXRsZUZpZWxkLCBkZXNjcmlwdGlvbkZpZWxkLCBpbWFnZUZpZWxkXTtcbiAgICBjb25zdCByZW1haW5pbmdGaWVsZHMgPVxuICAgICAgZmllbGRzICYmIGZpZWxkcy5maWx0ZXIoZiA9PiBpbmZlcnJlZEZpZWxkcy5pbmRleE9mKGYuZ2V0KCduYW1lJykpID09PSAtMSk7XG4gICAgcmV0dXJuIHsgdGl0bGVGaWVsZCwgZGVzY3JpcHRpb25GaWVsZCwgaW1hZ2VGaWVsZCwgcmVtYWluaW5nRmllbGRzIH07XG4gIH07XG5cbiAgZ2V0QWxsRW50cmllcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGVudHJpZXMsIGNvbGxlY3Rpb25zLCBmaWx0ZXJUZXJtIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gTWFwLmlzTWFwKGNvbGxlY3Rpb25zKSA/IGNvbGxlY3Rpb25zLmdldCgnbmFtZScpIDogbnVsbDtcblxuICAgIGlmICghY29sbGVjdGlvbk5hbWUpIHtcbiAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgIH1cblxuICAgIGNvbnN0IHVucHVibGlzaGVkRW50cmllcyA9IHRoaXMucHJvcHMuZ2V0VW5wdWJsaXNoZWRFbnRyaWVzKGNvbGxlY3Rpb25OYW1lKTtcblxuICAgIGlmICghdW5wdWJsaXNoZWRFbnRyaWVzIHx8IHVucHVibGlzaGVkRW50cmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgIH1cblxuICAgIGxldCB1bnB1Ymxpc2hlZExpc3QgPSBMaXN0KHVucHVibGlzaGVkRW50cmllcy5tYXAoZW50cnkgPT4gZW50cnkpKTtcblxuICAgIGlmIChjb2xsZWN0aW9ucy5oYXMoJ25lc3RlZCcpICYmIGZpbHRlclRlcm0pIHtcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb25Gb2xkZXIgPSBjb2xsZWN0aW9ucy5nZXQoJ2ZvbGRlcicpO1xuICAgICAgY29uc3Qgc3ViZm9sZGVycyA9IGNvbGxlY3Rpb25zLmdldCgnbmVzdGVkJykuZ2V0KCdzdWJmb2xkZXJzJykgIT09IGZhbHNlO1xuXG4gICAgICB1bnB1Ymxpc2hlZExpc3QgPSBmaWx0ZXJOZXN0ZWRFbnRyaWVzKFxuICAgICAgICBmaWx0ZXJUZXJtLFxuICAgICAgICBjb2xsZWN0aW9uRm9sZGVyLFxuICAgICAgICB1bnB1Ymxpc2hlZExpc3QsXG4gICAgICAgIHN1YmZvbGRlcnMsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHB1Ymxpc2hlZFNsdWdzID0gZW50cmllcy5tYXAoZW50cnkgPT4gZW50cnkuZ2V0KCdzbHVnJykpLnRvU2V0KCk7XG4gICAgY29uc3QgdW5pcXVlVW5wdWJsaXNoZWQgPSB1bnB1Ymxpc2hlZExpc3QuZmlsdGVyTm90KGVudHJ5ID0+XG4gICAgICBwdWJsaXNoZWRTbHVncy5oYXMoZW50cnkuZ2V0KCdzbHVnJykpLFxuICAgICk7XG5cbiAgICByZXR1cm4gZW50cmllcy5jb25jYXQodW5pcXVlVW5wdWJsaXNoZWQpO1xuICB9O1xuXG4gIHJlbmRlckNhcmRzRm9yU2luZ2xlQ29sbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb25zLCB2aWV3U3R5bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWxsRW50cmllcyA9IHRoaXMuZ2V0QWxsRW50cmllcygpO1xuICAgIGNvbnN0IGluZmVycmVkRmllbGRzID0gdGhpcy5pbmZlckZpZWxkcyhjb2xsZWN0aW9ucyk7XG4gICAgY29uc3QgZW50cnlDYXJkUHJvcHMgPSB7IGNvbGxlY3Rpb246IGNvbGxlY3Rpb25zLCBpbmZlcnJlZEZpZWxkcywgdmlld1N0eWxlIH07XG5cbiAgICByZXR1cm4gYWxsRW50cmllcy5tYXAoKGVudHJ5LCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IHdvcmtmbG93U3RhdHVzID0gdGhpcy5wcm9wcy5nZXRXb3JrZmxvd1N0YXR1cyhcbiAgICAgICAgY29sbGVjdGlvbnMuZ2V0KCduYW1lJyksXG4gICAgICAgIGVudHJ5LmdldCgnc2x1ZycpLFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEVudHJ5Q2FyZCB7Li4uZW50cnlDYXJkUHJvcHN9IGVudHJ5PXtlbnRyeX0gd29ya2Zsb3dTdGF0dXM9e3dvcmtmbG93U3RhdHVzfSBrZXk9e2lkeH0gLz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyQ2FyZHNGb3JNdWx0aXBsZUNvbGxlY3Rpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY29sbGVjdGlvbnMsIGVudHJpZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNTaW5nbGVDb2xsZWN0aW9uSW5MaXN0ID0gY29sbGVjdGlvbnMuc2l6ZSA9PT0gMTtcbiAgICByZXR1cm4gZW50cmllcy5tYXAoKGVudHJ5LCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gZW50cnkuZ2V0KCdjb2xsZWN0aW9uJyk7XG4gICAgICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnMuZmluZChjb2xsID0+IGNvbGwuZ2V0KCduYW1lJykgPT09IGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgIGNvbnN0IGNvbGxlY3Rpb25MYWJlbCA9ICFpc1NpbmdsZUNvbGxlY3Rpb25Jbkxpc3QgJiYgY29sbGVjdGlvbi5nZXQoJ2xhYmVsJyk7XG4gICAgICBjb25zdCBpbmZlcnJlZEZpZWxkcyA9IHRoaXMuaW5mZXJGaWVsZHMoY29sbGVjdGlvbik7XG4gICAgICBjb25zdCB3b3JrZmxvd1N0YXR1cyA9IHRoaXMucHJvcHMuZ2V0V29ya2Zsb3dTdGF0dXMoY29sbGVjdGlvbk5hbWUsIGVudHJ5LmdldCgnc2x1ZycpKTtcbiAgICAgIGNvbnN0IGVudHJ5Q2FyZFByb3BzID0ge1xuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBlbnRyeSxcbiAgICAgICAgaW5mZXJyZWRGaWVsZHMsXG4gICAgICAgIGNvbGxlY3Rpb25MYWJlbCxcbiAgICAgICAgd29ya2Zsb3dTdGF0dXMsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIDxFbnRyeUNhcmQgey4uLmVudHJ5Q2FyZFByb3BzfSBrZXk9e2lkeH0gLz47XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sbGVjdGlvbnMsIHBhZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENhcmRzR3JpZD5cbiAgICAgICAgICB7TWFwLmlzTWFwKGNvbGxlY3Rpb25zKVxuICAgICAgICAgICAgPyB0aGlzLnJlbmRlckNhcmRzRm9yU2luZ2xlQ29sbGVjdGlvbigpXG4gICAgICAgICAgICA6IHRoaXMucmVuZGVyQ2FyZHNGb3JNdWx0aXBsZUNvbGxlY3Rpb25zKCl9XG4gICAgICAgICAge3RoaXMuaGFzTW9yZSgpICYmIDxXYXlwb2ludCBrZXk9e3BhZ2V9IG9uRW50ZXI9e3RoaXMuaGFuZGxlTG9hZE1vcmV9IC8+fVxuICAgICAgICA8L0NhcmRzR3JpZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50cnlMaXN0aW5nO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
class EntryListing extends React.Component {
  static propTypes = {
    collections: ImmutablePropTypes.iterable.isRequired,
    entries: ImmutablePropTypes.list,
    viewStyle: PropTypes.string,
    cursor: PropTypes.any.isRequired,
    handleCursorActions: PropTypes.func.isRequired,
    page: PropTypes.number,
    getUnpublishedEntries: PropTypes.func.isRequired,
    getWorkflowStatus: PropTypes.func.isRequired,
    filterTerm: PropTypes.string
  };
  componentDidMount() {
    // Manually validate PropTypes - React 19 breaking change
    PropTypes.checkPropTypes(EntryListing.propTypes, this.props, 'prop', 'EntryListing');
  }
  hasMore = () => {
    const hasMore = this.props.cursor?.actions?.has('append_next');
    return hasMore;
  };
  handleLoadMore = () => {
    if (this.hasMore()) {
      this.props.handleCursorActions('append_next');
    }
  };
  inferFields = collection => {
    const titleField = selectInferredField(collection, 'title');
    const descriptionField = selectInferredField(collection, 'description');
    const imageField = selectInferredField(collection, 'image');
    const fields = selectFields(collection);
    const inferredFields = [titleField, descriptionField, imageField];
    const remainingFields = fields && fields.filter(f => inferredFields.indexOf(f.get('name')) === -1);
    return {
      titleField,
      descriptionField,
      imageField,
      remainingFields
    };
  };
  getAllEntries = () => {
    const {
      entries,
      collections,
      filterTerm
    } = this.props;
    const collectionName = Map.isMap(collections) ? collections.get('name') : null;
    if (!collectionName) {
      return entries;
    }
    const unpublishedEntries = this.props.getUnpublishedEntries(collectionName);
    if (!unpublishedEntries || unpublishedEntries.length === 0) {
      return entries;
    }
    let unpublishedList = List(unpublishedEntries.map(entry => entry));
    if (collections.has('nested') && filterTerm) {
      const collectionFolder = collections.get('folder');
      const subfolders = collections.get('nested').get('subfolders') !== false;
      unpublishedList = filterNestedEntries(filterTerm, collectionFolder, unpublishedList, subfolders);
    }
    const publishedSlugs = entries.map(entry => entry.get('slug')).toSet();
    const uniqueUnpublished = unpublishedList.filterNot(entry => publishedSlugs.has(entry.get('slug')));
    return entries.concat(uniqueUnpublished);
  };
  renderCardsForSingleCollection = () => {
    const {
      collections,
      viewStyle
    } = this.props;
    const allEntries = this.getAllEntries();
    const inferredFields = this.inferFields(collections);
    const entryCardProps = {
      collection: collections,
      inferredFields,
      viewStyle
    };
    return allEntries.map((entry, idx) => {
      const workflowStatus = this.props.getWorkflowStatus(collections.get('name'), entry.get('slug'));
      return ___EmotionJSX(EntryCard, _extends({}, entryCardProps, {
        entry: entry,
        workflowStatus: workflowStatus,
        key: idx
      }));
    });
  };
  renderCardsForMultipleCollections = () => {
    const {
      collections,
      entries
    } = this.props;
    const isSingleCollectionInList = collections.size === 1;
    return entries.map((entry, idx) => {
      const collectionName = entry.get('collection');
      const collection = collections.find(coll => coll.get('name') === collectionName);
      const collectionLabel = !isSingleCollectionInList && collection.get('label');
      const inferredFields = this.inferFields(collection);
      const workflowStatus = this.props.getWorkflowStatus(collectionName, entry.get('slug'));
      const entryCardProps = {
        collection,
        entry,
        inferredFields,
        collectionLabel,
        workflowStatus
      };
      return ___EmotionJSX(EntryCard, _extends({}, entryCardProps, {
        key: idx
      }));
    });
  };
  render() {
    const {
      collections,
      page
    } = this.props;
    return ___EmotionJSX("div", null, ___EmotionJSX(CardsGrid, null, Map.isMap(collections) ? this.renderCardsForSingleCollection() : this.renderCardsForMultipleCollections(), this.hasMore() && ___EmotionJSX(Waypoint, {
      key: page,
      onEnter: this.handleLoadMore
    })));
  }
}
export default EntryListing;