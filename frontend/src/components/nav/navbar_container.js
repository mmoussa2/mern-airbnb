import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { sendGetProperties } from '../../actions/properties_actions';
import { sendGetSearches, getSearch } from "../../actions/searches_actions";

import NavBar from './navbar';

function getRandomSubarray(arr, size) {
  if (arr.length > 0) {
    let shuffled = arr.slice(0),
      i = arr.length,
      min = i - size,
      temp,
      index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    const newShuffled = {};
    shuffled.slice(min).forEach(property => {
      if (property) {
        newShuffled[property.id] = property;
      }
    });

    return newShuffled;
  } else {
    return arr
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.isAuthenticated,
    properties: getRandomSubarray(Object.values(state.entities.properties), 30),
    searches: state.entities.searches
  };
};

const mapDispactToProps = dispatch => ({
  logout: () => dispatch(logout()),
  sendGetProperties: () => dispatch(sendGetProperties()),
  sendGetSearches: () => dispatch(sendGetSearches()),
  getSearch: (search) => dispatch(getSearch(search))
})

export default connect(
  mapStateToProps,
  mapDispactToProps
)(NavBar);