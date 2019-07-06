import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase";
import Zoom from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import ImgSeedling from "../assets/images/seedling.png"

class Step2Page extends Component {
  render = () => {
    return (
      <div className="main home step2">
        <div className="wrapper">
        <Zoom top>
            <p>Plant it.</p>
            <p>Take care of it.</p>
            <p>Cultivate it.</p>
          </Zoom>
          <Fade top delay={1000}>
            <div className="round"><img src={ImgSeedling} alt="seedling" /></div>
         </Fade>
          <Link  className="btn-link" to={ROUTES.STEP3}>Next</Link>
        </div>
      </div>
    );
  };
}

export default withRouter(withFirebase(Step2Page));
