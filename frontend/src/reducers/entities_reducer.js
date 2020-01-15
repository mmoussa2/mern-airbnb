import { combineReducers } from "redux";
import properties from "./properties_reducer";
import reservations from "./reservations_reducer";
import searches from "./searches_reducer";
import comments from './comments_reducer'
import session from "./session_api_reducer";
import users from "./users_reducer";
import messages from "./message_reducer";


export default combineReducers({
  properties,
  reservations,
  searches,
  comments,
  session,
  messages,
  users
});
