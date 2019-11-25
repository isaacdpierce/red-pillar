/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import useSiteMetaData from "../../hooks/useSiteMetaData"
import React from "react"

const createLogo = str => {
  return [...str.toUpperCase()].map((letter, i) =>
    letter === "I" ? (
      <span key={i} sx={{ color: "red.primary" }}>
        {letter}
      </span>
    ) : (
      letter
    )
  )
}

export default () => {
  const { title } = useSiteMetaData()

  return (
    <div>
      <h1 sx={{ m: 0, fontSize: [4, 5] }}>
        <Link
          to="/"
          sx={{
            color: `white`,
            letterSpacing: 1,
          }}
        >
          {createLogo(title)}
        </Link>
      </h1>
    </div>
  )
}
