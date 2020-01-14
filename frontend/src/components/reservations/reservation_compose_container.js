import { connect } from 'react-redux';
import { composeReservation } from '../../actions/reservation_actions';
import ReservationCompose from './reservation_compose';

const mapStateToProps = (state, ownProps) => {
  const propertyId = ownProps.match.params.propertyId;
  const property = state.entities.properties[propertyId];

  return {
    currentUser: state.session.user,
    cost: property.price,
    errors: state.errors.reservations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeReservation: data => dispatch(composeReservation(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationCompose);
