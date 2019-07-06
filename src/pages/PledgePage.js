import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../components/Firebase";
import SignOutButton from "../components/SignOutButton/SignOutButton";
import NavBar from '../components/NavBar';

import Seed from "../assets//images/seed-per-pledge.png"
import '../assets/style/Pledge.scss'

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
        {this.state.personalPledges.length < 0 ? (
          <Fragment>
            <p>Plant should be here</p>
            <p>Pledge: {this.state.personalPledges[0].title}</p>
            <p>Description: {this.state.personalPledges[0].description}</p>
            <SignOutButton />
          </Fragment>
        ) : (
          <Fragment>
            <NavBar />
            <div className="banner">
              
            </div>
            <div className="pledge-container">
              {this.state.pledges.map(item => (
                <div className="pledge-card" key={item.id}>
                  <div className="thumbnail" style={{backgroundImage: `url(${item.image_url})`}}></div>
                  <div className="details">
                    <img className="seed-per-pledge" src={Seed} alt="option" />
                    <h4 className="title" >{item.title}</h4>
                    <p className="duration"><label>Duration:</label>30 days</p>
                    <p className="description">{item.description}</p>    
                    <button className="view-button">Open Pledge</button>
                    <button className="join-button" onClick={() => this.joinPledge(item.id)}>
                      Join Pledge
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  };
}

export default withRouter(withFirebase(PledgePage));
