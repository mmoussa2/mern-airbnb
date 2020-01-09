import React from 'react';
import Logo from '../../assets/logo';
import { Link } from 'react-router-dom';


function TopBar(){
  return (
    <header className="hosting-top-bar">
      <Logo />
      <h1>EndorBnB</h1>
      <Link to="/">Exit</Link>
    </header>
  );
}

export default TopBar