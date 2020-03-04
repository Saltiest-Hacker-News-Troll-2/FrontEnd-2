import React from 'react';
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import Signup from "./components/Signup";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LoginProvider from './contexts/LoginContext';
import SignupProvider from './contexts/SignupContext';
import PrivateRoute from './components/PrivateRoute';
import UpdatePassword from './components/UpdatePassword';

function App() {
  
  return (
  <SignupProvider>
    <LoginProvider>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/dashboard/:id" component={DashBoard} />
          <PrivateRoute path="/dashboard/editpassword/:id" component={UpdatePassword} />
          <Route component={Login} />
        </Switch>
      </div>
    </LoginProvider>
  </SignupProvider>
  );
}

export default App;
