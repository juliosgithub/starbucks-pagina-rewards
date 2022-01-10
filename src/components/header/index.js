import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "./styles.scss";

import logo from "../../images/logo.svg";
import map from "../../images/map.png";

const Header = ({ siteTitle }) => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  return (
    <header className="header" id="header">
      {/* --------- NAVMENU ---------- */}
      <nav className="nav container">
        <span className="nav__logo">
          <a href="#">
            <img src={logo} className="nav__logo-img " alt="" />{" "}
          </a>
        </span>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link ">
                Menu
              </a>
            </li>
            <li className="nav__item">
              <a href="#featured" className="nav__link">
                Rewards
              </a>{" "}
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">
                Gift Card
              </a>
            </li>
          </ul>
        </div>

        {/* ---------------- NAV BUTONS ----------- */}
        <div className="nav__btns btn-desk">
          <li>
            {" "}
            <a href="#" className="nav__btns_find">
              <img src={map} width="13px" alt="" /> Find a Store{" "}
            </a>
          </li>

          <button className="btn btn-dark-outline">
            {" "}
            <a href="">Sign in</a>{" "}
          </button>

          <button className="btn btn-dark">
            {" "}
            <a href="">Join now</a>{" "}
          </button>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <button
            type="button"
            className="hamburger"
            id="menu-btn"
            onClick={() => setIsMenuMobileOpen(!isMenuMobileOpen)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      {/* MENU MOBILE - SMARTHPONES, IPADS...  */}

      <div className="nav-mobile" id="nav-mobile" style={{ right: isMenuMobileOpen ? 0 : "-100%" }}>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link ">
              Menu
            </a>
          </li>{" "}
          <br />
          <li className="nav__item">
            <a href="#featured" className="nav__link">
              Rewards
            </a>{" "}
          </li>{" "}
          <br />
          <li className="nav__item">
            <a href="#products" className="nav__link">
              Gift Card
            </a>
          </li>
        </ul>
        <br />
        <hr />
        <br />
        <button className="btn btn-dark-outline">
          {" "}
          <a href="">Sign in</a>{" "}
        </button>
        <br /> <br />
        <button className="btn btn-dark">
          {" "}
          <a href="">Join now</a>{" "}
        </button>
        <br /> <br />
        <li>
          {" "}
          <a href="#" className="nav__btns_find">
            <img src={map} width="13px" alt="" /> Find a Store{" "}
          </a>
        </li>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
