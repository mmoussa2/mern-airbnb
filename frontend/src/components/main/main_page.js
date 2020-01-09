import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropertyShowContainer from '../reservations/property_show_container'
import PropertyShow from '../reservations/property_show'

class MainPage extends React.Component {

  render() {
    return (
      <div>
      
        {/* <Route path="/reservations/propertyId" component={PropertyShowContainer} /> */}
       
        <h1>An AirBnB Clone</h1>
        <footer>
          Copyright &copy; 2020 EndorBnB
        </footer>
      </div>
    );
  }
}

export default MainPage;