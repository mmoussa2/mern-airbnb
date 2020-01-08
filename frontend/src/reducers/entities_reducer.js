import { combineReducers } from "redux";
import properties from "./properties_reducer";
import searches from "./searches_reducer";

export default combineReducers({
  properties,
  searches
});