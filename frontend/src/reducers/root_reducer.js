import { combineReducers } from 'redux';
import session from './session_api_reducer';
import entities from './entities_reducer'
import errors from './errors_reducer';

const RootReducer = combineReducers({
  entities,
  session,
  errors
});

export default RootReducer;