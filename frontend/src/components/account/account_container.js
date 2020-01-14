import { connect } from 'react-redux';
import Account from './account';

const mapState = state => ({
  currentUser: state.session.user
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Account)