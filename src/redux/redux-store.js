import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-redicer";
import mainBranchReducer from "./main-branch-reducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  mainBranch: mainBranchReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
