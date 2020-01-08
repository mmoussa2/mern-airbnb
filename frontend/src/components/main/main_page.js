import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropertyShowContainer from '../reservations/property_show_container'
import PropertyShow from '../reservations/property_show'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>A Twitter Clone</h1>
        {/* <Route path="/reservations/propertyId" component={PropertyShowContainer} /> */}
        <PropertyShowContainer />
        <PropertyShow/>
        <footer>
          Copyright &copy; 2019 Chirper
        </footer>
      </div>
    );
  }
}

export default MainPage;