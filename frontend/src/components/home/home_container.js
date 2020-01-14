import Home from "./home";
import { connect } from 'react-redux';

const mapState = state => ({
  currentUser: state.session.user,
  isAuthenticated: state.session.isAuthenticated,
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(Home);