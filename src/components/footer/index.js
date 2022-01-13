import React from "react";
import "./styles.scss";
import sportify from "../../images/social-spotify.svg";
import facebook from "../../images/social-facebook.svg";
import spotify from "../../images/social-spotify.svg";
import pinterest from "../../images/social-pinterest.svg";
import instagram from "../../images/social-instagram.svg";
import youtube from "../../images/social-youtube.svg";
import twitter from "../../images/social-twitter.svg";
import Accordion from "../Accordion";
import AccordionItem from "../Accordion/AccordionItem";

const footerLinks = {
  about: [
    { name: "Our company", link: "#" },
    { name: "Our coffee", link: "#" },
    { name: "Stories and News", link: "#" },
    { name: "Starbucks Archive", link: "#" },
    { name: "Investor Relations", link: "#" },
    { name: "Customer Service", link: "#" },
  ],

  careers: [
    { name: "Culture and Values", link: "#" },
    { name: " Inclusion, Diversity, and Equity", link: "#" },
    { name: "College Achievement Plan", link: "#" },
    { name: " Alumni CommunitY", link: "#" },
    { name: "U.S Careers", link: "#" },
    { name: " International ", link: "#" },
  ],

  socialImpact: [
    { name: " People ", link: "#" },
    { name: " Planet ", link: "#" },
    { name: `Environmental and Social Impact Reporting`, link: "#" },
  ],
  bussinesPartners: [
    { name: " Landlord Support Center ", link: "#" },
    { name: " Suppliers ", link: "#" },
    { name: `Corporate Gift Card Sales`, link: "#" },
    { name: ` Office and Foodservice Coffee`, link: "#" },
  ],
  OrderAndPickup: [
    { name: " Order on the App  ", link: "#" },
    { name: " Order on the Web ", link: "#" },
    { name: `Delivery`, link: "#" },
    { name: `   Order and Pickup Options`, link: "#" },
    { name: `  Explore and Find Coffee for Home`, link: "#" },
  ],
};

const Footer = ({ siteTitle }) => (
  <footer class="footer">
    <nav class="footer_nav">
      {/* -------------------DESKTOP--------------- */}
      <div className="menu-desktop">
        <div class="footer__content">
          <h3 class="footer__title">About Us</h3>

          <ul class="footer__links">
            {footerLinks["about"].map((item) => (
              <li>
                <a href={item.link} class="footer__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">Careers</h3>

          <ul class="footer__links">
            {footerLinks["careers"].map((item) => (
              <li>
                <a href={item.link} class="footer__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">About Us</h3>

          <ul class="footer__links">
            {footerLinks["socialImpact"].map((item) => (
              <li>
                <a href={item.link} class="footer__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">Bussines Partners</h3>

          <ul class="footer__links">
            {footerLinks["bussinesPartners"].map((item) => (
              <li>
                <a href={item.link} class="footer__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">Order and Pickup</h3>

          <ul class="footer__links">
            {footerLinks["OrderAndPickup"].map((item) => (
              <li>
                <a href={item.link} class="footer__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>{" "}
      {/* ----------------------MENU MOBILE----- */}
      <div className="menu-mobile">
        <Accordion>
          <AccordionItem title="About">
            <ul class="footer__links">
              {footerLinks["about"].map((item) => (
                <li>
                  <a href={item.link} class="footer__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title="Careers">
            <ul class="footer__links">
              {footerLinks["careers"].map((item) => (
                <li>
                  <a href={item.link} class="footer__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title="Social Impact">
            <ul class="footer__links">
              {footerLinks["socialImpact"].map((item) => (
                <li>
                  <a href={item.link} class="footer__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title="Bussines Partners">
            <ul class="footer__links">
              {footerLinks["bussinesPartners"].map((item) => (
                <li>
                  <a href={item.link} class="footer__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem title="Order and Pickup">
            <ul class="footer__links">
              {footerLinks["OrderAndPickup"].map((item) => (
                <li>
                  <a href={item.link} class="footer__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
    </nav>

    <div class="footer_support">
      <div class="a">
        <ul class="footer__social">
          <a href="#" target="_blank" class="footer__social-link"></a>
          <a href="#" target="_blank" class="footer__social-link">
            <img src={spotify} alt="facebook" />
          </a>{" "}
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
