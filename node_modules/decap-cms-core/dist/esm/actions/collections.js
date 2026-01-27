import { history } from '../routing/history';
import { getCollectionUrl, getNewEntryUrl } from '../lib/urlHelper';
export function searchCollections(query, collection) {
  if (collection) {
    history.push(`/collections/${collection}/search/${query}`);
  } else {
    history.push(`/search/${query}`);
  }
}
export function showCollection(collectionName) {
  history.push(getCollectionUrl(collectionName));
}
export function createNewEntry(collectionName) {
  history.push(getNewEntryUrl(collectionName));
}