import React from 'react';

function StepSeven(props) {
  if(props.currentStep === 7){
    return (
      <div className="step-seven">
        <div>
          <h2>Name your place</h2>
          <h4>
            Attract guests with a listing title that highlights what makes your
            place special.
          </h4>
          <form>
            <textarea
              type="text"
              placeholder="title"
              onChange={props.handleChange("title")}
              maxLength="50"
              className="text-box"
            />
          </form>
        </div>

        <section className="spacing"></section>

        <div>
          <h2>Describe your place to guests</h2>
          <h4>
            Write a quick summary of your place. You can highlight what's
            special about your space, the neighborhood, and how you'll interact
            with guests.
          </h4>
          <form>
            <textarea
              type="text"
              placeholder="description"
              onChange={props.handleChange("description")}
              maxLength="500"
              className="text-box"
            />
          </form>
        </div>

        <section className="spacing"></section>

        <div>
          <h2>Price your space</h2>
          <h4>Your price will be how much guests pay per night.</h4>
          <form>
            <textarea
              type="text"
              placeholder="price"
              onChange={props.handleChange("price")}
              maxLength="10"
              className="text-box"
            />
          </form>
        </div>
      </div>
    );
  }
  else{
    return null
  }
}

export default StepSeven;