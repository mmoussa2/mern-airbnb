import React from 'react';

import Home from '../home/home_container';

import './main.css'
import PropertyShowContainer from "../reservations/property_show_container";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        
        <Home />
      </div>
    );
  }
}

export default MainPage;