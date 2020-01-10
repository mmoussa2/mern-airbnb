import * as APIUtil from "../util/message_api_util.js";

export const RECEIVE_MESSAGE_CREATE = "RECEIVE_MESSAGE_CREATE";
export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE_CREATE,
  message
});

export const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const receiveErrors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});

export const createMessage = message => dispatch =>
  APIUtil.create(message).then(
    (message) => dispatch(receiveMessage(message.data)),
    err => dispatch(receiveErrors(err.response.data))
  );

export const sendGetMessages = () => dispatch =>
  APIUtil.all().then(
    (messages) => dispatch(receiveAllMessages(messages.data)),
    err => dispatch(receiveErrors(err.response.data))
  );
