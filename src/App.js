import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/style/App.scss";

import * as ROUTES from "./constants/routes";
import { withAuthentication } from "./components/Session";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Step1Page from "./pages/Step1Page";
import Step2Page from "./pages/Step2Page";
import Step3Page from "./pages/Step3Page";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.STEP1} component={Step1Page} />
        <Route path={ROUTES.STEP2} component={Step2Page} />
        <Route path={ROUTES.STEP3} component={Step3Page} />
      </div>
    </Router>
  );
}

export default withAuthentication(App);
