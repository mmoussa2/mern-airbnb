import React , {Component} from 'react'

class Dialog extends Component{
  render(){
    return (
      <div className="bg-modal" id="btnClose">
        <div className="modal-content">
          <button className="close">+</button>
          <p>Sucess</p>
        </div>
      </div>
    );
  }
}

export default Dialog;
