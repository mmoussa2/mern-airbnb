import {
  RECEIVE_PROPERTY_CREATE,
  RECEIVE_ALL_PROPERTIES
} from "../actions/properties_actions";

import { RECEIVE_PROPERTY} from "../actions/reservation_actions"


const initialState = {};

export default function(state = initialState, action) {

  
  switch (action.type) {
    
    case RECEIVE_PROPERTY_CREATE:
      return Object.assign({}, state, {[action.property._id]:action.property});

    case RECEIVE_PROPERTY:
      return Object.assign({}, state, { [action.property._id]: action.property });

    case RECEIVE_ALL_PROPERTIES:
      const newProperties = {};
      Object.values(action.properties).forEach((property) => {
        newProperties[property._id] = property
      });
      return Object.assign({}, state, newProperties);
    default:
      return state;
  }
}
