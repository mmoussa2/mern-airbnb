import {
  RECEIVE_MESSAGE_CREATE,
  RECEIVE_MESSAGE_ERRORS
} from "../actions/messages_actions";

const _nullErrors = [];

const PropertyErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors;
    case RECEIVE_MESSAGE_CREATE:
      return _nullErrors;
    default:
      return state;
  }
};

export default PropertyErrorsReducer;
