import { List } from 'immutable';
import auth from './auth';
import config from './config';
import integrations, * as fromIntegrations from './integrations';
import entries, * as fromEntries from './entries';
import cursors from './cursors';
import editorialWorkflow, * as fromEditorialWorkflow from './editorialWorkflow';
import entryDraft from './entryDraft';
import collections from './collections';
import search from './search';
import medias from './medias';
import mediaLibrary from './mediaLibrary';
import deploys, * as fromDeploys from './deploys';
import globalUI from './globalUI';
import status from './status';
import notifications from './notifications';
const reducers = {
  auth,
  config,
  collections,
  search,
  integrations,
  entries,
  cursors,
  editorialWorkflow,
  entryDraft,
  medias,
  mediaLibrary,
  deploys,
  globalUI,
  status,
  notifications
};
export default reducers;

/*
 * Selectors
 */
export function selectEntry(state, collection, slug) {
  return fromEntries.selectEntry(state.entries, collection, slug);
}
export function selectEntries(state, collection) {
  return fromEntries.selectEntries(state.entries, collection);
}
export function selectPublishedSlugs(state, collection) {
  return fromEntries.selectPublishedSlugs(state.entries, collection);
}
export function selectSearchedEntries(state, availableCollections) {
  // only return search results for actually available collections
  return List(state.search.entryIds).filter(entryId => availableCollections.indexOf(entryId.collection) !== -1).map(entryId => fromEntries.selectEntry(state.entries, entryId.collection, entryId.slug));
}
export function selectDeployPreview(state, collection, slug) {
  return fromDeploys.selectDeployPreview(state.deploys, collection, slug);
}
export function selectUnpublishedEntry(state, collection, slug) {
  return fromEditorialWorkflow.selectUnpublishedEntry(state.editorialWorkflow, collection, slug);
}
export function selectUnpublishedEntriesByStatus(state, status) {
  return fromEditorialWorkflow.selectUnpublishedEntriesByStatus(state.editorialWorkflow, status);
}
export function selectUnpublishedSlugs(state, collection) {
  return fromEditorialWorkflow.selectUnpublishedSlugs(state.editorialWorkflow, collection);
}
export function selectIntegration(state, collection, hook) {
  return fromIntegrations.selectIntegration(state.integrations, collection, hook);
}