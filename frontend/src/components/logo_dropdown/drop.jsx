import React from 'react';
import { Link } from "react-router-dom";
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import './drop.css';

function Dropdown(props) {
  return(
    <div className="dropdown">
      <Link to="/">Home</Link>
      <Link to="/messages">Messages</Link>
      <Link to="/properties/create">Host</Link>
      <Link to="/" onClick={props.logout}>Log out</Link>
    </div>
  )
}

const mapState = state => ({

})

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(Dropdown)