import React from "react";
import Aimg from "../../images/1acell.png";
import Bimg from "../../images/1bcell.png";
import Cimg from "../../images/2a.png";
import Dimg from "../../images/3a.png";

const Payments = ({ siteTitle }) => (
  <section class="payment">
    <h3 class="section__title"> Cash or card, you earn Stars </h3>
    <p class="p_description">
      JNo matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious)
      Rewards.
    </p>

    <div class=" pay_box_flex">
      <div class="box">
        <h3>
          1<span className="star_size">★</span>Star per dollar{" "}
        </h3>
        <p>Pay as you go</p>
      </div>

      <div class="box">
        <img src={Aimg} alt="" /> <br />
        <h3>Scan and pay separately</h3>
        Use cash or credit/debit card at the register.
      </div>

      <div class="box">
        <img src={Bimg} alt="" /> <br />
        <h3> Register your gift card</h3>
        <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
      </div>
    </div>
    <hr />

    <div class=" pay_box_flex">
      <div class="box">
        {" "}
        <h3>
          2<span className="star_size">★</span>Stars per dollar
        </h3>
        <p>Add funds in the app</p>{" "}
      </div>

      <div class="box">
        {" "}
        <img src={Bimg} alt="" /> <br />
        <h3>Scan and pay separately</h3>
        Use cash or credit/debit card at the register.
      </div>

      <div class="box">
        <img src={Cimg} alt="" /> <br />
        <h3> Register your gift card</h3>
        <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
      </div>
    </div>
    <hr />

    <div class="  pay_box_flex">
      <div class="box">
        {" "}
        <h2>
          3<span className="star_size">★</span>Stars per dollar
        </h2>
        <p>With Starbucks® Rewards Visa® Card</p>{" "}
      </div>
      <div class="box">
        {" "}
        <img src={Dimg} alt="" /> <br />
        <h3>Scan and pay separately</h3>
        Use cash or credit/debit card at the register.
      </div>
    </div>
  </section>
);

export default Payments;
