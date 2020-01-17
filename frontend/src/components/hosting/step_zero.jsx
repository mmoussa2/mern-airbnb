import React from 'react';

function StepZero(props) {
  if (props.currentStep === 0){
    return (
      <h2>
        Hi, {props.name}! Let's get started listing your
        space.
      </h2>
    )
  }
  else {
    return null
  }
}

export default StepZero;