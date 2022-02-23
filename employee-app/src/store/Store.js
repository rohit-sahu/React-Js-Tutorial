import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from "redux-promise";
import initalstate from './reducer/initalstate';
import allReducers from './reducer/MasterReducer';

const Store = createStore(allReducers, initalstate, composeWithDevTools(
    applyMiddleware(ReduxPromise)),
    // other store enhancers if any
);

export default Store;