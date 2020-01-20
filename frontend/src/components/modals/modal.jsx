import React from 'react';
import './modal.css';

// takes in message(string), and show(boolean) prop

class Modal extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidUpdate() {
    if (this.props.show) {
      document.addEventListener('click', this.handleClick, false)
    }
    else {
      document.removeEventListener('click', this.handleClick, false)
    }
  }

  handleClick() {
    this.props.setShow(false)
  }

  show() {
    if (this.props.show){
      return({
        display: "flex"
      })
    } else {
      return({
        display: "none"
      })
    }
  }

  render() {
    return(
      <div className="modal" style={this.show()} onBlur={this.handleClick}>
        <div className="modal-content">
          <h1>{this.props.message}</h1>
          <button className="next-button">Okay</button>
        </div>
      </div>
    )
  }
}

export default Modal;