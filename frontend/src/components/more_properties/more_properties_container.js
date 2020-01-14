import { connect } from 'react-redux';
import MoreProperties from './more_properties';

const mapState = state => ({
  properties: state.entities.properties
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(MoreProperties);