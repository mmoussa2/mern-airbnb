import { connect } from 'react-redux';
import MainPage from './main_page';

const mapState = state => ({
  currentUser: state.session.user
})

const mapDispatch = dispatch => ({
  
})

export default connect(mapState, mapDispatch)(MainPage);