
import {
  RECEIVE_COMMENT_CREATE,
  RECEIVE_PROPERTY_COMMENTS
} from "../actions/comments_actions";



const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COMMENT_CREATE:
      return Object.assign({},state, {[action.comment._id]:action.comment})

    case RECEIVE_PROPERTY_COMMENTS:
    const newComments = {};
      Object.values(action.comments).forEach((comment) => {
        newComments[comment._id] = comment
      });
      return Object.assign({}, state, newComments);

    default:
      return state;
  }
}
