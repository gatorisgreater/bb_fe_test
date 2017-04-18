import {createStore, applyMiddleware} from 'redux';

import transferReducer from './reducers/reducer';

const store = createStore(transferReducer);

export default store;