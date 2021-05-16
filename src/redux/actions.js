export const REGISTER_USER = "REGISTER_USER";
export const USER_LOGIN = "USER_LOGIN";

export function registerUser(data) {
  return {
    type: "REGISTER_USER",
    payload: data,
  };
}

export function userLogin(data) {
  return {
    type: "USER_LOGIN",
    payload: data,
  };
}
