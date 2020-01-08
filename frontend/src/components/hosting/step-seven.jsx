import React from 'react';

function StepSeven(props) {
  if(props.currentStep === 7){
    return(
      <div className="step-seven">
        <h2>Describe your place to guests</h2>
        <h4>Write a quick summary of your place. You can highlight what's special about your space, the neighborhood, and how you'll interact with guests.</h4>
        <form>
          <textarea 
            type="text" 
            placeholder="description" 
            onChange={props.handleChange('description')}
            maxLength="500"
            className="text-box"
          />
        </form>  
      </div>
    )
  }
  else{
    return null
  }
}

export default StepSeven;