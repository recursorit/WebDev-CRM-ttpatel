import { USER_LOGIN } from "./actions";

const currentUser = { currentuser: JSON.parse(localStorage.getItem('currentUser')) }
// eslint-disable-next-line
if (currentUser.currentuser == undefined) {
  currentUser.currentuser = 0;
}

const loguserReducer = (state = currentUser, action) => {
  switch (action.type) {
    case USER_LOGIN:
      console.log(state)
      return {
        ...state,
        currentuser: action.payload,
      };
    default:
      return state;
  }
};

export default loguserReducer;
