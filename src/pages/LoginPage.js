import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase";

import Logo from '../assets/images/logo.png';
import IconLock from '../assets/images/icon-lock.png';
import IconUser from '../assets/images/icon-user.png';

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
        <div className="main">
          <div className="wrapper login">
            <form onSubmit={this.onSubmit}>
              <img src={Logo} alt="Logo" className="logo"/>
              <div className="input-wrap">
                <img src={IconUser} alt="Icon User" />
                <input className="input"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-wrap">
                <img src={IconLock} alt="Icon Lock" />
                <input className="input"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                />
              </div>
              <input className="btn-green btn" type="submit" value="Login" />
              <Link to={ROUTES.SIGN_UP}>Register</Link>
            </form>
          </div>
        </div>
      </Fragment>
    );
  };
}

export default withRouter(withFirebase(LoginPage));
