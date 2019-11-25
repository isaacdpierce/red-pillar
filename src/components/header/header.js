/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import React from "react"
import Logo from "../logo/logo"
import useBgTexture from "../../hooks/useBgTexture"

const StyledHeader = styled.header`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid black;
  box-shadow: 1px 0 2px 2px black;
  z-index: 99;
`

export default () => {
  const bgTexture = useBgTexture()
  return (
    <StyledHeader
      sx={{
        backgroundColor: "grey1",
        mb: 7,
      }}
    >
      <Img
        className="background-texture"
        alt=""
        role="presentation"
        fluid={bgTexture}
        css={css`
          opacity: 0.5;
          height: 100%;
        `}
      />
      <Logo />
    </StyledHeader>
  )
}
