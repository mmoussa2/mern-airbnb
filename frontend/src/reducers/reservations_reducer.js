import { RECEIVE_RESERVATION_CREATE, RECEIVE_PROPERTY} from "../actions/reservation_actions";

const initialState ={};

export default function (state = initialState, action) {
  switch (action.type) {
    //........................check property reducer.......................
    case RECEIVE_PROPERTY:
      return Object.assign({}, state, action.property);
    //..................................................

    case RECEIVE_RESERVATION_CREATE:
      return Object.assign({}, state, action.reservation);
    default:
      return state;
  }
}