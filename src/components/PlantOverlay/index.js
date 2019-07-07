import React from 'react';
import '../NewSeedOverlay/overlay.scss';
import Plant from "../../assets//images/plant.png";
import  Fade  from "react-reveal/Fade";



const PlantOverlay = () => (
    <div>
        <Fade delay={100} duration={2000}>
            <div className="overlay">
            <h1>Your seed is now a full-grown plant!</h1>
            <h3>Congratulations for being commited to your pledge!</h3>
            <div className="seed-bg plant">
                <img className="seed-img" src={Plant} alt="option" />
            </div>
            <button>Got it!</button>
            </div>
        </Fade>
        <div class="container-confetti">
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
        </div>
    </div>
)

export default PlantOverlay;