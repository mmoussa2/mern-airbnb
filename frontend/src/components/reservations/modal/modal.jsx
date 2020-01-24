import React from 'react';
// import Modal from 'react-modal';
import '../modal/modal.css';

class Modal extends React.Component{
  constructor(props){
    super(props);
     this.renderErrors = this.renderErrors.bind(this);
  }
  
    renderErrors(){
    // if (this.props.errors.length === 0){
    //   return [];
    // }
     return (
      <ul className="errorsRender">
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }
  onClose = (e) =>{
    this.props.onClose && this.props.onClose(e);
  }
  render(){
    if(!this.props.show) {
      return null;
    }
    return(
      <div className="modal">
        <div className="modal-content">
          {this.props.otherMsg}
         { this.props.errors.length === 0 ? <div className="done">{"Thank you"}</div> :this.renderErrors()}
          <div className="model-footer">
            <button onClick={(e) => { this.onClose(e) }}>Close</button>
          </div>
        </div>
      </div>
    );

    }
}

export default Modal;
