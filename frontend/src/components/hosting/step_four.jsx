import React from 'react';

function StepFour(props) {
  if(props.currentStep === 4){
    return(
      <div className="step-four">
        <h3>What features do you offer?</h3>
        <h4>You can add more after you publish.</h4>
        <form className="features-form">
          <input type="checkbox" onChange={props.handleChange("amenity1")}/> Rope Ladder
          <input type="checkbox" onChange={props.handleChange("amenity2")}/> Firefly Lamps
          <input type="checkbox" onChange={props.handleChange("amenity3")}/> Ewok Chefs
        </form>
      </div>
    )
  }
  else{
    return null
  }
}

export default StepFour;