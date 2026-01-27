import { createHashHistory } from 'history';
const history = createHashHistory();
export function navigateToCollection(collectionName) {
  return history.push(`/collections/${collectionName}`);
}
export function navigateToNewEntry(collectionName) {
  return history.replace(`/collections/${collectionName}/new`);
}
export function navigateToEntry(collectionName, slug) {
  return history.replace(`/collections/${collectionName}/entries/${slug}`);
}
export { history };