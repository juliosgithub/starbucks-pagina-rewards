import React from "react";
import TextField from "@mui/material/TextField";

import "./styles.scss";

const Newsletter = ({ siteTitle }) => (
  <section className="newsletter section">
    <div className="container">
      <div className="newsletter_content">
        <h2 className="newsletter__title">Star Codes</h2>
        <p className="newsletter__description">
          Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.
        </p>
        <form action="" className="newsletter__subscribe">
          <TextField className="t90" label="Enter your email" defaultValue="" />
          {/* <input type="email" placeholder="Enter your email" className="newsletter__input" /> <br /> */}
          <input type="submit" className=" btn newsletter__submit" value="Submit" />
        </form>
        <p className="newsletter__description">
          Have a receipt but don't have a code? <br />
          Go to{" "}
          <a href="#" className="link_green">
            starbucks-stars.com<i className="bx bx-link-external"></i>
          </a>
          opens in new window to upload your receipt and collect your Stars.
        </p>{" "}
        <h2>Questions?</h2>
        <p className="newsletter__description">
          We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked
          questions{" "}
          <a href="#" className="link_green">
            right over here
          </a>
          .
        </p>
      </div>
    </div>
  </section>
);

export default Newsletter;
