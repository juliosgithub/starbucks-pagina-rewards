import React from "react";
import "./styles.scss";
import sportify from "../../images/social-spotify.svg";
import facebook from "../../images/social-facebook.svg";
import spotify from "../../images/social-spotify.svg";
import pinterest from "../../images/social-pinterest.svg";
import instagram from "../../images/social-instagram.svg";
import youtube from "../../images/social-youtube.svg";
import twitter from "../../images/social-twitter.svg";

const Footer = ({ siteTitle }) => (
  <footer class="footer">
    <nav class="footer_nav">
      <div class="footer__content">
        <h3 class="footer__title">About Us</h3>

        <ul class="footer__links">
          <li>
            <a href="#" class="footer__link">
              Our Company
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Our Coffee
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Stories and News
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Starbucks Archive
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Customer Service
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">Careers</h3>

        <ul class="footer__links">
          <li>
            <a href="#" class="footer__link">
              Culture and Values
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Inclusion, Diversity, and Equity
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Alumni Community
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              U.S. Careers
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              International Careers
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">Social Impact</h3>

        <ul class="footer__links">
          <li>
            <a href="#" class="footer__link">
              People
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Planet
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Environmental and Social <br /> Impact Reporting
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">For Business Partners</h3>

        <ul class="footer__links">
          <li>
            <a href="#" class="footer__link">
              Landlord Support Center
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Corporate Gift Card Sales
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Office and Foodservice Coffee
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">Order and Pickup</h3>

        <ul class="footer__links">
          <li>
            <a href="#" class="footer__link">
              Order on the App
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Delivery
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Order and Pickup Options
            </a>
          </li>
          <li>
            <a href="#" class="footer__link">
              Explore and Find Coffee for Home
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="footer_support">
      <div class="a">
        <ul class="footer__social">
          <a href="#" target="_blank" class="footer__social-link"></a>
          <a href="#" target="_blank" class="footer__social-link">
            <img src={spotify} alt="facebook" />
          </a>
          <a href="#" target="_blank" class="footer__social-link">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#" target="_blank" class="footer__social-link">
            <img src={pinterest} alt="facebook" />
          </a>

          <a href="#" target="_blank" class="footer__social-link">
            <img src={instagram} alt="facebook" />
          </a>
          <a href="#" target="_blank" class="footer__social-link">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="#" target="_blank" class="footer__social-link">
            <img src={twitter} alt="twitter" />
          </a>
        </ul>
      </div>

      <div class="footer__content">
        <ul class="footer-others">
          <li>
            <a href="#" class="footer-others-links">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="footer-others-links">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" class="footer-others-links">
              {" "}
              CA Supply Chain Act
            </a>
          </li>
          <li>
            <a href="#" class="footer-others-links boder-none">
              Cookie Preferences
            </a>
          </li>
        </ul>
      </div>

      <span class="footer__copy">&#169; 2022 Starbucks Coffee Company. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
