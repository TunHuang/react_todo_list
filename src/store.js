import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers/reducer';

const middleware = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducer, composedEnhancer);

export default store;