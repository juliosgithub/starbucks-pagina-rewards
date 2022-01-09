import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "./styles.scss";

import logo from "../../images/logo.svg";

const HomeSection = ({ siteTitle }) => (
  <section class="home" id="home">
    <div class="home__container container">
      <div class="home__data">
        <h1 class="home__title">
          FREE COFFEE
          <br />
          IS A TAP AWAY
        </h1>
        <p class="home__description">Join now to start earning Rewards.</p>
        <button class="btn btn_green btn_home">Join now</button>
        <p class="home__description">Or join in the app for the best experience</p>
      </div>
    </div>
  </section>
);

export default HomeSection;
