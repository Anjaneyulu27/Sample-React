import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import MainContainer from '../containers/MainContainer';
import LoginForm from "../containers/LoginContainer";
import MainContainer from "../containers/MainContainer";
import App from "../App";
import history from '../Routes/history'

export class Routes extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="Route">
        <Router>
          <Switch>
            <Route exact path="/Login" component={LoginForm}></Route>
            <Route exact path ="/LandingPage" component={MainContainer}></Route>
          </Switch>
          </Router>
      </div>
    );
  }
}
export default Routes;
