import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./landingpage/LandingPage";
import Signin from "./signin/Signin";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import Interest from "./interest/Interest";
import Verify from "./verify/Verify";
import Savings from "./savings/Savings";
import Investment from "./investment/Investment";
import Activate from "./activate/Activate";
import ActivateSavings from "./activatesavings/ActivateSavings";
import ActivateSavingGoal from "./activatesavinggoal/ActivateSavingGoal";
import ActivateFixMoney from "./activatefixmoney/ActivateFixMoney";
import ActivateInvestment from "./activateinvestment/ActivateInvestment";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={Signin} />
          <Route path="/account" component={Verify} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/interest" component={Interest} />
          <Route path="/savings" component={Savings} />
          <Route path="/investment" component={Investment} />
          <Route path="/activate" component={Activate} />
          <Route path="/activatesavings" component={ActivateSavings} />
          <Route path="/activatesavinggoal" component={ActivateSavingGoal} />
          <Route path="/activatefixmoney" component={ActivateFixMoney} />
          <Route path="/activateinvestment" component={ActivateInvestment} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
