import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-redicer';
import mainBranchReducer from './main-branch-reducer';

let reducers = combineReducers({
  mainBranch: mainBranchReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
