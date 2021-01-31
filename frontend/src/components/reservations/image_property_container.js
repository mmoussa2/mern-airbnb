import { connect } from 'react-redux';

import Gallery from './gallery/images';
import { fetchProperty } from '../../actions/reservation_actions';


const mapStateToProps = (state, ownProps) => {

  const propertyId = ownProps.match.params.propertyId;
  const property = state.entities.properties[propertyId];
 
  const images = property ? property.imageUrls : [];

  return {
    propertyId,
    property,
    images,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProperty: id => dispatch(fetchProperty(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);