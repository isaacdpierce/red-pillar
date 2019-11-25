/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import React from "react"
import styled from "@emotion/styled"
import useBgTexture from "../../hooks/useBgTexture"

const StyledPillar = styled.section`
  grid-column: 2 / span 1;
  grid-row: 2 / -2;
  box-shadow: 0 0 3px 3px #111;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 120%;
    height: 12px;
    background-color: inherit;
    transform: translateX(-10%);
    border-left: 2px solid #222;
    border-right: 2px solid #222;
  }

  &:before {
    top: -1px;
    border-radius: 0 0 50% 50%;
  }
  &:after {
    bottom: -1px;
    border-radius: 50% 50% 0 0;
  }
`

export default () => {
  const bgTexture = useBgTexture()
  console.log(bgTexture)

  return (
    <StyledPillar
      sx={{
        backgroundColor: "red.primary",
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
    </StyledPillar>
  )
}
