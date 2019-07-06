import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../components/Firebase";
import SignOutButton from "../components/SignOutButton/SignOutButton";

const INITIAL_STATE = {
  pledge: [],
  pageLoaded: false
};

class PledgeDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    try {
      const { data } = await axios.get(`/pledges/${params.id}`);
      this.setState({ pledge: data, pageLoaded: true });
    } catch (err) {
      console.log(err.response);
    }
  }

  joinPledge = async pledgeId => {
    try {
      const { data } = await axios.post(`pledges/${pledgeId}`);
      if (data) {
        console.log(data);
        window.location.reload();
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  render = () => {
    return (
      <Fragment>
        <p>{this.state.pledge.id}</p>
        <p>{this.state.pledge.title}</p>
        <p>{this.state.pledge.description}</p>
        <p>{this.state.pledge.duration}</p>
        <p>{this.state.pledge.created_at}</p>
        <p>{this.state.pledge.updated_at}</p>
        <p>{this.state.pledge.category}</p>
        {this.state.pledge.posts &&
          this.state.pledge.posts.map(item => <p>item</p>)}
        <button onClick={() => this.joinPledge(this.state.pledge.id)}>
          Join Pledge
        </button>
      </Fragment>
    );
  };
}

export default withRouter(withFirebase(PledgeDetailPage));
