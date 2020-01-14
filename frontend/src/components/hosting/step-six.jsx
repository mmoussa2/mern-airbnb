import React from "react";

function StepSix(props) {
  if (props.currentStep === 6) {
    return (
      <div>
        <form>
          <input type="file" id="file" />
          <button onClick={props.handleImage}>upload</button>
        </form>
      </div>
    );
  } else {
    return null;
  }
}

export default StepSix;
