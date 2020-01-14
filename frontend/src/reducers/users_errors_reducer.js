import {
  RECEIVE_ALL_USERS,
  RECEIVE_USER_ERRORS
} from "../actions/users_actions";


const _nullErrors = [];

const UserErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_ALL_USERS:
      return _nullErrors;
    default:
      return state;
  }
};

export default UserErrorsReducer;