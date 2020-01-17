import React from 'react';
import NavBar from '../nav/navbar_container'
import { Route } from 'react-router-dom'
import { Link } from "react-router-dom";
import './profile.css'


class Profile extends React.Component {
  render() {
    return(
      <div className="profile">
        <header>
          <Route path="/" component={NavBar} />
        </header>
        <div className="info-card1">
          <h1>Hi, I'm {this.props.currentUser.name}</h1>
          <Link to="/profile">Edit profile</Link>
          <Link to="/profile">Reviews by you</Link>
        </div>
      </div>
    )
  }
}

export default Profile