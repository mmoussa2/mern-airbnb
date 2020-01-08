import Hosting from "./hosting";
import { connect } from 'react-redux';
import { createProperty } from '../../actions/properties_actions'; 


const mapState = state => ({
  currentUser: state.session.user,
});

const mapDispatch = dispatch => ({
  createProperty: newProperty => dispatch(createProperty(newProperty)),
});

export default connect(mapState, mapDispatch)(Hosting);