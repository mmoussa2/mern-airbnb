import React from 'react';
import { Link } from "react-router-dom";
import './drop.css';

function Dropdown(props) {
  return(
    <div className="dropdown">
      <Link to="/">Home</Link>
      <Link to="/">Profile</Link>
      <Link to="/">Account</Link>
      <Link to="/">Trips</Link>
      <Link to="/">Dashboard</Link>
      <Link to="/">Messages</Link>
      <Link to="/properties/create">Host</Link>
      <Link to="/about">About</Link>
      <Link to="/">Log out</Link>
    </div>
  )
}

export default Dropdown