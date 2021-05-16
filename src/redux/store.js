import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import registerReducer from "./registerReducer";
import loguserReducer from "./loguserReducer";
const rootReducer = combineReducers({
  users: registerReducer,
  loguser: loguserReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
