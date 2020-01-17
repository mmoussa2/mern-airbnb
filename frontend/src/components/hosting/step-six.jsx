import React from "react";

function StepSix(props) {
  if (props.currentStep === 6) {
    return (
      <div>
        <form className="upload">
          <input className="upload-button" type="file" id="file" />
          <button className="upload-button" onClick={props.handleImage}>upload</button>
        </form>
      </div>
    );
  } else {
    return null;
  }
}

export default StepSix;
