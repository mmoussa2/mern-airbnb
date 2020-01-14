import { connect } from 'react-redux';
import { sendGetMessages, createMessage } from '../../actions/messages_actions';
import { sendGetUsers } from '../../actions/users_actions';
import { sendGetProperties } from '../../actions/properties_actions';
import Conversation from './conversation'

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    messages: state.entities.messages,
    currentUser: state.session.user.id,
    properties: state.entities.properties,
    reservations: state.entities.reservations,
  }
};

const mapDispactToProps = dispatch => ({
  sendGetMessages: () => dispatch(sendGetMessages()),
  sendGetUsers: () => dispatch(sendGetUsers()),
  sendGetProperties: () => dispatch(sendGetProperties()),
  createMessage: (message) => dispatch(createMessage(message)),
  // getSingleReservation
})

export default connect(
  mapStateToProps,
  mapDispactToProps
)(Conversation);