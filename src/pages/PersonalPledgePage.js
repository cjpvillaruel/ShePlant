import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../components/Firebase";
import SignOutButton from "../components/SignOutButton/SignOutButton";

const INITIAL_STATE = {
  pledges: []
};

class PersonalPledgePage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`/users`);
      this.setState({ pledges: data });
    } catch (err) {
      console.log(err.response);
    }
  }

  render = () => {
    return (
      <Fragment>
        {this.state.pledges.length === 0 ? (
          <p>No pledges yet!</p>
        ) : (
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
                <button>Join Pledge</button>
              </Fragment>
            ))}
          </Fragment>
        )}
      </Fragment>
    );
  };
}

export default withRouter(withFirebase(PersonalPledgePage));
