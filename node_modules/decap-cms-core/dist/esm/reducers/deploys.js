import { produce } from 'immer';
import { DEPLOY_PREVIEW_REQUEST, DEPLOY_PREVIEW_SUCCESS, DEPLOY_PREVIEW_FAILURE } from '../actions/deploys';
const defaultState = {};
const deploys = produce((state, action) => {
  switch (action.type) {
    case DEPLOY_PREVIEW_REQUEST:
      {
        const {
          collection,
          slug
        } = action.payload;
        const key = `${collection}.${slug}`;
        state[key] = state[key] || {};
        state[key].isFetching = true;
        break;
      }
    case DEPLOY_PREVIEW_SUCCESS:
      {
        const {
          collection,
          slug,
          url,
          status
        } = action.payload;
        const key = `${collection}.${slug}`;
        state[key].isFetching = false;
        state[key].url = url;
        state[key].status = status;
        break;
      }
    case DEPLOY_PREVIEW_FAILURE:
      {
        const {
          collection,
          slug
        } = action.payload;
        state[`${collection}.${slug}`].isFetching = false;
        break;
      }
  }
}, defaultState);
export function selectDeployPreview(state, collection, slug) {
  return state[`${collection}.${slug}`];
}
export default deploys;