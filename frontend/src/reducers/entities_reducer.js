import { combineReducers } from "redux";
import properties from "./properties_reducer";

const EntitiesReducer = combineReducers({
  properties
});

export default EntitiesReducer;
