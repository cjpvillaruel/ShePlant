import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../components/Firebase";
import SignOutButton from "../components/SignOutButton/SignOutButton";

const INITIAL_STATE = {};
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  render = () => {
    const { error } = this.state;
    return (
      <Fragment>
        <SignOutButton />
      </Fragment>
    );
  };
}

export default withRouter(withFirebase(HomePage));
