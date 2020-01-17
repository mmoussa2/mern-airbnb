import React from 'react';
import { Link } from "react-router-dom";
import Menu from '../menu/menu';
import Logo from '../../assets/logo';
import './top_bar.css';

function TopBar(props) {
  return (
    <div className="top-bar">
      <Menu className="top-bar-element" />
      <h1 className="top-bar-element">EndorBnB</h1>
      <Link className="top-bar-element" to="/">
        <Logo />
      </Link>
    </div>
  );
}

export default TopBar;