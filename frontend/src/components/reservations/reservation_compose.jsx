import React from 'react';
import { withRouter } from 'react-router-dom';
import Dialog from './Dialog'


class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      property_id: this.props.match.params.propertyId,
      guest_id: props.currentUser.id,
      start_date: '',
      end_date: '',
      booking_id: '_' + Math.random().toString(36).substr(2, 9),
      cost: props.cost ,
      errors: [],
      total: props.cost,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    // this.navigateToPropertyShow = this.navigateToPropertyShow.bind(this);
  }

  calculateDaysCost(endDate){
 
    if (endDate !== '' && this.state.start_date !== '') {
     
      var differenceDays = new Date(endDate).getTime() - new Date(this.state.start_date).getTime();
      differenceDays /=  (1000 * 60 * 60 * 24)
    
       var total = this.state.cost * differenceDays;
       this.setState({ total : total })
    }
  }
  // navigateToPropertyShow() {
  //   const url = `/properties/${this.props.match.params.propertyId}`
  //   this.props.history.push(url);
  // }

  handleSubmit(e) {
    e.preventDefault();
  
    const propertyId = this.props.match.params.propertyId;
    const reservation = Object.assign({}, this.state);
    this.props.composeReservation(reservation).then((result)=>{
      this.clearData();
  
    }).catch((result)=>{

    });
  }

  clearData(){
    this.setState({
      start_date: '',
      end_date: '',
      total: this.props.cost}) 
  }

  displayModal(msg){
  if(msg ==='') return null;
  return(
    <div className="bg-modal">
      <div className="modal-content">
        <button onClick={this.setState({ message: ''})} className="close">+</button>
        <p>Sucess</p>
      </div>
    </div>
  );
  }

  update(property) {
    return e => {
      if(property === 'end_date'){
        this.setState({ [property]: e.currentTarget.value }, this.calculateDaysCost(e.currentTarget.value))
      }
      else{
        this.setState({ [property]: e.currentTarget.value })
      }
    }
   
  }
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="reservation-form">
      
        <form onSubmit={this.handleSubmit}>
        
            <div className="price">$ {this.state.cost} <label className="lblReservationForm"> per night </label> </div> 
         
          
          <div className="seperator"> </div>
         
          <label className="lblReservationForm">Check-in</label>
          <br />
            <input type="date"
            value={this.state.start_date}
            onChange={this.update("start_date")}
              />
          <br/>
          <label className="lblReservationForm">Checkout</label>
          <br />
          <input type="date" id="date1"
            value={this.state.end_date}
            onChange= {this.update("end_date")}
          />
          <br />
       
          <div className="lblReservationForm">Total  <label className="lblReservationForm total">{this.state.total} </label> </div>   
          <button >
            Reserve
          </button>
          {this.renderErrors()} 
        </form>
      </div>
    );
  }
}

export default withRouter(ReservationForm);