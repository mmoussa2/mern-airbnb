import React, { useState } from 'react';
import Modal from '../modals/modal';

function BotBar(props) {

  const [show, setShow] = useState(false);

  function greyButton() {
    return (
      <div>
        <button className="grey-button" onClick={() => setShow(true)}>
          Next
          </button>
        <Modal message={"Please fill out the required fields!"} show={show} setShow={setShow} />
      </div>
    )
  }

  function backButton() {
    if (props.state.currentStep !== 0) {
      return (
        <button className="back-button" onClick={props.prev}>
          Back
        </button>
      )
    }
  }

  function validateButton() {
    const { state } = props;
    switch (state.currentStep) {
      case 1:
        if (state.type === ''){
          return greyButton()
        }else {
          return nextButton()
        }
      case 2: 
        if (state.guests === 0 || state.beds === 0 || state.bathrooms === 0){
          return greyButton()
        }else {
          return nextButton()
        }
      case 3:
        if (state.location === '') {
          return greyButton()
        } else {
          return nextButton()
        }
      case 6:
        if (state.imageUrls.length === 0) {
          return greyButton()
        } else {
          return nextButton()
        }
      case 7:
        if (state.title === '' || state.description === '' || state.price === 0) {
          return greyButton()
        } else {
          return nextButton()
        }
      default:
        return nextButton()
    }
  }

  function nextButton() {
    if (props.state.currentStep < 8) {
      return (
        <button className="next-button" onClick={props.next}>
          Next
        </button>
      );
    } else {
      return (
        <button className="next-button" onClick={props.handleSubmit}>
          Finish
          <Modal message={"Success!"} show={show} setShow={setShow} />
        </button>
      );
    }
  }

  return (
    <div className="hosting-bot-bar">
      {backButton()}
      <div className="spacing"></div>
      {validateButton()}
    </div>
  )
}

export default BotBar;