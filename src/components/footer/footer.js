/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import useSiteMetaData from "../../hooks/useSiteMetaData"
import styled from "@emotion/styled"
import Logo from "../logo/logo"

const StyledFooter = styled.footer`
  grid-column: 1 / -1;
  grid-row: -2 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top: 1px solid #222;
  z-index: 99;
`

const Copyright = styled.div`
  a {
    color: grey;
  }
`

export default () => {
  const { title, author, url, twitter, twitterUrl } = useSiteMetaData()

  return (
    <StyledFooter
      sx={{
        backgroundColor: "grey1",
        color: "primary",
        fontSize: 2,
      }}
    >
      <Logo style={{ transform: "rotate(90deg)" }} />
      <Copyright>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href={url}>{author}</a> <a href={twitterUrl}>{twitter}</a>
      </Copyright>
    </StyledFooter>
  )
}
