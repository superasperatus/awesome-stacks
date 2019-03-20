import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCommentAlt, faStar, faCodeBranch, faBars, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCommentAlt, faStar, faCodeBranch, faBars, faExternalLinkAlt)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      } `}
    render={data => (
      <div className="layout">
        <Navbar></Navbar>
        <main>{children}</main>
        <div className="has-margin-bottom-60"></div>
        <Footer></Footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
