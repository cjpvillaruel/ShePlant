import React from 'react';
import './overlay.scss';
import Seed from "../../assets//images/seed.png";
import  Fade  from "react-reveal/Fade";
import { withRouter, Link } from "react-router-dom";



const NewSeedlingOverlay = (props) => (
  <Fade delay={100} duration={2000}>
    <div className="overlay">
      <h1>You've got a seed!</h1>
      <h3>Let your seed grow by commiting to pursue your pledges.</h3>
      <div className="seed-bg">
        <img className="seed-img" src={Seed} alt="option" />
      </div>
      <Link to={`/pledge/${props.data.pledge.id}`}><button>Got it!</button></Link>
    </div>
  </Fade>
)

export default withRouter(NewSeedlingOverlay);