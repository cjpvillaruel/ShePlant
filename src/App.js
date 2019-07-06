import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import * as ROUTES from "./constants/routes";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path={ROUTES.LOGIN} component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
