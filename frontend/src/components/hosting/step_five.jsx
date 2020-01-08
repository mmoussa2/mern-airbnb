import React from 'react';

function StepFive(props) {
  if(props.currentStep === 5){
    return (
      <div className="step-five">
        <h3>What spaces can guests use?</h3>
        <h4>
          Include common areas, but don't add spaces that aren't on your
          property.
        </h4>
        <form>
          <input type="checkbox" onChange={props.handleChange("space1")}/> Kitchen
          <input type="checkbox" onChange={props.handleChange("space2")}/> Laundry - washer
          <input type="checkbox" onChange={props.handleChange("space3")}/> Laundry - dryer
          <input type="checkbox" onChange={props.handleChange("space4")}/> Parking
          <input type="checkbox" onChange={props.handleChange("space5")}/> Gym
          <input type="checkbox" onChange={props.handleChange("space6")}/> Pool
          <input type="checkbox" onChange={props.handleChange("space7")}/> Hot tub
        </form>
      </div>
    );
  }
  else{
    return null
  }
}

export default StepFive;