import { REGISTER_USER, UPDATE_USER } from "./actions";
import moment from "moment";

const initialState = {
  users: [
    {
      firstname: "Tirth",
      lastname: "Patel",
      email: "tt",
      password: "123",
      // password: btoa("123"),
      registrationDate: moment().format('YYYY-MM-DD'),
      registrationTime: moment().format('h:mm:ss a'),
      role: "admin",
      status: "active",
      index: 0
    },
  ]
}
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      // console.log("register event called");
      return {
        ...state,
        users: [...state.users,
        {
          ...action.payload,
          role: "user",
          registrationDate: moment().format('YYYY-MM-DD'),
          registrationTime: moment().format('h:mm:ss a'),
          status: "active",
          index: state.users.length
        }
        ],
      }
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.index === action.payload.index) {
            return {
              firstname: action.payload.firstname,
              lastname: action.payload.lastname,
              email: action.payload.email,
              password: action.payload.password,
              registrationDate: moment().format('YYYY-MM-DD'),
              registrationTime: moment().format('h:mm:ss a'),
              index: action.payload.index,
              role: action.payload.role,
              status: action.payload.status
            }
          }
          return user
        })
      }
    default:
      return state;
  }
};

export default registerReducer;
