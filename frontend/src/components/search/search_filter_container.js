import { connect } from 'react-redux';
import { sendGetProperties } from '../../actions/properties_actions';
import { sendGetSearches } from "../../actions/searches_actions";

import SearchFilter from './search_filter';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    properties: state.entities.properties,
    searches: state.entities.searches
  }
};

const mapDispactToProps = dispatch => ({
  sendGetProperties: () => dispatch(sendGetProperties()),
  sendGetSearches: () => dispatch(sendGetSearches())
})

export default connect(
  mapStateToProps,
  mapDispactToProps
)(SearchFilter);