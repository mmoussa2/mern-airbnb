import React from 'react';

function StepFour(props) {
  if(props.currentStep === 4){
    return(
      <div className="step-four">
        <h3>What features do you offer?</h3>
        <h4>You can add more after you publish.</h4>
        <form className="features-form">
          <input type="checkbox" onChange={props.handleChange("amenity1")}/> Rope Ladder
          <input type="checkbox" onChange={props.handleChange("amenity2")}/> Firefly Lamps
          <input type="checkbox" onChange={props.handleChange("amenity3")}/> Ewok Chefs
        </form>
      </div>
    )
  }
  else{
    return null
  }
}


  // render() {
  //   return (
  //     <div>
  //       <h4>What amenities do you offer?</h4>
  //       <h5>
  //         These are just the amenities guests usually expect, but you can add
  //         even more after you publish
  //       </h5>
  //       <form className="amenities">
  //         <input type="checkbox" value="1" /> Essentials
  //         <h6>Towels,bed sheets, soap, toilet paper, and pillows</h6>
  //         <input type="checkbox" value="2" /> Air conditioning
  //         <input type="checkbox" value="3" /> Heat
  //         <input type="checkbox" value="4" /> Hair dryer
  //         <input type="checkbox" value="5" /> Closet/drawers
  //         <input type="checkbox" value="6" /> Iron
  //         <input type="checkbox" value="7" /> TV
  //         <input type="checkbox" value="8" /> Fireplace
  //         <input type="checkbox" value="9" /> Private Entrance
  //         <input type="checkbox" value="10" /> Shampoo
  //         <input type="checkbox" value="11" /> Wifi
  //         <input type="checkbox" value="12" /> Desk/workspace
  //         <input type="checkbox" value="13" /> Breakfast, coffee, tea
  //         <h5>Safety amenities</h5>
  //         <input type="checkbox" value="14" /> Fire extinguisher
  //         <input type="checkbox" value="15" /> Carbon monoxide detector
  //         <h6>
  //           Check your local laws, which may require a working carbon monoxide
  //           detector in every room
  //         </h6>
  //         <input type="checkbox" value="16" /> Smoke detector
  //         <h6>
  //           Check your local laws, which may require a working smoke
  //           detector in every room
  //         </h6>
  //         <input type="checkbox" value="17"/> First aid kit
  //       </form>
  //     </div>
  //   );
  // }

export default StepFour;