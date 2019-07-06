import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase";

class HomePage extends Component {
  render = () => {
    const { error } = this.state;
    return <Fragment />;
  };
}

export default withRouter(withFirebase(HomePage));
