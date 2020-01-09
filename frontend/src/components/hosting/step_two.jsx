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

        <section className="plus-minus-form">
          <div className="label">Guests</div>
          <button
            className="increment-button"
            onClick={() => props.handleGuests("sub")}
          >
            {" "}
            -{" "}
          </button>
          <div>{props.guests}</div>
          <button
            className="increment-button"
            onClick={() => props.handleGuests("add")}
          >
            {" "}
            +{" "}
          </button>
        </section>

        <div className="configure-bedrooms">
          <h5>How many bedrooms can guests use?</h5>
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

        <section className="plus-minus-form">
          <div className="label">Beds</div>
          <button
            className="increment-button"
            onClick={() => props.handleBeds("sub")}
          >
            {" "}
            -{" "}
          </button>
          <div>{props.beds}</div>
          <button
            className="increment-button"
            onClick={() => props.handleBeds("add")}
          >
            {" "}
            +{" "}
          </button>
        </section>

        <section className="plus-minus-form">
          <div className="label">Bathrooms</div>
          <button
            className="increment-button"
            onClick={() => props.handleBathrooms("sub")}
          >
            {" "}
            -{" "}
          </button>
          <div>{props.bathrooms}</div>
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