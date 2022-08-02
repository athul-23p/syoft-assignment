import { legacy_createStore as createStore,applyMiddleware,compose,combineReducers } from "redux";
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import productReducer from './products/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    products:productReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;