import React from 'react';

function StepEight(props){
  if(props.currentStep === 8){
    return(
      <div>
        <h2>Name your place</h2>
        <h4>Attract guests with a listing title that highlights what makes your place special.</h4>
        <form>
          <textarea
            type="text"
            placeholder="title"
            onChange={props.handleChange('title')}
            maxLength="50"
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

export default StepEight;