import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import PropertyErrorsReducer from './property_errors_reducer';
import SearchErrorsReducer from "./search_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  properties: PropertyErrorsReducer,
  searches: SearchErrorsReducer
});