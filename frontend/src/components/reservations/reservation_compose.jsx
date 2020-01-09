import React from 'react';
import { withRouter } from 'react-router-dom';


class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property_id: this.props.match.params.propertyId,
      guest_id: 1 ,/// ========> this.props.currentUser,
      start_date: '',
      end_date: '',
      booking_id: '_' + Math.random().toString(36).substr(2, 9),
      cost: 2 // ''  ======> should change
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToPropertyShow = this.navigateToPropertyShow.bind(this);
  }

  navigateToPropertyShow() {
    const url = `/properties/${this.props.match.params.propertyId}`
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const propertyId = this.props.match.params.propertyId;
    const reservation = Object.assign({}, this.state, {
      property_id: propertyId
    });
    this.props.composeReservation(reservation);
    this.navigateToPropertyShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });

  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Check-in</label>
          <br />
            <input type="date"
              value={this.state.text}
              onChange={this.update()}
              />
          <br />
          <label>Checkout</label>
          <br />
          <input type="date"
            value={this.state.text}
            onChange={this.update()}
          />
          <br />
          <input type="submit" />
        </form>
        <button onClick={this.navigateToPropertyShow}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(ReservationForm);