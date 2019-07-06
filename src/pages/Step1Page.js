import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase";
import ImgSeed from "../assets/images/seed.png";
import  Zoom  from "react-reveal/Bounce";
import  Fade  from "react-reveal/Fade";

class Step1Page extends Component {
  render = () => {
    return (
      <div className="main home step1">
        <div className="wrapper ">
          <Fade top delay={100} duration={1000}>
            <p>Here’s a seed</p>
            <p>for you…</p>
            <p className="small">(you get to plant a seed every time you pledge)</p>
          </Fade>
          <Fade top delay={800} duration={1000}>
            <div className="round"><img src={ImgSeed} alt="seed" /></div>
         </Fade>
          <Link  className="btn-link" to={ROUTES.STEP2}>Next</Link>
        </div>
      </div>
    );
  };
}

export default withRouter(withFirebase(Step1Page));
