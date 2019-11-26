/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import useBgTexture from "../../hooks/useBgTextureLight"

const StyledPillar = styled.section`
  grid-column: 2 / span 1;
  grid-row: 2 / -2;
  box-shadow: 0 3px 3px 3px #111;
  position: relative;
  border: 1px solid black;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 120%;
    height: 12px;
    background-color: inherit;
    transform: translateX(-10%);
    border-left: 1px solid #111;
    border-right: 1px solid #111;
  }

  &:before {
    top: -1px;
    border-radius: 0 0 50% 50%;
    box-shadow: 0px -3px 3px 3px #111;
  }
  &:after {
    bottom: -1px;
    border-radius: 50% 50% 0 0;
    border-bottom: 1px solid black;
    box-shadow: 0px 3px 3px 3px #111;
  }
`

export default () => {
  return (
    <StyledPillar
      sx={{
        backgroundColor: "red.primary",
      }}
    ></StyledPillar>
  )
}
