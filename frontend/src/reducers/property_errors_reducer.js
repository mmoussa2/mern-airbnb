import {
  RECEIVE_PROPERTY_CREATE,
  RECEIVE_PROPERTY_ERRORS
} from "../actions/properties_actions";

const _nullErrors = [];

const PropertyErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROPERTY_ERRORS:
      return action.errors;
    case RECEIVE_PROPERTY_CREATE:
      return _nullErrors;
    default:
      return state;
  }
};

export default PropertyErrorsReducer;
