import { combineReducers } from "redux";
import properties from "./properties_reducer";
import reservations from "./reservations_reducer";
import searches from "./searches_reducer";
import messages from "./message_reducer";
import users from "./users_reducer";


export default combineReducers({
  properties,
  reservations,
  searches,
  messages,
  users
});
