import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import PropertyErrorsReducer from './property_errors_reducer';
import ReservationErrorsReducer from './reservation_errors_reducer';
import SearchErrorsReducer from "./search_errors_reducer";
import CommentErrorsReducer from './comment_errors_reducer';
import MessageErrorsReducer from "./message_errors_reducer";
import UserErrorsReducer from "./user_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  properties: PropertyErrorsReducer,
  reservations: ReservationErrorsReducer,
  comments: CommentErrorsReducer,
  searches: SearchErrorsReducer,
  messages: MessageErrorsReducer,
  users: UserErrorsReducer
});