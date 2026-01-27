/**
 * This module is currently concerned only with external media libraries
 * registered via `registerMediaLibrary`.
 */
import once from 'lodash/once';
import { getMediaLibrary } from './lib/registry';
import { store } from './redux';
import { configFailed } from './actions/config';
import { createMediaLibrary, insertMedia } from './actions/mediaLibrary';
function handleInsert(url) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return store.dispatch(insertMedia(url, undefined));
}
const initializeMediaLibrary = once(async function initializeMediaLibrary(name, options) {
  const lib = getMediaLibrary(name);
  if (!lib) {
    const err = new Error(`Missing external media library '${name}'. Please use 'registerMediaLibrary' to register it.`);
    store.dispatch(configFailed(err));
  } else {
    const instance = await lib.init({
      options,
      handleInsert
    });
    store.dispatch(createMediaLibrary(instance));
  }
});
store.subscribe(() => {
  const state = store.getState();
  if (state) {
    const mediaLibraryName = state.config.media_library?.name;
    if (mediaLibraryName && !state.mediaLibrary.get('externalLibrary')) {
      const mediaLibraryConfig = state.config.media_library;
      initializeMediaLibrary(mediaLibraryName, mediaLibraryConfig);
    }
  }
});