import * as APIUtil from "../util/property_api_util.js";

export const RECEIVE_PROPERTY_CREATE = "RECEIVE_PROPERTY_CREATE";
export const RECEIVE_ALL_PROPERTIES = "RECEIVE_ALL_PROPERTIES";
export const RECEIVE_PROPERTY_ERRORS = "RECEIVE_PROPERTY_ERRORS";

export const receiveProperty = property => ({
  type: RECEIVE_PROPERTY_CREATE,
  property
});

export const receiveAllProperties = properties => ({
  type: RECEIVE_ALL_PROPERTIES,
  properties
});

export const receiveErrors = errors => ({
  type: RECEIVE_PROPERTY_ERRORS,
  errors
});

export const createProperty = property => dispatch =>
  APIUtil.create(property).then(
    (property) => dispatch(receiveProperty(property.data)),
    err => dispatch(receiveErrors(err.response.data))
  );

export const sendGetProperties = () => dispatch =>
  APIUtil.all().then(
    (properties) => dispatch(receiveAllProperties(properties.data)),
    err => dispatch(receiveErrors(err.response.data))
  );
