import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import registerReducer from "./registerReducer";
import loguserReducer from "./loguserReducer";
import adminReducer from "./adminReducer";
import categoryReducer from './categoryReducer'
const rootReducer = combineReducers({
  users: registerReducer,
  loguser: loguserReducer,
  admin: adminReducer,
  category: categoryReducer

});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
