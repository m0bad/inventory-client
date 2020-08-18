import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NotFound } from '../views/NotFound';
import { NonAuthRoutes } from '../types/routes';
import { Login } from '../views/Login';
import { Register } from '../views/Register';

export const RouterWrapper: React.FC = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path={NonAuthRoutes.login} component={Login} />
      <Route exact path={NonAuthRoutes.register} component={Register} />
      {/* <AuthRoute exact path={AuthRoutes.dashboard} component={Dashboard} /> */}
      <Route component={NotFound} />
    </Switch>
  </Router>
);
