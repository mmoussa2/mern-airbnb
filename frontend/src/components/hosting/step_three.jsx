import React from 'react';

function StepThree(props) {
  if(props.currentStep === 3){
    return (
      <div className="step-three">
        <h2>Where's your place located?</h2>
        <h4>
          Guests will only get your exact address once they've booked a
          reservation.
        </h4>
        <form>
          <textarea
            type="text"
            placeholder="e.g Seattle"
            onChange={props.handleChange("location")}
            maxLength="500"
            className="text-box"
          />
        </form>
      </div>
    );
  }
  else{
    return null
  }
}

export default StepThree;