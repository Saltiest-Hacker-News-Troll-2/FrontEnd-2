import React from 'react';
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
import LoginContext from './contexts/LoginContext';
import SignupContext from './contexts/SignupContext';
import PrivateRoute from './components/PrivateRoute';
import UpdatePassword from './components/UpdatePassword';

function App() {
  return (
  <div>
    <SignupContext>
      <LoginContext>
        <Header />
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Signup">
              <Signup />
            </Route>
            <PrivateRoute exact path="/HomePage/:id" component={HomePage} />
            <PrivateRoute exact path="/HomePage/editpassword/:id" component={UpdatePassword} />
            <Route component={Login} />
          </Switch>
        </LoginContext>
    </SignupContext>
  </div>
  );
}

export default App;
