import { isAbsolutePath } from 'decap-cms-lib-util';
import { createAssetProxy } from '../valueObjects/AssetProxy';
import { selectMediaFilePath } from '../reducers/entries';
import { selectMediaFileByPath } from '../reducers/mediaLibrary';
import { getMediaFile, waitForMediaLibraryToLoad, getMediaDisplayURL } from './mediaLibrary';
export const ADD_ASSETS = 'ADD_ASSETS';
export const ADD_ASSET = 'ADD_ASSET';
export const REMOVE_ASSET = 'REMOVE_ASSET';
export const LOAD_ASSET_REQUEST = 'LOAD_ASSET_REQUEST';
export const LOAD_ASSET_SUCCESS = 'LOAD_ASSET_SUCCESS';
export const LOAD_ASSET_FAILURE = 'LOAD_ASSET_FAILURE';
export function addAssets(assets) {
  return {
    type: ADD_ASSETS,
    payload: assets
  };
}
export function addAsset(assetProxy) {
  return {
    type: ADD_ASSET,
    payload: assetProxy
  };
}
export function removeAsset(path) {
  return {
    type: REMOVE_ASSET,
    payload: path
  };
}
export function loadAssetRequest(path) {
  return {
    type: LOAD_ASSET_REQUEST,
    payload: {
      path
    }
  };
}
export function loadAssetSuccess(path) {
  return {
    type: LOAD_ASSET_SUCCESS,
    payload: {
      path
    }
  };
}
export function loadAssetFailure(path, error) {
  return {
    type: LOAD_ASSET_FAILURE,
    payload: {
      path,
      error
    }
  };
}
export function loadAsset(resolvedPath) {
  return async (dispatch, getState) => {
    try {
      dispatch(loadAssetRequest(resolvedPath));
      // load asset url from backend
      await waitForMediaLibraryToLoad(dispatch, getState());
      const file = selectMediaFileByPath(getState(), resolvedPath);
      if (file) {
        const url = await getMediaDisplayURL(dispatch, getState(), file);
        const asset = createAssetProxy({
          path: resolvedPath,
          url: url || resolvedPath
        });
        dispatch(addAsset(asset));
      } else {
        const {
          url
        } = await getMediaFile(getState(), resolvedPath);
        const asset = createAssetProxy({
          path: resolvedPath,
          url
        });
        dispatch(addAsset(asset));
      }
      dispatch(loadAssetSuccess(resolvedPath));
    } catch (e) {
      dispatch(loadAssetFailure(resolvedPath, e));
    }
  };
}
const emptyAsset = createAssetProxy({
  path: 'empty.svg',
  file: new File([`<svg xmlns="http://www.w3.org/2000/svg"></svg>`], 'empty.svg', {
    type: 'image/svg+xml'
  })
});
export function boundGetAsset(dispatch, collection, entry) {
  function bound(path, field) {
    const asset = dispatch(getAsset({
      collection,
      entry,
      path,
      field
    }));
    return asset;
  }
  return bound;
}
export function getAsset({
  collection,
  entry,
  path,
  field
}) {
  return (dispatch, getState) => {
    if (!path) return emptyAsset;
    const state = getState();
    const resolvedPath = selectMediaFilePath(state.config, collection, entry, path, field);
    let {
      asset,
      isLoading,
      error
    } = state.medias[resolvedPath] || {};
    if (isLoading) {
      return emptyAsset;
    }
    if (asset) {
      // There is already an AssetProxy in memory for this path. Use it.
      return asset;
    }
    if (isAbsolutePath(resolvedPath)) {
      // asset path is a public url so we can just use it as is
      asset = createAssetProxy({
        path: resolvedPath,
        url: path
      });
      dispatch(addAsset(asset));
    } else {
      if (error) {
        // on load error default back to original path
        asset = createAssetProxy({
          path: resolvedPath,
          url: path
        });
        dispatch(addAsset(asset));
      } else {
        dispatch(loadAsset(resolvedPath));
        asset = emptyAsset;
      }
    }
    return asset;
  };
}