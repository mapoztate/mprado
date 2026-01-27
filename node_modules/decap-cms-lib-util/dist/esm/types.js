import { Map as ImmutableMap, List } from 'immutable';
export function isImmutableMap(value) {
  return ImmutableMap.isMap(value);
}
export function isImmutableList(value) {
  return List.isList(value);
}