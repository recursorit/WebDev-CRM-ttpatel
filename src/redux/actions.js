export const REGISTER_USER = "REGISTER_USER";
export const USER_LOGIN = "USER_LOGIN";
export const UPDATE_USER = 'UPDATE_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER'
export const ADDBY_ADMIN = "ADDBY_ADMIN"
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

export const updateUser = (data) => {
  return {
    type: "UPDATE_USER",
    payload: data
  }
}

export const editAdmin = (data) => {
  return {
    type: "EDIT_USER",
    payload: data
  }
}

export const deleteUser = (data) => {
  return {
    type: "DELETE_USER",
    payload: data
  }
}

export const addbyadmin = (data) => {
  return {
    type: 'ADDBY_ADMIN',
    payload: data
  }
}