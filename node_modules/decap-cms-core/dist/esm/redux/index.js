import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { waitUntilAction } from './middleware/waitUntilAction';
import createRootReducer from '../reducers/combinedReducer';
const store = createStore(createRootReducer(), composeWithDevTools(applyMiddleware(thunkMiddleware, waitUntilAction)));
export { store };