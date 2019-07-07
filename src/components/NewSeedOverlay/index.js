import React from 'react';
import './overlay.scss';
import Seed from "../../assets//images/seed.png";
import  Fade  from "react-reveal/Fade";



const NewSeedlingOverlay = () => (
  <Fade delay={100} duration={2000}>
    <div className="overlay">
      <h1>You've got a seed!</h1>
      <h3>Let your seed grow by commiting to pursue your pledges.</h3>
      <div className="seed-bg">
        <img className="seed-img" src={Seed} alt="option" />
      </div>
      <button>Got it!</button>
    </div>
  </Fade>
)

export default NewSeedlingOverlay;