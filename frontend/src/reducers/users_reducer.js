
import {
  RECEIVE_ALL_USERS
} from "../actions/users_actions";



const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      const newUsers = {};
      Object.values(action.users).forEach((user) => {
        newUsers[user._id] = user
      });
      return Object.assign({}, state, newUsers);

    default:
      return state;
  }
}