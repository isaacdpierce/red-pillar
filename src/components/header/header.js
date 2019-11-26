/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import React from "react"
import Logo from "../logo/logo"
import useBgTexture from "../../hooks/useBgTextureLight"

const StyledHeader = styled.header`
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid black;
  box-shadow: 1px 0 3px 3px black;
  z-index: 99;
  position: relative;
`

export default () => {
  const bgTexture = useBgTexture()
  return (
    <StyledHeader
      sx={{
        backgroundColor: "grey1",
      }}
    >
      <Logo />
    </StyledHeader>
  )
}
