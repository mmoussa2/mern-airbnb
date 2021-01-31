import React from 'react';
import Modal from 'react-modal'; 
import  '../modal/modal.css';


// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   }
// };

function ExampleApp3(props) {

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00' 
  }

  function closeModal() {
    setIsOpen(false);
  }

  const renderErrors = ()=> {
    if (props.errors.length === 0) return [];
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
      
      <Modal className="modal"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //  style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="modal-content">
       
          <button  onClick={closeModal}>close</button >
          <div >
            <h1 ref={_subtitle => (subtitle = _subtitle)}  >
              {props.errors ? "Success" : "Error"}
            </h1>
            {props.errors ? this.renderErrors() :<p>{"Thank you"}</p>}
          </div>
      </div >
      </Modal>
    </div>
  );
}

export default ExampleApp3

