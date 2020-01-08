import { combineReducers } from "redux";
import properties from "./properties_reducer";
import reservations from "./reservations_reducer";

const EntitiesReducer = combineReducers({
  properties,
  reservations
});

export default EntitiesReducer;
