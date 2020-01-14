import React from 'react';

function StepSix(props) {
  if(props.currentStep === 6){
    return (
      <div>
        <form className="upload">
          <input 
            type="file" 
            id="file"
            className="upload-button"/>
          <button 
            onClick={props.handleImage}
            className="upload-button"
            >upload
          </button>
        </form>
      </div>
    );
  }
  else{
    return(null)
  }
}

export default StepSix;