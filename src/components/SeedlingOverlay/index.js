import React from 'react';
import '../NewSeedOverlay/overlay.scss';
import Seedling from "../../assets//images/seedling.png";
import  Fade  from "react-reveal/Fade";



const SeedlingOverlay = () => (
  <Fade delay={100} duration={2000}>
    <div className="overlay">
      <h1>Your seed is growing. Keep it up!</h1>
      <h3>Let your seed grow by commiting to pursue your pledges.</h3>
      <div className="seed-bg">
        <img className="seed-img" src={Seedling} alt="option" />
      </div>
      <button>Got it!</button>
    </div>
  </Fade>
)

export default SeedlingOverlay;