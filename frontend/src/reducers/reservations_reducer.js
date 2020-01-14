import { RECEIVE_RESERVATION_CREATE, RECEIVE_ALL_RESERVATIONS, RECEIVE_PROPERTY} from "../actions/reservation_actions";

const initialState ={};

export default function (state = initialState, action) {

  switch (action.type) {
    case RECEIVE_ALL_RESERVATIONS:
      const newReservations = {};
      Object.values(action.reservations).forEach((reservation) => {
        newReservations[reservation._id] = reservation
      });
      return Object.assign({}, state, newReservations);
      
    case RECEIVE_RESERVATION_CREATE:
      return Object.assign({}, state, { [action.reservation._id]: action.reservation });
    default:
      return state;
  }
}