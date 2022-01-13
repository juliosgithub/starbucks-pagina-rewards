import React from "react";
import Aimg from "../../images/1acell.png";
import Bimg from "../../images/1bcell.png";
import Cimg from "../../images/2a.png";
import Dimg from "../../images/Dimg.png";
import Eimg from "../../images/3a.png";
import "./styles.scss";

const Payments = ({ siteTitle }) => (
  <section class="payment">
    <h3 class="section__title"> Cash or card, you earn Stars </h3>
    <p class="p_description">
      JNo matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious)
      Rewards.
    </p>

    <main className="payments-container">
      {/* -----------------------A1--------------- */}
      <div>
        <h2>
          1<span className="star">★</span>Star
        </h2>
        <p>per dollar Pay as you go</p>
      </div>
      {/* ---------------------------- A2-------------- */}
      <div>
        <div className="box-img">
          <img src={Aimg} alt="" />
        </div>
        <div className="box-title">
          <h3>Scan and pay separately</h3>
        </div>
        <div className="box-description">
          <p>Use cash or credit/debit card at the register.</p>
        </div>
      </div>
      {/* -------------------- A3------------- */}
      <div>
        <div className="box-img">
          <img src={Bimg} alt="" />
        </div>
        <div className="box-title">
          <h3>Save payment in the app</h3>
        </div>
        <div className="box-description">
          <p>
            Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or
            scan and pay at the register in one step.
          </p>
        </div>
      </div>

      {/* ------------------------ B1 ---------------------------- */}
      <div>
        <h2>
          2<span className="star">★</span>Stars per dollar
        </h2>
        <p>Add funds in the app</p>
      </div>
      {/* ------------------- B2------------ */}
      <div>
        <div className="box-img">
          <img src={Cimg} alt="" />
        </div>
        <div className="box-title">
          <h3>Preload</h3>
        </div>
        <div className="box-description">
          <p>
            To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment
            option. Scan and pay in one step or order ahead in the app.
          </p>
        </div>
      </div>
      {/* --------------------B3--------------- */}
      <div>
        <div className="box-img">
          <img src={Dimg} alt="" />
        </div>
        <div className="box-title">
          <h3>Register your gift card</h3>
        </div>
        <div className="box-description">
          <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
        </div>
      </div>

      {/* ---------------------------------------- */}
      <div>
        <h3>
          3<span className="star">★</span>Stars per dollar
        </h3>
        <p>With Starbucks® Rewards Visa® Card</p>
      </div>
      {/* ---------------------------------------- */}
      <div>
        <div className="box-img">
          <img src={Eimg} alt="" />
        </div>
        <div className="box-title">
          <h2>Earn Stars even faster</h2>
        </div>
        <div className="box-description">
          <p>
            Earn Stars on all purchases you make with our credit card opens in new window in and outside of Starbucks.
            Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card,
            and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.
          </p>
        </div>
      </div>
      {/* ---------------------------------------- */}
    </main>
  </section>
);

export default Payments;
