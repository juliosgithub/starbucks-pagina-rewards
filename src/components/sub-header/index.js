import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./styles.scss";

const SubHeader = ({ siteTitle }) => (
  // <!-- ============ SUB HEADER ======= -->
  <section className="sub-header-bar">
    <div className="container sub-header-content">
      <p>
        STARBUCKS <span className="sub-header-copy">®</span> REWARDS
      </p>
      <button className="shc-btn"> Join in the app</button>
    </div>
  </section>
);

export default SubHeader;
