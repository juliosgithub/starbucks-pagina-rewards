import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import imgA from "../../images/1-fun-freebies.webp";
import imgB from "../../images/2-order-and-pay-ahead.webp";
import imgC from "../../images/3-get-to-free-faster.webp";
import "./styles.scss";

const Products = ({ siteTitle }) => (
  <section class="section container" id="products">
    <h2 class="section__title">Endless Extras</h2>
    <p class="p_description">
      Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards
      and—yes, free coffee.
    </p>

    <div class="products__container  ">
      <article class="products__card">
        <img src={imgA} alt="" class="products__img" />

        <h3 class="products__title">Fun freebies</h3>
        <span class="products__price">
          Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.
        </span>
        <br />
        <span>
          <a href="" class="link green">
            Learn more
          </a>
        </span>
      </article>

      <article class="products__card">
        <img src={imgB} alt="" class="products__img" />

        <h3 class="products__title">Order & pay ahead</h3>
        <span class="products__price">
          Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.
        </span>
        <br />
        <span>
          <br />
          <a href="" class="link green">
            Learn more
          </a>
        </span>
      </article>

      <article class="products__card">
        <img src={imgC} alt="" class="products__img" />

        <h3 class="products__title">Get to free faster</h3>
        <span class="products__price">
          Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
        </span>
        <br />
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
