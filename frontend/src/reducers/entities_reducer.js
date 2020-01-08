import { combineReducers } from "redux";
import properties from "./properties_reducer";
import session from "./session_api_reducer"

const EntitiesReducer = combineReducers({
  properties,
  session
});

export default EntitiesReducer;
