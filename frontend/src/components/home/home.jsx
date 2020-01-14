import React from 'react';
import { Link } from "react-router-dom";

import './home.css';

class Home extends React.Component {
  render() {
    console.log(this.props)
    if (this.props.isAuthenticated){
      return(
        <div>
          <h2>Welcome, {this.props.currentUser.name}!</h2>
          <div>
            Top-rated experiences
          </div>
        </div>
      )
    }
    else{
      return(
        <div className="center">
          <div className="fake-button">
            <Link to="/login">Log in</Link>
          </div>
          <div className="fake-button">
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      )
    }
  }
}

export default Home;