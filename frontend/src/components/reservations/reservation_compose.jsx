import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactModal from '../reservations/modal/modal';


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
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState({ show: !this.state.show })
  }
  calculateDaysCost(endDate){
 
    if (endDate !== '' && this.state.start_date !== '') {
     
      var differenceDays = new Date(endDate).getTime() - new Date(this.state.start_date).getTime();
      differenceDays /=  (1000 * 60 * 60 * 24)
    
       var total = this.state.cost * differenceDays;
       this.setState({ total : total })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  
    //const propertyId = this.props.match.params.propertyId;
    const reservation = Object.assign({}, this.state);

    this.props.composeReservation(reservation).then((result)=>{
      this.clearData();
    }).catch((result)=>{
      console.log(result);
    });
  }

  clearData(){
    this.setState({
      start_date: '',
      end_date: '',
      total: this.props.cost,
      msg: ''
    })
      
  }


  checkDate(date) {
     var selectedDate = new Date(date);
     var now = new Date();

     if (selectedDate < now) {
      this.setState({msg:"Date must be in the future"});
      return false;
     }
    else {
       this.setState({ msg: ''});
       return true;
      }
  }

  update(property) {
    return e => {
      if(property === 'end_date'){
        if(this.checkDate(e.currentTarget.value)){
        this.setState({ [property]: e.currentTarget.value }, this.calculateDaysCost(e.currentTarget.value))
        }
      }
      else if (property === 'start_date') {
        if (this.checkDate(e.currentTarget.value)) {
         
            this.setState({ [property]: e.currentTarget.value })
          }
      }
      else{
        this.setState({ [property]: e.currentTarget.value })
      }
    
    }
   
  }
  renderErrors() {
    let errors = this.props.errors;
    if (typeof this.props.errors === "string") {
      errors = [errors];
    }
    return (
      <ul>
        {Object.keys(errors).map((error, i) => (
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
       

          <ReactModal
            show={this.state.show}
            onClose={this.showModal}
            errors={this.props.errors} 
            otherMsg= {this.state.msg}
            />  
           </form>

      
      </div>
    );
  }
}

export default withRouter(ReservationForm);