import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import registerReducer from "./registerReducer";
import loguserReducer from "./loguserReducer";
import adminReducer from "./adminReducer";
const rootReducer = combineReducers({
  users: registerReducer,
  loguser: loguserReducer,
  admin:adminReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
