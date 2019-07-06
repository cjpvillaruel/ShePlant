import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import * as ROUTES from "./constants/routes";
import { withAuthentication } from "./components/Session";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
      </div>
    </Router>
  );
}

export default withAuthentication(App);
