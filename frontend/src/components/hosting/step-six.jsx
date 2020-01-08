import React from 'react';

class StepSix extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    if(this.props.currentStep === 9){
      return(
        <div>
          <h2>Add photos to your listing</h2>
          <h4>Photos help guests imagine staying in your place. You can start with one and add more after you publish.</h4>

        </div>
      )
    }
    else{
      return(null)
    }
  }
}

export default StepSix;