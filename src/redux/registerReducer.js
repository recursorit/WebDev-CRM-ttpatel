import { ADDBY_ADMIN, DELETE_USER, REGISTER_USER, UPDATE_USER, STORE_USER} from "./actions";
import moment from "moment";

const initialState = { users: JSON.parse(localStorage.getItem('usersList')) }
// eslint-disable-next-line
if (initialState.users == undefined) {
  initialState.users = [
    {
      firstname: "Tirth",
      lastname: "Patel",
      email: "tt",
      password: btoa("123"),
      registrationDate: moment().format('YYYY-MM-DD'),
      registrationTime: moment().format('hh:mm:ss a'),
      role: "admin",
      status: "active",
      index: 0
    }

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
    case STORE_USER:
      localStorage.setItem('usersList', JSON.stringify(state.users))
      return state
    case ADDBY_ADMIN:

      return {
        ...state,
        users: [...state.users, {
          ...action.payload,
          registrationDate: moment().format('YYYY-MM-DD'),
          registrationTime: moment().format('h:mm:ss a'),
          index: state.users.length,
          password: btoa(action.payload.password),
        }]
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
              password: btoa(action.payload.password),
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
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.index !== action.payload)
      }
    default:
      return state;
  }
};

export default registerReducer;
