import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase";

const INITIAL_STATE = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  error: null
};
class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.setState({ submitted: true });

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render = () => {
    const { error } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          {/* Email */}
          <label>Email:</label>
          <input
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={this.onChange}
          />

          {/* Password */}
          <label>Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={this.onChange}
          />
          {/* First Name */}
          <label>First Name:</label>
          <input
            id="firstname"
            name="firstname"
            placeholder="Enter your first name"
            onChange={this.onChange}
          />
          {/* Last Name */}
          <label>Last Name:</label>
          <input
            id="lastname"
            name="lastname"
            placeholder="Enter your last name"
            onChange={this.onChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </Fragment>
    );
  };
}

export default withRouter(withFirebase(SignUpPage));
