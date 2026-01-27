import { fromJS, Map, Set } from 'immutable';
function jsToMap(obj) {
  if (obj === undefined) {
    return Map();
  }
  const immutableObj = fromJS(obj);
  if (!Map.isMap(immutableObj)) {
    throw new Error('Object must be equivalent to a Map.');
  }
  return immutableObj;
}
const knownMetaKeys = Set(['index', 'page', 'count', 'pageSize', 'pageCount', 'usingOldPaginationAPI', 'extension', 'folder', 'depth']);
function filterUnknownMetaKeys(meta) {
  return meta.filter((_v, k) => knownMetaKeys.has(k));
}

/*
  createCursorMap takes one of three signatures:
  - () -> cursor with empty actions, data, and meta
  - (cursorMap: <object/Map with optional actions, data, and meta keys>) -> cursor
  - (actions: <array/List>, data: <object/Map>, meta: <optional object/Map>) -> cursor
*/
function createCursorStore(...args) {
  const {
    actions,
    data,
    meta
  } = args.length === 1 ? jsToMap(args[0]).toObject() : {
    actions: args[0],
    data: args[1],
    meta: args[2]
  };
  return Map({
    // actions are a Set, rather than a List, to ensure an efficient .has
    actions: Set(actions),
    // data and meta are Maps
    data: jsToMap(data),
    meta: jsToMap(meta).update(filterUnknownMetaKeys)
  });
}
function hasAction(store, action) {
  return store.hasIn(['actions', action]);
}
function getActionHandlers(store, handler) {
  return store.get('actions', Set()).toMap().map(action => handler(action));
}

// The cursor logic is entirely functional, so this class simply
// provides a chainable interface
export default class Cursor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  static create(...args) {
    return new Cursor(...args);
  }
  constructor(...args) {
    if (args[0] instanceof Cursor) {
      return args[0];
    }
    this.store = createCursorStore(...args);
    this.actions = this.store.get('actions');
    this.data = this.store.get('data');
    this.meta = this.store.get('meta');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateStore(...args) {
    return new Cursor(this.store.update(...args));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateInStore(...args) {
    return new Cursor(this.store.updateIn(...args));
  }
  hasAction(action) {
    return hasAction(this.store, action);
  }
  addAction(action) {
    return this.updateStore('actions', actions => actions.add(action));
  }
  removeAction(action) {
    return this.updateStore('actions', actions => actions.delete(action));
  }
  setActions(actions) {
    return this.updateStore(store => store.set('actions', Set(actions)));
  }
  mergeActions(actions) {
    return this.updateStore('actions', oldActions => oldActions.union(actions));
  }
  getActionHandlers(handler) {
    return getActionHandlers(this.store, handler);
  }
  setData(data) {
    return new Cursor(this.store.set('data', jsToMap(data)));
  }
  mergeData(data) {
    return new Cursor(this.store.mergeIn(['data'], jsToMap(data)));
  }
  wrapData(data) {
    return this.updateStore('data', oldData => jsToMap(data).set('wrapped_cursor_data', oldData));
  }
  unwrapData() {
    return [this.store.get('data').delete('wrapped_cursor_data'), this.updateStore('data', data => data.get('wrapped_cursor_data'))];
  }
  clearData() {
    return this.updateStore('data', () => Map());
  }
  setMeta(meta) {
    return this.updateStore(store => store.set('meta', jsToMap(meta)));
  }
  mergeMeta(meta) {
    return this.updateStore(store => store.update('meta', oldMeta => oldMeta.merge(jsToMap(meta))));
  }
}

// This is a temporary hack to allow cursors to be added to the
// interface between backend.js and backends without modifying old
// backends at all. This should be removed in favor of wrapping old
// backends with a compatibility layer, as part of the backend API
// refactor.
export const CURSOR_COMPATIBILITY_SYMBOL = Symbol('cursor key for compatibility with old backends');