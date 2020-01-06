import { RECEIVE_PROPERTY_CREATE } from "../actions/session_actions";

const initialState = {
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PROPERTY_CREATE:
      return Object.assign({}, state, action.property);
    default:
      return state;
  }
}
