import { React, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddPhone from "./pages/AddPhone";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import PhoneDetail from "./pages/PhoneDetail";
import EditForm from "./pages/EditForm";
import NotFound from "./pages/NotFound"

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import config from "./config";
import axios from "axios";

function App(props) {
  return (
    <div className="App">
      <MyNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/addPhone"
          render={(routeProps) => {
            return <AddPhone {...routeProps} />;
          }}
        />
        <Route
          path="/phones/:phoneId"
          render={(routeProps) => {
            return <PhoneDetail {...routeProps} />;
          }}
        />
        <Route
          path="/edit/:phoneId"
          render={(routeProps) => {
            return <EditForm {...routeProps} />;
          }}
        />
        <Route
          render={() => {
            return <NotFound />;
          }}
        />
      </Switch>
      <MyFooter />
    </div>
  );
}

export default withRouter(App);
