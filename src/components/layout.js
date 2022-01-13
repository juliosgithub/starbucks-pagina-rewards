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

import "./layout.scss";

const Layout = ({ children, objeto }) => {
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

      <main>{children}</main>

      {/* <h1>{`${objeto.nome} ${objeto.sobrenome}`}</h1> */}
    </>
  );
};

export default Layout;
