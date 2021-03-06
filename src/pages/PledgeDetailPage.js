import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../components/Firebase";
import SignOutButton from "../components/SignOutButton/SignOutButton";
import IconWSeeed from '../assets/images/white-seed.png';
import PlantOverlay from "../components/PlantOverlay";
import SeedlingOverlay from "../components/SeedlingOverlay";

import Loader from '../components/Loader';


import NavBar from '../components/NavBar';

const INITIAL_STATE = {
  pledge: [],
  pageLoaded: false,
  intervalId: 0,
  show: false,
  showSeedling: false,
  loading: true
};

class PledgeDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE};
  }

  async componentDidMount() {
    this.scrollToTop()
    const {
      match: { params }
    } = this.props;
    try {
      const { data } = await axios.get(`/pledges/${params.id}`);
      this.setState({ pledge: data, pageLoaded: true, loading: false });
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

  showPlant = () =>{
    this.setState({ show: true})
    setTimeout(() => {
      this.setState({ show: false})
    }, 20000);
  }
  showSeedling = () =>{
    this.setState({ showSeedling: true})
  }
  closeSeedling = () =>{
    this.setState({ showSeedling: false })
  }
  closePlant = () =>{
    this.setState({ show: false})
  }
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
    this.setState({ intervalId: intervalId });
  }

  render = () => {
    const { pledge } = this.state;
    return (
      <Fragment>
        <div className="wrapper pledge-detail">
          {pledge && <NavBar title={pledge.title}/>}
          {this.state.loading && <Loader />}
          <div className="banner">
            <div className="info">
              <ul>
                <li>Status:</li>
                <li>30 of 30</li>
              </ul>
              <ul>
                <li>Duration:</li>
                <li>{this.state.pledge.duration}</li>
              </ul>
            </div>
            <button onClick={this.showPlant}>Done</button>
          </div>
          <div className="top">
            <ul className="total-pledge">
              <li>1, 987</li>
              <li>Total Pledges</li>
            </ul>
            <button onClick={this.showSeedling}><img src={IconWSeeed} alt="White Seed" />Check my Seed</button>
          </div>
          <div className="details">
            <h4>Details</h4>
            <p>{this.state.pledge.description}</p>
            <h4>Discussion</h4>
            <div className="discussion">
              <ul>
                <li><div className="profile"></div></li>
                <li>
                  <h4>Antonia Wilson</h4>
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
                  <h4>Antonia Wilson</h4>
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
                  <h4>Antonia Wilson</h4>
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
                  <h4>Antonia Wilson</h4>
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
            {/* {this.state.pledge.posts &&
              this.state.pledge.posts.map(item => <p>item</p>)}
            <button onClick={() => this.joinPledge(this.state.pledge.id)}>
              Join Pledge
          </button> */}
          </div>
          
          </div>
          {this.state.showSeedling && <SeedlingOverlay onclose={this.closeSeedling}/>}
          {this.state.show && <PlantOverlay onclose={this.closePlant}/>}
      </Fragment>
    );
  };
}

export default withRouter(withFirebase(PledgeDetailPage));
