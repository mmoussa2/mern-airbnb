import { connect } from 'react-redux';
import { sendGetProperties } from '../../actions/properties_actions';
import { sendGetSearches, getSearch } from "../../actions/searches_actions";

import SearchFilter from './search_filter';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    searches: state.entities.searches
  };
};

const mapDispactToProps = dispatch => ({
  sendGetProperties: () => dispatch(sendGetProperties()),
  sendGetSearches: () => dispatch(sendGetSearches()),
  getSearch: search => dispatch(getSearch(search))
});

export default connect(
  mapStateToProps,
  mapDispactToProps
)(SearchFilter);