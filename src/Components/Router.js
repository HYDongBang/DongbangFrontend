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
import Header from "../Components/Header";

const AppRouter = () => (
  <Router>
    <Header isLoggedIn={true} />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/auth" exact component={Auth} />
      <Route path={`/profile/`} component={Profile} />
      {/*<Redirect path="*" to="/" />*/}
    </Switch>
  </Router>
);

export default AppRouter;
