import React, { useState } from "react";
import imgA from "../../images/SwiperMenu/a.webp";
import imgB from "../../images/SwiperMenu/b.webp";
import imgC from "../../images/SwiperMenu/c.webp";
import imgD from "../../images/SwiperMenu/d.webp";
import imgE from "../../images/SwiperMenu/e.webp";

import "./styles.scss";

const styles = {
  header: {
    width: "100%",
    backgroundColor: "#F1F8F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "3rem",
    // gap: "2rem",
  },
  navigation: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  tab: {
    fontWeight: "500",
    fontSize: "1.24rem",
    fontFamily: "Roboto",
    width: "108px",
    maxWidth: "108px",
    minWidth: "108px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  slider: {
    width: "100%",
    height: "4px",
    position: "relative",
  },
  slide: {
    position: "absolute",
    bottom: "0",
    left: 0,
    height: "4px",
    width: "108px",
    background: "#00754A",
    transition: ".3s",
  },
  star: {
    fontSize: "1.1rem",
    color: "#CBA258",
  },
  pagination: {
    position: "relative",
    width: "100%",
    background: "#D4E9E2",
    padding: "1rem 0",
    height: "275px",
  },
  page: {
    position: "absolute",
    margin: "0 auto",
    top: "50%",
    left: "50%",
    display: "flex",
    alignItems: "center",
    gap: "5rem",
    maxWidth: "700px",
    transform: "translate3D(-50%, -55%, 0)",
    transition: ".4s",
  },
  image: {
    width: "40%",
    transform: "scale(1.35)",
  },
  content: {
    width: "60%",
  },
  paragraph: {
    fontSize: ".9rem",
    color: "rgba(0,0,0,.87)",
    // fontWeight: '500',
    fontFamily: "Roboto",
    marginTop: "1rem",
  },
};

const Customer = ({ siteTitle }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const headerValues = [25, 50, 150, 200, 400];
  const positions = {
    25: 0,
    50: "108px",
    150: "216px",
    200: "324px",
    400: "432px",
  };

  return (
    <section class="customer_snack_section" id="">
      <header style={styles.header}>
        <h2 class="section__title" style={{ marginBottom: "3rem" }}>
          {" "}
          Get your favorites for free
        </h2>

        <div style={styles.navigation}>
          {headerValues.map((value) => (
            <div
              key={value}
              style={{
                ...styles.tab,
                borderBottomColor: sliderPosition === positions[value] ? "#00754A" : "transparent",
              }}
              onClick={() => {
                setSliderPosition(positions[value]);
              }}
              className="pagination-tab"
            >
              <p style={styles.tabText}>
                {value}
                <span style={styles.star}>★</span>
              </p>
            </div>
          ))}

          <div style={styles.slider} className="pagination-slider">
            <div style={{ ...styles.slide, left: sliderPosition }}></div>
          </div>
        </div>
      </header>

      <main style={styles.pagination} class="pagination-container">
        {headerValues.map((page) => (
          <Page page={page} currentPageByPosition={sliderPosition} />
        ))}
      </main>
    </section>
  );
};

function Page({ page, currentPageByPosition }) {
  if (page === 25) {
    return (
      <div className="slider-page-content" style={{ ...styles.page, opacity: currentPageByPosition === 0 ? 1 : 0 }}>
        <img src={imgA} alt="" style={styles.image} />

        <div style={styles.content}>
          <h2>Customize your drink</h2>
          <p style={styles.paragraph}>
            Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.
          </p>
        </div>
      </div>
    );
  }

  if (page === 50) {
    return (
      <div
        className="slider-page-content"
        style={{
          ...styles.page,
          opacity: currentPageByPosition === "108px" ? 1 : 0,
        }}
      >
        <img src={imgB} alt="" style={styles.image} />

        <div style={styles.content}>
          <h2>Brewed hot coffee, bakery item or hot tea</h2>
          <p style={styles.paragraph}>Pair coffee cake or an almond croissant with your fresh cup of hot brew.</p>
        </div>
      </div>
    );
  }

  if (page === 150) {
    return (
      <div
        className="slider-page-content"
        style={{
          ...styles.page,
          opacity: currentPageByPosition === "216px" ? 1 : 0,
        }}
      >
        <img src={imgC} alt="" style={styles.image} />

        <div style={styles.content}>
          <h2>Handcrafted drink, hot breakfast or parfait</h2>
          <p style={styles.paragraph}>
            Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.
          </p>
        </div>
      </div>
    );
  }

  if (page === 200) {
    return (
      <div
        className="slider-page-content"
        style={{
          ...styles.page,
          opacity: currentPageByPosition === "324px" ? 1 : 0,
        }}
      >
        <img src={imgD} alt="" style={styles.image} />

        <div style={styles.content}>
          <h2>Salad, sandwich or protein box</h2>
          <p style={styles.paragraph}>
            Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.
          </p>
        </div>
      </div>
    );
  }

  if (page === 400) {
    return (
      <div
        className="slider-page-content"
        style={{
          ...styles.page,
          opacity: currentPageByPosition === "432px" ? 1 : 0,
        }}
      >
        <img src={imgE} alt="" style={styles.image} />

        <div style={styles.content}>
          <h2>Select merchandise or at-home coffee</h2>
          <p style={styles.paragraph}>
            Take home a signature cup, a bag of coffee or your choice of select coffee accessories.
          </p>
        </div>
      </div>
    );
  }
}

export default Customer;
