import { connect } from 'react-redux';
import { selectProperty } from '../../reducers/selectors';
import PropertyShow from './property_show';


import { fetchProperty  } from '../../actions/reservation_actions';
import { fetchAllReservations } from '../../actions/reservation_actions';
import { fetchPropertyComments} from '../../actions/comments_actions';
import { fetchAllUsers } from '../../actions/users_actions';


const mapStateToProps = (state, ownProps) => {

  const propertyId = ownProps.match.params.propertyId;
  const property = state.entities.properties[propertyId];
  const image = property? property.imageUrl : [];
  const comments = state.entities.comments;

  return {
    propertyId,
    property,
    image,
    comments
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProperty: id => dispatch(fetchProperty(id)),
  fetchAllReservations: () => dispatch(fetchAllReservations()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchComments: propertyId => dispatch(fetchPropertyComments(propertyId))
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyShow);