import {
  RECEIVE_SEARCH,
  RECEIVE_SEARCH_ERRORS
} from "../actions/searches_actions";

const _nullErrors = [];

const SearchErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return action.errors;
    case RECEIVE_SEARCH:
      return _nullErrors;
    default:
      return state;
  }
};

export default SearchErrorsReducer;
