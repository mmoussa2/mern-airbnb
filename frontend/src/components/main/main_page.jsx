import React from 'react';
import NavBar from '../nav/navbar_container'
import {Route} from 'react-router-dom'
import Logo from '../logo_dropdown/logo';
import './main.css'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Logo />
          <Route path="/" component={NavBar} />
        </header>
        <footer>
          Copyright &copy; 2020 EndorBnB
          An AirBnB Clone
        </footer>
      </div>
    );
  }
}

export default MainPage;