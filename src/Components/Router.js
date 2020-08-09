import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "../Routes/Main";
import Auth from "../Routes/Auth";
import Profile from "../Routes/Profile";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/profile" exact component={Profile} />
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
