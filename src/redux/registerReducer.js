import { REGISTER_USER } from "./actions";
import moment from "moment";
const initialState = [
  {
    firstname: "Tirth",
    lastname: "Patel",
    email: "tt",
    password: "123",
    registrationDate: moment().format('YYYY-MM-DD'),
    registrationTime: moment().format('h:mm:ss a'),
    role: "admin",
    status: "active",
  },
];

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      // console.log("register event called");
      return [
        ...state,
        {
          ...action.payload,
          role: "user",
          registrationDate: moment().format('YYYY-MM-DD'),
          registrationTime: moment().format('h:mm:ss a'),
          status: "active",
        },
      ];

    default:
      return state;
  }
};

export default registerReducer;
