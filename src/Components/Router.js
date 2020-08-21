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
import Header from "../Components/Header";

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/auth" component={Auth} />
      <Route path="/profile" component={Profile} />
      <Route path="/clubInfo:id" component={ClubInfo} />
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
