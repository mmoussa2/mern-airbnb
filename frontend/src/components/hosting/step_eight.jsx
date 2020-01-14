import React from 'react';

function StepEight(props) {
  if (props.state.currentStep === 8){
    return(
      <div className="step-eight">
        <h2>Review your listing</h2>
        <h4>Is the information correct?</h4>
        <div className="divider"></div>
        <div>
          <h2>Title: {props.state.title}</h2>
          <h3>Description: {props.state.description}</h3>
          <h3>Price: {props.state.price}</h3>
          <h3>Address: {props.state.location}</h3>
          <h3>Guests: {props.state.guests}</h3>
          <h3>Bedrooms: {props.state.bedrooms}</h3>
          <h3>Beds: {props.state.beds}</h3>
          <h3>Bathrooms: {props.state.bathrooms}</h3>
        </div>
      </div>
    )
  }
  else{
    return null
  }
}

export default StepEight;