import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import imgA from "../../images/1-fun-freebies.webp";
import imgB from "../../images/2-order-and-pay-ahead.webp";
import imgC from "../../images/3-get-to-free-faster.webp";
import "./styles.scss";

const Products = ({ siteTitle }) => (
  <section class="section container">
    <h2 class="section__title">Endless Extras</h2>
    <p class="p_description">
      Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards
      and—yes, free coffee.
    </p>

    <div class="exclusives_container">
      <article class="exclusives_card">
        <img src={imgA} alt="" class="exclusivies_img" />

        <h3 class="exclusivies_title">Fun freebies</h3>
        <p class="exclusivies_description">
          Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.
        </p>

        <span>
          <a href="" class="link green">
            Learn more
          </a>
        </span>
      </article>

      <article class="exclusives_card">
        <img src={imgB} alt="" class="exclusivies_img" />
        <h3 class="exclusivies_title">Order & pay ahead</h3>
        <p class="exclusivies_description">
          {" "}
          Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.{" "}
        </p>
        <span>
          {" "}
          <a href="" class="link green">
            {" "}
            Learn more{" "}
          </a>{" "}
        </span>
      </article>

      <article class="exclusives_card">
        <img src={imgC} alt="" class="exclusivies_img" />
        <h3 class="exclusivies_title">Get to free faster</h3>
        <p class="exclusivies_description">
          Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.{" "}
        </p>

        <span>
          <a href="" class="link green">
            Learn more
          </a>
        </span>
      </article>
    </div>
  </section>
);

export default Products;
