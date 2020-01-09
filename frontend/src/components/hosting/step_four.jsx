import React from 'react';

function StepFour(props) {
  if(props.currentStep === 4){
    return(
      <div className="step-four">
        <h2>What features do you offer?</h2>
        <h5>You can add more after you publish.</h5>
        <form className="hosting-radio-form">
          <div className="hosting-radio-button">
            <input type="checkbox" id="b1" onChange={() => props.handleAmenities("Rope ladder")}/>
            <label htmlFor="b1">Rope ladder</label>
          </div>
          <div className="hosting-radio-button">
            <input type="checkbox" id="b2" onChange={() => props.handleAmenities("Firefly lamps")}/>
            <label htmlFor="b2">Firefly lamps</label>
          </div>
          <div className="hosting-radio-button">
            <input type="checkbox" id="b3" onChange={() => props.handleAmenities("Ewok chefs")}/>
            <label htmlFor="b3">Ewok chefs</label>
          </div>
        </form>
      </div>
    )
  }
  else{
    return null
  }
}

export default StepFour;