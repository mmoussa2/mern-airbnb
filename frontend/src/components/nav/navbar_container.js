import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { sendGetProperties } from '../../actions/properties_actions';
import { sendGetSearches } from "../../actions/searches_actions";

import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.isAuthenticated,
    properties: state.entities.properties,
    searches: state.entities.searches
  }
};

const mapDispactToProps = dispatch => ({
  logout: () => dispatch(logout()),
  sendGetProperties: () => dispatch(sendGetProperties()),
  sendGetSearches: () => dispatch(sendGetSearches())
})

export default connect(
  mapStateToProps,
  mapDispactToProps
)(NavBar);