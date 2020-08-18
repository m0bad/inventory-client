/* tslint:disable */
import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { AuthAPi } from '../api/users/auth';
import { NonAuthRoutes } from '../types/routes';

const authClient = new AuthAPi();

export const AuthRoute = ({ Component, path, exact = false }: any): JSX.Element => {
  const isAuthed = !!authClient.getToken();
  const message = 'Please log in to view this page';
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        isAuthed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: NonAuthRoutes.login,
              state: {
                message,
                requestedPath: path,
              },
            }}
          />
        )
      }
    />
  );
};
