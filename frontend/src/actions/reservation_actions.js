import * as APIUtil from "../util/reservation_api_util.js";

export const RECEIVE_RESERVATION_CREATE = "RECEIVE_RESERVATION_CREATE";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";



export const receiveReservation= reservation => ({
  type: RECEIVE_RESERVATION_CREATE,
  reservation
});

export const receiveErrors = errors => ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
});


export const receiveAllReservations = reservations => ({
  type: RECEIVE_ALL_RESERVATIONS,
  reservations
});


export const composeReservation = reservation => dispatch =>(
  APIUtil.composeReservation(reservation).then(
    reservation => dispatch(receiveReservation(reservation.data)),
    err => dispatch(receiveErrors(err.response.data))
));

export const fetchAllReservations = reservations =>dispatch =>(
  APIUtil.fetchAllReservations(reservations).then(
    reservations => dispatch(receiveAllReservations(reservations.data)),
    err => dispatch(receiveErrors(err.response.data))
  ));

// ................... check property action if has thses ...........................................


export const RECEIVE_PROPERTY = "RECEIVE_PROPERTY";
export const RECEIVE_PROPERTY_ERRORS = "RECEIVE_PROPERTY_ERRORS";

export const receiveProperty = property => {
  return{
  type: RECEIVE_PROPERTY,
  property
}};

export const fetchProperty = id => dispatch => {

  return APIUtil.fetchProperty(id).then(
    property => dispatch(receiveProperty(property.data)),
    err=> dispatch(receiveErrors(err.response.data))
)}; 
//......................................................................