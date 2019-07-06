import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase";
import Fade from "react-reveal/Fade";

const INITIAL_STATE = {};
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  render = () => {
    return (
      <div className="main home home1">
        <div className="wrapper">
          <Fade top delay={100} duration={1000}>
            <p>You are almost</p>
            <p>ready,</p>
            <p>
              <b>{localStorage.getItem("firstName")}!</b>
            </p>
          </Fade>
          <Link className="btn-link" to={ROUTES.STEP1}>
            Next
          </Link>
        </div>
      </div>
    );
  };
}

export default withRouter(withFirebase(HomePage));
