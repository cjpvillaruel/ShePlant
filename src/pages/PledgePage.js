import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../components/Firebase";
import SignOutButton from "../components/SignOutButton/SignOutButton";

const INITIAL_STATE = {
  pledges: [],
  personalPledges: [],
  pageLoaded: false
};

class PledgePage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  async componentDidMount() {
    try {
      const personalPledgesData = await axios.get(
        `/users/${localStorage.getItem("userId")}/pledges`
      );
      const pledgesData = await axios.get(`/pledges`);
      this.setState({
        personalPledges: personalPledgesData.data,
        pledges: pledgesData.data,
        pageLoaded: true
      });
      console.log(this.state);
    } catch (err) {
      console.log(err.response);
    }
  }

  joinPledge = async pledgeId => {
    try {
      const { data } = await axios.post(
        `users/${localStorage.getItem("userId")}/pledges?pledge_id=${pledgeId}`
      );
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
        {/* Plant */}
        {this.state.personalPledges.length > 0 ? (
          <Fragment>
            <p>Plant should be here</p>
            <p>Pledge: {this.state.personalPledges[0].title}</p>
            <p>Description: {this.state.personalPledges[0].description}</p>
            <SignOutButton />
          </Fragment>
        ) : (
          // Pledges to Join
          <Fragment>
            {this.state.pledges.map(item => (
              <Fragment key={item.id}>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.duration}</p>
                <p>{item.created_at}</p>
                <p>{item.updated_at}</p>
                <p>{item.category}</p>
                <button>Open Pledge</button>
                <button onClick={() => this.joinPledge(item.id)}>
                  Join Pledge
                </button>
              </Fragment>
            ))}
          </Fragment>
        )}
      </Fragment>
    );
  };
}

export default withRouter(withFirebase(PledgePage));
