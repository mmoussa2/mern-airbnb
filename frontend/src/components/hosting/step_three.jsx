import React from 'react';
import GoogleMap from '../google_maps/google_places';

function StepThree(props) {
  if(props.currentStep === 3){
    return(
      <div className="step-three">
        <h3>Where's your place located?</h3>
        <h4>Guests will only get your exact address once they've booked a reservation.</h4>
        <GoogleMap />
      </div>
    )
  }
  else{
    return null
  }
}

export default StepThree;