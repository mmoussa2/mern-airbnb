import React from 'react';

function StepTwo(props) {
  if(props.currentStep === 2){
    return (
      <div className="step-two">
        <h2>How many guests can your place accommodate?</h2>
        <h4>
          Check that you have enough beds to accommodate all your guests
          comfortably.
        </h4>

        <section className="configure-guests, plus-minus-form" >
          Guests
          <button
            className="increment-button"
            onClick={() => props.handleGuests("sub")}
          >
            {" "}
            -{" "}
          </button>
          {props.guests}
          <button
            className="increment-button"
            onClick={() => props.handleGuests("add")}
          >
            {" "}
            +{" "}
          </button>
        </section>

        <div className="configure-bedrooms">
          How many bedrooms can guests use?
          <select defaultValue="0" onChange={props.handleChange("bedrooms")}>
            <option value="0">Studio</option>
            <option value="1">1 bedroom</option>
            <option value="2">2 bedrooms</option>
            <option value="3">3 bedrooms</option>
            <option value="4">4 bedrooms</option>
            <option value="5">5 bedrooms</option>
            <option value="6">6 bedrooms</option>
            <option value="7">7 bedrooms</option>
            <option value="8">8 bedrooms</option>
            <option value="9">9 bedrooms</option>
            <option value="10">10 bedrooms</option>
          </select>
        </div>

        <section className="configure-beds, plus-minus-form">
          Beds
          <button
            className="increment-button"
            onClick={() => props.handleBeds("sub")}
          >
            {" "}
            -{" "}
          </button>
          {props.beds}
          <button
            className="increment-button"
            onClick={() => props.handleBeds("add")}
          >
            {" "}
            +{" "}
          </button>
        </section>

        <section className="configure-bathrooms, plus-minus-form">
          Bathrooms
          <button
            className="increment-button"
            onClick={() => props.handleBathrooms("sub")}
          >
            {" "}
            -{" "}
          </button>
          {props.bathrooms}
          <button
            className="increment-button"
            onClick={() => props.handleBathrooms("add")}
          >
            {" "}
            +{" "}
          </button>
        </section>
      </div>
    );
  }
  else {
    return null
  }
}

export default StepTwo;