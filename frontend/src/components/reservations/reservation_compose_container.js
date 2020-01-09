import { connect } from 'react-redux';
import { composeReservation } from '../../actions/reservation_actions';
import ReservationCompose from './reservation_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeReservation: data => dispatch(composeReservation(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationCompose);
