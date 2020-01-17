import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PropertyShowContainer from './reservations/property_show_container'
import MessagesContainer from './message/messages_container'
import ConversationContainer from './message/conversation_container'
import HostingForm from './hosting/hosting_container';
import TopBar from './top_bar/top_bar';
import Home from './home/home_container';

const App = () => (
  <div>
    <TopBar />
    <Switch>
      <ProtectedRoute path="/properties/create" component={HostingForm} />
      <Route path="/properties/:propertyId" component={PropertyShowContainer} />
      <ProtectedRoute exact path="/messages" component={MessagesContainer} />
      <ProtectedRoute exact path="/messages/*" component={ConversationContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;