import { RECEIVE_ALL_SEARCHES, RECEIVE_SEARCH } from "../actions/searches_actions";

const initialState = {

};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SEARCH:
      return Object.assign({}, state, action.search);
    case RECEIVE_ALL_SEARCHES:
      return Object.assign({}, state, action.searches);
    default:
      return state;
  }
}
