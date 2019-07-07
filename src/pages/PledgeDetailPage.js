import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../components/Firebase";
import SignOutButton from "../components/SignOutButton/SignOutButton";
import IconWSeeed from '../assets/images/white-seed.png';

import NavBar from '../components/NavBar';

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
        <div className="wrapper pledge-detail">
          <NavBar/>
          <div className="banner">
            <div className="info">
              <ul>
                <li>Status:</li>
                <li>1 of 30</li>
              </ul>
              <ul>
                <li>Duration:</li>
                <li>{this.state.pledge.duration}</li>
              </ul>
            </div>
            <button>Done</button>
          </div>
          <div className="top">
            <ul className="total-pledge">
              <li>1, 987</li>
              <li>Total Pledges</li>
            </ul>
            <button><img src={IconWSeeed} alt="White Seed" />Check my Seed</button>
          </div>
          <div className="details">
            <h4>Details</h4>
            <p>{this.state.pledge.description}</p>
            <h4>Discussion</h4>
            <div className="discussion">
              <ul>
                <li><div className="profile"></div></li>
                <li>
                  <h4>Antonio Wilson</h4>
                  <p>I’ve really had a good time. I was able to push myself to do more and be more.</p>
                  <ul>
                    <li><button>Like</button></li>
                    <li><button>Reply</button></li>
                  </ul>
                </li>
                <li>9:03 am</li>
              </ul>
            </div>
            <div className="discussion">
              <ul>
                <li><div className="profile"></div></li>
                <li>
                  <h4>Antonio Wilson</h4>
                  <p>I’ve really had a good time. I was able to push myself to do more and be more.</p>
                  <ul>
                    <li><button>Like</button></li>
                    <li><button>Reply</button></li>
                  </ul>
                </li>
                <li>9:03 am</li>
              </ul>
            </div>
            <div className="discussion">
              <ul>
                <li><div className="profile"></div></li>
                <li>
                  <h4>Antonio Wilson</h4>
                  <p>I’ve really had a good time. I was able to push myself to do more and be more.</p>
                  <ul>
                    <li><button>Like</button></li>
                    <li><button>Reply</button></li>
                  </ul>
                </li>
                <li>9:03 am</li>
              </ul>
            </div>
            <div className="discussion">
              <ul>
                <li><div className="profile"></div></li>
                <li>
                  <h4>Antonio Wilson</h4>
                  <p>I’ve really had a good time. I was able to push myself to do more and be more.</p>
                  <ul>
                    <li><button>Like</button></li>
                    <li><button>Reply</button></li>
                  </ul>
                </li>
                <li>9:03 am</li>
              </ul>
            </div>
            {/* <p>{this.state.pledge.id}</p> */}
            {/* <p>{this.state.pledge.title}</p> */}
            {/* <p>{this.state.pledge.created_at}</p>
            <p>{this.state.pledge.updated_at}</p> */}
            {/* <p>{this.state.pledge.category}</p> */}
            {this.state.pledge.posts &&
              this.state.pledge.posts.map(item => <p>item</p>)}
            <button onClick={() => this.joinPledge(this.state.pledge.id)}>
              Join Pledge
          </button>
          </div>
          
          </div>
      </Fragment>
    );
  };
}

export default withRouter(withFirebase(PledgeDetailPage));
