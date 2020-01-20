import React from "react";
import axios from "axios";
import StepZero from "./step_zero";
import StepOne from "./step_one";
import StepTwo from "./step_two";
import StepThree from "./step_three";
import StepFour from "./step_four";
import StepFive from "./step_five";
import StepSix from "./step-six";
import StepSeven from "./step-seven";
import StepEight from "./step_eight";
import BotBar from "./bot_bar";
import "./hosting.css";

class Hosting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner_id: this.props.currentUser.id,
      currentStep: 0,
      title: "",
      description: "",
      price: 0,
      type: "",
      location: "",
      guests: 0,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      amenities: [],
      spaces: [],
      imageUrl: "",
      imageUrls: [],
    };
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

  handleChange(value) {
    return e => this.setState({ [value]: e.target.value });
  }

  handleGuests(type) {
    this.setState(prev => {
      if (prev.guests === 0) {
        return { guests: type === "sub" ? prev.guests : prev.guests + 1 };
      } else {
        return { guests: type === "sub" ? prev.guests - 1 : prev.guests + 1 };
      }
    });
  }

  handleBeds(type) {
    this.setState(prev => {
      if (prev.beds === 0) {
        return { beds: type === "sub" ? prev.beds : prev.beds + 1 };
      } else {
        return { beds: type === "sub" ? prev.beds - 1 : prev.beds + 1 };
      }
    });
  }

  handleBathrooms(type) {
    this.setState(prev => {
      if (prev.bathrooms === 0) {
        return { bathrooms: type === "sub" ? prev.bathrooms : prev.bathrooms + 0.5 };
      } else {
        return { bathrooms: type === "sub" ? prev.bathrooms - 0.5 : prev.bathrooms + 0.5 };
      }
    });
  }

  handleAmenities(type) {
    let newAmenities = this.state.amenities;
    if (newAmenities.includes(type)) {
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

  handleSubmit() {
    this.props
      .createProperty(this.state)
      .then(() => this.props.history.push("/"));
  }

  handleImage() {
    const files = document.getElementById("file").files;
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      const formData = new FormData();
      reader.readAsDataURL(file);
      formData.append("image", file);
      axios
        .post("/api/images/image-upload", formData)
        .then(res => {
          let newImages = this.state.imageUrls;
          newImages.push(res.data.imageUrl);
          this.setState({ imageUrls: newImages })})
        .catch(err => console.log(err));
    })
  }

  prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 0 ? 0 : currentStep - 1;
    this.setState({ currentStep: currentStep });
    this.progress();
  }

  next() {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 8 ? 8 : currentStep + 1;
    this.setState({ currentStep: currentStep })
    this.progress()
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
    console.log(this.state)
    return (
      <div className="hosting">
        <div id="progress-bar"></div>
        <div className="hosting-content">
          <StepZero
            currentStep={this.state.currentStep}
            name={this.props.currentUser.name}
          />
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
            imageUrls={this.state.imageUrls}
          />
          <StepSeven
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
          />
          <StepEight state={this.state} />
        </div>
        <BotBar
          state={this.state}
          prev={this.prev}
          next={this.next}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Hosting;
