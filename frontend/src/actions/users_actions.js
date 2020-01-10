import * as APIUtil from "../util/user_api_util.js";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const sendGetUsers = () => dispatch =>
  APIUtil.all().then(
    (users) => dispatch(receiveAllUsers(users.data)),
    err => dispatch(receiveErrors(err.response.data))
  );
