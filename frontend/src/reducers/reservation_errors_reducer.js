import {
  RECEIVE_RESERVATION_CREATE,
  RECEIVE_RESERVATION_ERRORS
} from "../actions/reservation_actions";

const _nullErrors = [];

const PropertyErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;
    case RECEIVE_RESERVATION_CREATE:
      return _nullErrors;
    default:
      return state;
  }
};

export default PropertyErrorsReducer;