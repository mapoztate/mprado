import { produce } from 'immer';
import { CONFIG_REQUEST, CONFIG_SUCCESS, CONFIG_FAILURE } from '../actions/config';
import { EDITORIAL_WORKFLOW } from '../constants/publishModes';
const defaultState = {
  isFetching: true
};
const config = produce((state, action) => {
  switch (action.type) {
    case CONFIG_REQUEST:
      state.isFetching = true;
      break;
    case CONFIG_SUCCESS:
      return {
        ...action.payload,
        isFetching: false,
        error: undefined
      };
    case CONFIG_FAILURE:
      state.isFetching = false;
      state.error = action.payload.toString();
  }
}, defaultState);
export function selectLocale(state) {
  return state.locale || 'en';
}
export function selectUseWorkflow(state) {
  return state.publish_mode === EDITORIAL_WORKFLOW;
}
export default config;