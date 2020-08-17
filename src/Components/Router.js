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
    <Header isLoggedIn={true} />
    <Route path="/" exact component={Main} />
    <Route path="/auth" exact component={Auth} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/clubInfo/:id" component={ClubInfo} />
    <Redirect path="*" to="/" />
  </Router>
);

export default AppRouter;
