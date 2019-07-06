import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase";
// import { SignUpLink } from "../SignUp";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(this.state);

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
          <label>Email:</label>
          <input
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={this.onChange}
          />
          <label>Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={this.onChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </Fragment>
    );
  };
}

export default withRouter(withFirebase(LoginPage));
