import React from 'react';
import axios from 'axios';
import StepOne from './step_one';
import StepTwo from './step_two';
import StepThree from './step_three';
import StepFour from './step_four';
import StepFive from './step_five';
import StepSix from './step-six';
import StepSeven from './step-seven';
import StepEight from './step_eight';
import TopBar from './top_bar';
import './hosting.css';

class Hosting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner_id: this.props.currentUser.id,
      currentStep: 6,
      title: "",
      description: "",
      price: 100,
      type: "apartment",
      location: "",
      guests: 0,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      amenities: [],
      spaces: [],
      imageUrl: '',
    };
    this.stepZero = this.stepZero.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGuests = this.handleGuests.bind(this);
    this.handleBeds = this.handleBeds.bind(this);
    this.handleBathrooms = this.handleBathrooms.bind(this);
    this.handleAmenities = this.handleAmenities.bind(this);
    this.handleSpaces = this.handleSpaces.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  stepZero() {
    if (this.state.currentStep === 0) {
      return (
        <h2>
          Hi, {this.props.currentUser.name}! Let's get started listing your
          space.
        </h2>
      );
    } else {
      return null;
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

  handleAmenities(type) {
    let newAmenities = this.state.amenities;
 
    if(newAmenities.includes(type)){
      const i = newAmenities.indexOf(type);
      delete newAmenities[i];
      newAmenities = newAmenities.filter(i => i !== null);
      this.setState({ amenities: newAmenities });
    } else {
      newAmenities.push(type);
      this.setState({ amenities: newAmenities });
    }
  }

  handleSpaces(type) {
    let newSpaces = this.state.spaces;
    if (newSpaces.includes(type)) {
      const i = newSpaces.indexOf(type);
      delete newSpaces[i];
      newSpaces = newSpaces.filter(i => i !== null);
      this.setState({ spaces: newSpaces });
    } else {
      newSpaces.push(type);
      this.setState({ spaces: newSpaces });
    }
  }

  handleSubmit(e) {
    this.props.createProperty(this.state).then(() => this.props.history.push('/'));
  }

  handleImage(e) {
    e.preventDefault();
    const reader = new FileReader();

    

    reader.onload = function(){
      let url = reader.result;

    }

    reader.readAsDataURL(document.getElementById("file").files[0]);

  }

  prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 0 ? 0 : currentStep - 1;
    this.setState({ currentStep: currentStep });
    this.progress();
  }

  next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 8 ? 8 : currentStep + 1;
    this.setState({ currentStep: currentStep });
    this.progress();
  }

  backButton() {
    if (this.state.currentStep !== 0) {
      return (
        <button className="back-button" onClick={this.prev}>
          Back
        </button>
      );
    }
  }

  nextButton() {
    if (this.state.currentStep < 8) {
      return (
        <button className="next-button" onClick={this.next}>
          Next
        </button>
      );
    } else {
      return (
        <button className="next-button" onClick={this.handleSubmit}>
          Finish
        </button>
      );
    }
  }

  move() {
    let val = 2 + this.state.currentStep * 14;
    return `${val}%`;
  }

  progress() {
    let elem = document.getElementById("progress-bar");
    let width = this.move();
   
    elem.style.width = width;
  }

  render() {
   
    return (
      <div className="hosting">
        <div id="progress-bar"></div>
        <TopBar />
        <div className="hosting-content">
          {this.stepZero()}
          <StepOne
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
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
            handleAmenities={this.handleAmenities}
          />
          <StepFive
            currentStep={this.state.currentStep}
            handleSpaces={this.handleSpaces}
          />
          <StepSix
            currentStep={this.state.currentStep}
            handleImage={this.handleImage}
          />
          <StepSeven
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
          />
          <StepEight state={this.state} />
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