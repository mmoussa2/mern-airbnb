import {
  RECEIVE_SEARCH_CREATE,
  RECEIVE_SEARCH_ERRORS
} from "../actions/searches_actions";

const _nullErrors = [];

const SearchErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return action.errors;
    case RECEIVE_SEARCH_CREATE:
      return _nullErrors;
    default:
      return state;
  }
};

export default SearchErrorsReducer;
