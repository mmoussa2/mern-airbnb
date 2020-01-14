import React from 'react';

import Home from '../home/home_container';
import Logo from '../logo_dropdown/logo';

import './main.css'

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <header>
          <Logo />
          <h1>EndorBnB</h1>
          <div className="space"></div>
        </header>
        <Home />
      </div>
    );
  }
}

export default MainPage;