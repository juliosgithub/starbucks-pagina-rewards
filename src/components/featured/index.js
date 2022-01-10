import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "./styles.scss";
import img01 from "../../images/getting-started-1.webp";
import img02 from "../../images/getting-started-2.webp";
import img03 from "../../images/getting-started-3.webp";

const Featured = ({ siteTitle }) => (
  <section class="section container section_featured" id="featured">
    <h2 class="section__title"> Getting started is easy</h2>
    <p class="p_description ">
      Earn Stars and get rewarded in a few easy steps. Earn Stars and get rewarded in a few easy steps.Earn Stars and
      get rewarded in a few easy steps.
    </p>

    <div class="featured__container">
      <article class="featured__card">
        <img src={img01} alt="" class="featured__img" />

        <div class="featured__data">
          <h3 class="featured__title">Create an account</h3>
          <span class="featured__description">
            <a href="" class="link_green">
              Join in the app
            </a>{" "}
            to get access to the full range of Starbucks® Rewards benefits. You can also{" "}
            <a href="" class="link_green">
              join online.
            </a>{" "}
          </span>{" "}
          <br />
        </div>
      </article>

      <article class="featured__card">
        <img src={img02} alt="" class="featured__img" />

        <div class="featured__data">
          <h3 class="featured__title">Order and pay how you’d like</h3>
          <span class="featured__description">
            Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.
            &nbsp;
            <a href="#" class="link_green">
              Learn how
            </a>{" "}
          </span>
        </div>
      </article>

      <article class="featured__card">
        <img src={img03} alt="" class="featured__img" />

        <div class="featured__data">
          <h3 class="featured__title">Earn Stars, get Rewards</h3>
          <span class="featured__description">
            As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as
            little as 25 Stars!
          </span>{" "}
          <br />
        </div>
      </article>
    </div>
  </section>
);

export default Featured;
