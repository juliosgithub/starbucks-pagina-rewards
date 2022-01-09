/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import SubHeader from "./sub-header";
import HomeSection from "./section-home";
import Featured from "./featured";
import Customer from "./customer_snack";
import Products from "./products";
import Payments from "./payment";
import Newsletter from "./newsletter";
import TermsAndPrivacy from "./Terms";
import Footer from "./footer";

import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <SubHeader />
      <HomeSection />
      <Featured />
      <Customer />
      <Products />
      <Payments />
      <Newsletter />
      <TermsAndPrivacy />
      <Footer />

      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
