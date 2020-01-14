import {connect} from 'react-redux';
import Profile from './profile';

const mapState = state => ({
  currentUser: state.session.user,
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Profile);