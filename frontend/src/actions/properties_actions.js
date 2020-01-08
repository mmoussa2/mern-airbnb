import * as APIUtil from "../util/property_api_util.js";

export const RECEIVE_PROPERTY_CREATE = "RECEIVE_PROPERTY_CREATE";
export const RECEIVE_PROPERTY_ERRORS = "RECEIVE_PROPERTY_ERRORS";

export const receivePropery = property => ({
  type: RECEIVE_PROPERTY_CREATE,
  property
});

export const receiveErrors = errors => ({
  type: RECEIVE_PROPERTY_ERRORS,
  errors
});

export const createProperty = property => dispatch =>
  APIUtil.create(property).then(
    (property) => dispatch(receivePropery(property)),
    err => dispatch(receiveErrors(err.response.data))
  );

