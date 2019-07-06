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
      <div className="main home">
        <div className="wrapper step2">
        <Zoom top>
            <p>Here’s a seed</p>
            <p>for you…</p>
            <p className="small">(you get to plant a seed every time you pledge)</p>
          </Zoom>
          <Fade top delay={1000}>
            <div className="round"><img src={ImgSeedling} alt="seed" /></div>
         </Fade>
          <Link  className="btn-link" to={ROUTES.STEP2}>Next</Link>
        </div>
      </div>
    );
  };
}

export default withRouter(withFirebase(Step2Page));
