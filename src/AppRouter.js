import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LayoutComponent from "./components/Layout";
import TrangChu from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
const AppRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <LayoutComponent>
            <Route exact path="/">
              <TrangChu />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </LayoutComponent>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
