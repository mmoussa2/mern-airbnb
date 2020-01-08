import * as APIUtil from "../util/reservation_api_util.js";

export const RECEIVE_RESERVATION_CREATE = "RECEIVE_RESERVATION_CREATE";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";



export const receiveReservation= reservation => ({
  type: RECEIVE_RESERVATION_CREATE,
  reservation
});


export const receiveErrors = errors => ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
});

export const composeReservation = reservation => dispatch =>(
  APIUtil.create(reservation).then(
    reservation => dispatch(receiveReservation(reservation)),
    err => dispatch(receiveErrors(err.response.data))
));


// ................... check property action if has thses ...........................................


export const RECEIVE_PROPERTY = "RECEIVE_PROPERTY";
export const RECEIVE_PROPERTY_ERRORS = "RECEIVE_PROPERTY_ERRORS";

export const receiveProperty = property => ({
  type: RECEIVE_PROPERTY,
  property
});

export const fetchProperty = id => dispatch => (
  APIUtil.fetchProperty(id).then(
    property => dispatch(receiveProperty(property)),
    err=> dispatch(receiveErrors(err.response.data))
));
//......................................................................