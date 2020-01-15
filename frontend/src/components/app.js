import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import MainPage from './main/main_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PropertyShowContainer from './reservations/property_show_container'
import MessagesContainer from './message/messages_container'
import ConversationContainer from './message/conversation_container'
import HostingForm from './hosting/hosting_container';
import Logo from "./logo_dropdown/logo";

const App = () => (
  <div>
    <header>
      <Logo />
      <h1>EndorBnB</h1>
      <div className="space"></div>
    </header>
    <Switch>
      <ProtectedRoute path="/properties/create" component={HostingForm} />
      <Route path="/properties/:propertyId" component={PropertyShowContainer} />
      <ProtectedRoute exact path="/messages" component={MessagesContainer} />
      <ProtectedRoute exact path="/messages/*" component={ConversationContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;