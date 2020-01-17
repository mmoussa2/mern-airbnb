import React from 'react';
import { Route } from "react-router-dom";
import Nav from '../nav/navbar_container';
import './home.css';

class Home extends React.Component {
  render() {
    if (this.props.isAuthenticated){
      return(
        <div className="center">
          <h2>Welcome, {this.props.currentUser.name}!</h2>
          <div className="divider"></div>
          <Route path="/" component={Nav} />
        </div>
      )
    }
    else{
      return (
        <div className="center">
          <Route path="/" component={Nav} />
        </div>
      );
    }
  }
}

export default Home;