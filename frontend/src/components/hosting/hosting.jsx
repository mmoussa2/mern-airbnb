import React from 'react';
import StepOne from './step_one';
import StepTwo from './step_two';
import StepThree from './step_three';
import StepFour from './step_four';
import StepFive from './step_five';
import StepSix from './step-six';
import StepSeven from './step-seven';
import StepEight from './step-eight';
import StepNine from './step-nine';
import './hosting.css';

class Hosting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 7,
      type: "apartment",
      location: "",
      guests: 0,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      amenity1: false,
      amenity2: false,
      amenity3: false,
      kitchen: false,
      washer: false,
      dryer: false,
      parking: false,
      gym: false,
      pool: false,
      hottub: false
    };
    this.stepZero = this.stepZero.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGuests = this.handleGuests.bind(this);
    this.handleBeds = this.handleBeds.bind(this);
    this.handleBathrooms = this.handleBathrooms.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  stepZero() {
    if(this.state.currentStep === 0){
      return (
        <h2>Hi, currentUser! Let's get started listing your space.</h2>
      );
    }
    else{
      return(null)
    }
  }

  handleChange(value) {
    return e => this.setState({ [value]: e.target.value });
  }

  handleGuests(type) {
    this.setState(prev => ({
      guests: type === "sub" ? prev.guests - 1 : prev.guests + 1
    }));
  }

  handleBeds(type) {
    this.setState(prev => ({
      beds: type === "sub" ? prev.beds - 1 : prev.beds + 1
    }));
  }

  handleBathrooms(type) {
    this.setState(prev => ({
      bathrooms: type === "sub" ? prev.bathrooms - 0.5 : prev.bathrooms + 0.5
    }));
  }

  handleSubmit() {
    
  }

  prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 0 ? 0 : currentStep - 1;
    this.setState({currentStep: currentStep});
  }

  next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 9 ? 9 : currentStep + 1;
    this.setState({currentStep: currentStep});
  }

  backButton() {
    if(this.state.currentStep !== 0){
      return(
        <button className="back-button" onClick={this.prev}>
          Back
        </button>
      )
    }
  }

  nextButton() {
    if(this.state.currentStep < 9){
      return(
        <button className="next-button" onClick={this.next}>
          Next
        </button>
      )
    }
    else{
      return(
        <button className="finish-button" onClick={this.handleSubmit}>
          Finish
        </button>
      )
    }
  }

  render() {
    return (
      <div className="hosting-startpage">
        <div className="hosting-top-bar"></div>
        <div className="hosting-content">
          {this.stepZero()}
          <StepOne
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            guests={this.state.guests}
            location={this.state.location}
            user={this.props.currentUser}
          />
          <StepTwo
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleGuests={this.handleGuests}
            handleBeds={this.handleBeds}
            handleBathrooms={this.handleBathrooms}
            guests={this.state.guests}
            bedrooms={this.state.bedrooms}
            beds={this.state.beds}
            bathrooms={this.state.bathrooms}
          />
          <StepThree
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            location={this.state.location}
          />
          <StepFour
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            amenity1={this.state.amenity1}
            amenity2={this.state.amenity2}
            amenity3={this.state.amenity3}
          />
          <StepFive
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            kitchen={this.state.kitchen}
            washer={this.state.washer}
            dryer={this.state.dryer}
            parking={this.state.parking}
            gym={this.state.gym}
            pool={this.state.pool}
            hottub={this.state.hottub}
          />
          <StepSix 
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
          />
          <StepSeven
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
          />
          <StepEight
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
          />
          <StepNine
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
          />
        </div>
        <div className="hosting-bot-bar">
          {this.backButton()}
          <div className="spacing"></div>
          {this.nextButton()}
        </div>
      </div>
    );
  }
}

export default Hosting;