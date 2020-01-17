import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from '../../actions/session_actions';
import "./menu.css";

function MenuOptions(props) {
  if (props.isAuthenticated){
    return(
      <div className="menu-options">
        <Link to='/'>Home</Link>
        <Link to='/messages'>Messages</Link>
        <Link to='/properties/create'>Host</Link>
        <Link to='/' onClick={props.logout}>Log out</Link>
      </div>
    )
  }
  else{
    return(
      <div className="menu-options">
        <Link to='/'>Home</Link>
        <Link to='/messages'>Messages</Link>
        <Link to='/properties/create'>Host</Link>
      </div>
    )
  }
}

const mapState = state => ({
  isAuthenticated: state.session.isAuthenticated
})

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(MenuOptions);