import {
 
  RECEIVE_COMMENT_CREATE,
  RECEIVE_COMMENT_ERRORS
} from "../actions/comments_actions";




const _nullErrors = [];

const CommentErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case RECEIVE_COMMENT_CREATE:
      return _nullErrors;
    default:
      return state;
  }
};

export default CommentErrorsReducer;