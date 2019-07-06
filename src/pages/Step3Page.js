import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase";
import Zoom from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import ImgPlant from "../assets/images/plant.png"

class Step3Page extends Component {
  render = () => {
    return (
      <div className="main home step3">
        <div className="wrapper">
        <Zoom top>
            <p>Because from a </p>
            <p>small seed,</p>
            <p>Hope blossoms.</p>
          </Zoom>
          <Fade top delay={1000}>
            <div className="round"><img src={ImgPlant} alt="Plant" /></div>
         </Fade>
          {/* <Link  className="btn-link" to={ROUTES.STEP2}>Next</Link> */}
        </div>
      </div>
    );
  };
}

export default withRouter(withFirebase(Step3Page));
