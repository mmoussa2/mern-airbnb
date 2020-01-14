import React from 'react';
import { Link } from "react-router-dom";

import Nav from '../nav/navbar_container';
import './home.css';

class Home extends React.Component {
  render() {
    if (this.props.isAuthenticated){
      return(
        <div className="center">
          <h2>Welcome, {this.props.currentUser.name}!</h2>
          <div className="divider"></div>
          <Nav />
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