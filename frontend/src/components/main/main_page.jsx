import React from 'react';
import NavBar from '../nav/navbar_container'
import Logo from '../../assets/logo'
import LogoDrop from '../logo_dropdown/logo'
import './main.css'

class MainPage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <header>
          <LogoDrop />
        </header>

        

        <footer>
          Copyright &copy; 2020 EndorBnB
        </footer>
      </div>
    );
  }
}

export default MainPage;