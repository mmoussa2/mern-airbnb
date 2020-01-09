import React from 'react';
import NavBar from '../nav/navbar_container'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <h1>An AirBnB Clone</h1>
        <footer>
          Copyright &copy; 2020 EndorBnB
        </footer>
      </div>
    );
  }
}

export default MainPage;