import * as APIUtil from "../util/comment_api_util.js";

export const RECEIVE_COMMENT_CREATE =  "RECEIVE_COMMENT_CREATE";
export const RECEIVE_PROPERTY_COMMENTS = "RECEIVE_PROPERTY_COMMENTS";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const receiveComment = (comment)=>({
  type: RECEIVE_COMMENT_CREATE ,
  comment
});

export const receivePropertyComments = comments => {
  return {
  type: RECEIVE_PROPERTY_COMMENTS,
  comments
}};

export const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const createComment= comment => dispatch =>{
  return APIUtil.create(comment)
         .then(comment => dispatch(receiveComment(comment.data)),
                   err => {
                     console.log(err);
                     return dispatch(receiveErrors(err.response.data))}
   )
                   };


export const fetchPropertyComments = (propertyId) => dispatch =>(
   APIUtil.fetchComments(propertyId)
    .then(comments => {
       return dispatch(receivePropertyComments(comments.data))},
       err => dispatch(receiveErrors(err.response.data))
    )
);

