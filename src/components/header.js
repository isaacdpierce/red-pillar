/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      backgroundColor: "red.primary",
      marginBottom: 7,
    }}
  >
    <div
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: `text`,
            textDecoration: `none`,
            fontSize: 5,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
