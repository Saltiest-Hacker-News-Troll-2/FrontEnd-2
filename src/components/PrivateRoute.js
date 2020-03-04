import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props => {
        // token is passed from the back end and used to authenticate the user accessing private routes
        if (token) {
          // return the component
          return <Component {...props} />;
        } else {
          // redirect the user to the log in page
          alert('Token not found! Are you logged in?')
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;