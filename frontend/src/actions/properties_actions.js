import * as APIUtil from "../util/property_util.js";

export const RECEIVE_PROPERTY_CREATE = "RECEIVE_PROPERTY_CREATE";
export const RECEIVE_PROPERTY_ERRORS = "RECEIVE_PROPERTY_ERRORS";

// We'll dispatch this when our user signs in
export const receivePropery = newProperty => ({
  type: RECEIVE_PROPERTY_CREATE,
  newProperty
});

// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = errors => ({
  type: RECEIVE_PROPERTY_ERRORS,
  errors
});

// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
export const create = property => dispatch =>
  APIUtil.create(property).then(
    (property) => dispatch(receivePropery(property)),
    err => dispatch(receiveErrors(err.response.data))
  );

