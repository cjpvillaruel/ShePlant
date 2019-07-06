import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase";
import Zoom from "react-reveal/Bounce";

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
          <Zoom top>
            <p>You are almost</p>
            <p>ready,</p>
            <p>
              <b>Clariza!</b>
            </p>
          </Zoom>
          <Link className="btn-link" to={ROUTES.STEP1}>
            Next
          </Link>
        </div>
      </div>
    );
  };
}

export default withRouter(withFirebase(HomePage));
