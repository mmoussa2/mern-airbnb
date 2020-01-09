import React from 'react';

function StepFive(props) {
  if(props.currentStep === 5){
    return (
      <div className="step-five">
        <h2>What spaces can guests use?</h2>
        <h5>
          Include common areas, but don't add spaces that aren't on your
          property.
        </h5>
        <form className="hosting-radio-form">
          <div className="hosting-radio-button">
            <input type="checkbox" id="b1" onChange={() => props.handleSpaces("kitchen")}/>
            <label htmlFor="b1">Kitchen</label>
          </div>

          <div className="hosting-radio-button">
            <input type="checkbox" id="b2" onChange={() => props.handleSpaces("washer")}/>
            <label htmlFor="b2">Washer</label>
          </div>

          <div className="hosting-radio-button">
            <input type="checkbox" id="b3" onChange={() => props.handleSpaces("dryer")}/>
            <label htmlFor="b3">Dryer</label>
          </div>

          <div className="hosting-radio-button">
            <input type="checkbox" id="b4" onChange={() => props.handleSpaces("parking")}/>
            <label htmlFor="b4">Parking</label>
          </div>

          <div className="hosting-radio-button">
            <input type="checkbox" id="b5" onChange={() => props.handleSpaces("gym")}/>
            <label htmlFor="b5">Gym</label>
          </div>

          <div className="hosting-radio-button">
            <input type="checkbox" id="b6" onChange={() => props.handleSpaces("pool")}/>
            <label htmlFor="b6">Pool</label>
          </div>

          <div className="hosting-radio-button">
            <input type="checkbox" id="b7" onChange={() => props.handleSpaces("hottub")}/>
            <label htmlFor="b7">Hot tub</label>
          </div>
        </form>
      </div>
    );
  }
  else{
    return null
  }
}

export default StepFive;