import {
  RECEIVE_MESSAGE_CREATE,
  RECEIVE_ALL_MESSAGES
} from "../actions/messages_actions";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE_CREATE:
      return Object.assign({}, state, { [action.message._id]: action.message});
    case RECEIVE_ALL_MESSAGES:
      const newMessages = {};
      Object.values(action.messages).forEach((message) => {
        newMessages[message._id] = message
      });
      return Object.assign({}, state, newMessages);
    default:
      return state;
  }
}
