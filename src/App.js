import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./landingpage/LandingPage";
import Signin from "./signin/Signin";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import Interest from "./interest/Interest";
import Account from "./account/Account";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={Signin} />
          <Route path="/account" component={Account} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/interest" component={Interest} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
