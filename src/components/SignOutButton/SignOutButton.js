import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignOutButton = ({ firebase, history }) => (
  <button
    onClick={() => {
      firebase.doSignOut().then(() => {
        localStorage.clear();
        history.push(ROUTES.LOGIN);
      });
    }}
  >
    Sign Out
  </button>
);

export default withRouter(withFirebase(SignOutButton));

SignOutButton.propTypes = {
  firebase: PropTypes.shape({}).isRequired
};
