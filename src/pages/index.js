import * as React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";

import HomeSection from "../components/section-home";
import Featured from "../components/featured";
import Customer from "../components/customer_snack";
import Products from "../components/products";
import Payments from "../components/payment";
import Newsletter from "../components/newsletter";
import TermsAndPrivacy from "../components/Terms";
import Footer from "../components/footer";
import Accordion from "../components/Accordion";

const IndexPage = () => (
  <Layout>
    <HomeSection />
    <Featured />
    <Customer />
    <Products />
    <Payments />
    <Newsletter />
    <TermsAndPrivacy />
    <Footer />
    <Accordion />
  </Layout>
);

export default IndexPage;
