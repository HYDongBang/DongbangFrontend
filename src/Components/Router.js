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
import ClubInfo from "../Routes/ClubInfo";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/clubInfo" component={ClubInfo} />
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
