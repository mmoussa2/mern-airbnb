import React from 'react';

import Home from '../home/home_container';
import Logo from '../logo_dropdown/logo';

import './main.css'
import PropertyShowContainer from "../reservations/property_show_container";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <header>
          <Logo />
          <h1>EndorBnB</h1>
          <div className="space"></div>
        </header>
<<<<<<< HEAD
        <Route exact path="/" component={Home} />
        <Route exact path="/messages" component={MessagesContainer} />
        <Route exact path="/messages/*" component={ConversationContainer} />
        <Route exact path="/properties/:propertyId" component={PropertyShowContainer} />
=======
        <Home />
>>>>>>> e052c85147b90f3df671d59e34cc885c7195132c
      </div>
    );
  }
}

export default MainPage;