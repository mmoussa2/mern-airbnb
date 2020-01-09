import React from 'react'
import Logo from '../../assets/logo';
import Drop from './drop';
import './drop.css';

class LogoDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropped: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }


  drop() {
    if (this.state.dropped){
      return <Drop />
    }
  }

  handleClick() {
    let val = this.state.dropped;
    this.setState({"dropped": !val})
  }

  render() {
    return(
      <div>
        <div className="logo-button">
          <button 
            onClick={this.handleClick}
            className="logo-button"> 
          </button>
          <Logo />
        </div>
        {this.drop()}
      </div>
    )
  }
}

export default LogoDrop;