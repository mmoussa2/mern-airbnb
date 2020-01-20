import React from 'react';

function StepOne(props) {
  if(props.currentStep === 1){
    return (
      <div className="step-one">
        <h2>What kind of place are you listing?</h2>
        <h5>First, let's narrow things down</h5>
        <form onChange={props.handleChange("type")} className="hosting-radio-form" required>
          <div className="hosting-radio-button">
            <input type="radio" name="b" value="Apartment" id="b1"/>
            <label htmlFor="b1">Apartment</label>
          </div>
          <div className="hosting-radio-button">
            <input type="radio" name="b" value="House" id="b2"/>
            <label htmlFor="b2">House</label>
          </div>
          <div className="hosting-radio-button">
            <input type="radio" name="b" value="Secondary" id="b3"/>
            <label htmlFor="b3">Secondary unit</label>
          </div>
          <div className="hosting-radio-button">
            <input type="radio" name="b" value="Unique" id="b4"/>
            <label htmlFor="b4">Unique space</label>
          </div>
          <div className="hosting-radio-button">
            <input type="radio" name="b" value="BnB" id="b5"/>
            <label htmlFor="b5">Bed and breakfast</label>
          </div>
          <div className="hosting-radio-button">
            <input type="radio" name="b" value="Hotel" id="b6"/>
            <label htmlFor="b6">Boutique hotel</label>
          </div>
        </form>
      </div>
    );
  }
  else {
    return null
  }
}

export default StepOne;