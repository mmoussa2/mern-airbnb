import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import  '../modal/modal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

  }
};

function ExampleApp3(props) {

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  
    { (Object.values(props.errors).length === 0) ? subtitle.style.color = '#009A00' : subtitle.style.color = '#f00' }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const renderErrors = ()=> {
    if (!props.errors) return [];
    return (
      <ul>
        {Object.keys(props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }


  return (
    <div >
      <button onClick={openModal}>Submit</button>
      <Modal className="modal-background"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="form-modal">

          <h2 ref={_subtitle => (subtitle = _subtitle)} >
            {(Object.values(props.errors).length === 0) ? "Success" : "Error"}
          </h2>
          <button  onClick={closeModal}>close</button >
          <div >
            {(Object.values(props.errors).length === 0) ? <p>{"Thank you"}</p> : renderErrors()}
          </div>

      </div >

    
      </Modal>
    </div>
  );
}

export default ExampleApp3

