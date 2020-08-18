import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NotFound } from '../views/NotFound';
import { AuthRoutes, NonAuthRoutes } from '../types/routes';
import { AuthRoute } from './AuthRoute';
import { Login } from '../views/Login';
import { Register } from '../views/Register';
import { Dashboard } from '../views/Dashboard';

export const RouterWrapper: React.FC = (): JSX.Element => (
  <Router>
    <Switch>
      <AuthRoute exact={false} path={AuthRoutes.dashboard} Component={Dashboard} />
      <Route exact path={NonAuthRoutes.login} component={Login} />
      <Route exact path={NonAuthRoutes.register} component={Register} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
