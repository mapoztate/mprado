import { fromJS } from 'immutable';
import { CONFIG_SUCCESS } from '../actions/config';
export function getIntegrations(config) {
  const integrations = config.integrations || [];
  const newState = integrations.reduce((acc, integration) => {
    const {
      hooks,
      collections,
      provider,
      ...providerData
    } = integration;
    acc.providers[provider] = {
      ...providerData
    };
    if (!collections) {
      hooks.forEach(hook => {
        acc.hooks[hook] = provider;
      });
      return acc;
    }
    const integrationCollections = collections === '*' ? config.collections.map(collection => collection.name) : collections;
    integrationCollections.forEach(collection => {
      hooks.forEach(hook => {
        acc.hooks[collection] ? acc.hooks[collection][hook] = provider : acc.hooks[collection] = {
          [hook]: provider
        };
      });
    });
    return acc;
  }, {
    providers: {},
    hooks: {}
  });
  return fromJS(newState);
}
const defaultState = fromJS({
  providers: {},
  hooks: {}
});
function integrations(state = defaultState, action) {
  switch (action.type) {
    case CONFIG_SUCCESS:
      {
        return getIntegrations(action.payload);
      }
    default:
      return state;
  }
}
export function selectIntegration(state, collection, hook) {
  return collection ? state.getIn(['hooks', collection, hook], false) : state.getIn(['hooks', hook], false);
}
export default integrations;