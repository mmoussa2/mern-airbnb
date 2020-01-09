import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HostingForm from './hosting/hosting_container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/properties" component={HostingForm} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;