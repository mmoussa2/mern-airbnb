import * as APIUtil from "../util/search_api_util.js";

export const RECEIVE_SEARCH_CREATE = "RECEIVE_SEARCH_CREATE";
export const RECEIVE_ALL_SEARCHES = "RECEIVE_ALL_SEARCHES";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

// We'll dispatch this when our user signs in
export const receiveSearch = search => ({
  type: RECEIVE_SEARCH_CREATE,
  search
});

export const receiveAllSearches = searches => ({
  type: RECEIVE_ALL_SEARCHES,
  searches
});

// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = errors => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors
});

// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
export const create = search => dispatch =>
  APIUtil.create(search).then(
    (search) => dispatch(receiveSearch(search.data)),
    err => dispatch(receiveErrors(err.response.data))
  );

export const sendGetSearches = () => dispatch =>
  APIUtil.all().then(
    (searches) => dispatch(receiveAllSearches(searches.data)),
    err => dispatch(receiveErrors(err.response.data))
  );

