import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import transferReducer from './reducers/reducer';

const store = createStore(transferReducer, applyMiddleware(thunk));

export default store;