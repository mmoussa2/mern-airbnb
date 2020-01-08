import { connect } from 'react-redux';
import { selectPropertyImages, selectProperty } from '../../reducers/selectors';
import PropertyShow from './property_show';

//........................ check path for this .................
import { fetchProperty } from '../../actions/reservation_actions';
//..............................................


const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const propertyId = parseInt(ownProps.match.params.propertyId);
  const property =  selectProperty(state.entities, propertyId);
  const images = [] // =>>>>> selectPropertyImages(state.entities, property);
debugger;
  return {
    propertyId,
    property,
    images
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProperty: id => dispatch(fetchProperty(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyShow);