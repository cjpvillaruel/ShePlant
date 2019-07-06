import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import * as ROUTES from "./constants/routes";
import { withAuthentication } from "./components/Session";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import PledgePage from "./pages/PledgePage";
import PersonalPledgePage from "./pages/PersonalPledgePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.PLEDGES} component={PledgePage} />
        <Route path={ROUTES.PERSONAL_PLEDGES} component={PersonalPledgePage} />
      </div>
    </Router>
  );
}

export default withAuthentication(App);
