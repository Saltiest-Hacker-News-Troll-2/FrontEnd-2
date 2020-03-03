import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        // False would be replaced with a dependency such as a token
        if (false) {
          // return the component
          return <Component {...props} />;
        } else {
          // redirect the user to the log in page
          alert('Please Log in!')
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;