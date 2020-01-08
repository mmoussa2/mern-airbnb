import { RECEIVE_PROPERTY_CREATE, RECEIVE_ALL_PROPERTIES } from "../actions/properties_actions";

const initialState = {
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_PROPERTIES:
      return Object.assign({}, state, action.properties);
  
    case RECEIVE_PROPERTY_CREATE:
      return Object.assign({}, state, action.property);
    default:
      return state;
  }
}
