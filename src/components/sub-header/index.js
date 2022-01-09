import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./styles.scss";

const SubHeader = ({ siteTitle }) => (
  // <!-- ============ SUB HEADER ======= -->
  <section className="sub-header-bar">
    <div id="clicl" className="container sub-header-content">
      <p className="">STARBUCKS® REWARDS</p>
      <button className="shc-btn"> Join in the app</button>
    </div>
  </section>
);

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Header.defaultProps = {
//   siteTitle: ``,
// };

export default SubHeader;
