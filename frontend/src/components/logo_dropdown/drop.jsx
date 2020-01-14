import React from 'react';
import { Link } from "react-router-dom";
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import './drop.css';

class Dropdown extends React.Component {
  logout() {
    this.props.logout()
  }

  render() {
    return(
      <div className="dropdown">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/account">Account</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/dash">Dashboard</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/properties/create">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/" onClick={logout()}>Log out</Link>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(null, mapDispatch)(Dropdown)