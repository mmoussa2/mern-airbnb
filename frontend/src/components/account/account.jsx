import React from 'react'
import NavBar from '../nav/navbar_container'
import { Route } from 'react-router-dom'
import { Link } from "react-router-dom";
import Logo from '../logo_dropdown/logo';

class Account extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Logo />
          <Route path="/" component={NavBar} />
        </header>
        <div>
          <h1>Account</h1>
          <h5>{this.props.currentUser.name},
            {this.props.currentUser.email}
            <Link to="profile">Go to profile</Link>
          </h5>
          <div>
            Personal info
          </div>
          <div>
            Login & security
          </div>
          <div>
            Payments & payouts
          </div>
          <div>
            Reservations
          </div>
          <div>
            Notifications
          </div>
          <div>
            Privacy & sharing
          </div>
          <div>
            Global preferences
          </div>
          <div>
            Travel for work
          </div>
          <div>
            Professional hosting tools
          </div>
        </div>
      </div>
    )
  }
}

export default Account;