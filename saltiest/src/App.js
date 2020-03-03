import React from 'react';
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LoginProvider from './contexts/LoginContext';
import SignupProvider from './contexts/SignupContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  
  return (
  <SignupProvider>
    <LoginProvider>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/homepage" component={HomePage} />
          <Route component={Login} />
        </Switch>
      </div>
    </LoginProvider>
  </SignupProvider>
  );
}

export default App;
