import { combineReducers } from "redux";
import properties from "./properties_reducer";
import searches from "./searches_reducer";
import session from "./session_api_reducer";

export default combineReducers({
  properties,
  searches,
  session
});
