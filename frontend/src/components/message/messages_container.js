import { connect } from 'react-redux';
import { sendGetMessages } from '../../actions/messages_actions';
import { sendGetUsers } from '../../actions/users_actions';
import Message from './messages'

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    messages: state.entities.messages,
    currentUser: state.session.user.id
  }
};

const mapDispactToProps = dispatch => ({
  sendGetMessages: () => dispatch(sendGetMessages()),
  sendGetUsers: () => dispatch(sendGetUsers())
})

export default connect(
  mapStateToProps,
  mapDispactToProps
)(Message);