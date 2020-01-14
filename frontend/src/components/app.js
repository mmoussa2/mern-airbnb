import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import MainPage from './main/main_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PropertyShowContainer from './reservations/property_show_container'
import HostingForm from './hosting/hosting_container';
import About from './about/about';
import Profile from './profile/profile_container';
import Account from './account/account_container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/properties/create" component={HostingForm} />
      <Route path="/properties/:propertyId" component={PropertyShowContainer} />
      <Route path="/about" component={About} />
      <ProtectedRoute path="/profile" component={Profile} /> 
      <ProtectedRoute path="/account" component={Account} /> 
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;