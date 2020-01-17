import React, { useState } from "react";

function StepSix(props) {
  const [button, setButton] = useState(false);

  function uploadButton() {
    if (button){
      return(
        <button className="next-button" onClick={props.handleImage}>upload</button>
      )
    } else {
      return(
        <button className="grey-button">upload</button>
      )
    }
  }

  if (props.currentStep === 6) {
    return (
      <div className="step-six">
        <h2>Show off your place!</h2>
        <h5>Choose some pictures and then hit upload.</h5>
        <form className="upload">
          <input type="file" id="file" multiple onChange={() => setButton(true)}/>
          <img src={props.imageUrl} alt=""/>
          {uploadButton()}
        </form>
      </div>
    );
  } else {
    return null;
  }
}

export default StepSix;
