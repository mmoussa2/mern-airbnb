import React from 'react';
import NavBar from '../nav/navbar_container'
import {Route} from 'react-router-dom'
import Logo from '../logo_dropdown/logo';
import Home from '../home/home_container';
import './main.css'

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <header>
          <Logo />
          <Route path="/" component={NavBar} />
        </header>
        <Home />
        <footer>
          Copyright &copy; 2020 EndorBnB
          An AirBnB Clone
        </footer>
      </div>
    );
  }
}

export default MainPage;