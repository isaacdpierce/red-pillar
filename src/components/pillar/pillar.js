/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import React, { useState } from "react"
import styled from "@emotion/styled"
import useBgTexture from "../../hooks/useBgTextureLight"
import MenuButton from "../menu/menuButton"

const StyledPillar = styled.section`
  grid-column: 2 / span 1;
  grid-row: 2 / -2;
  box-shadow: 0 3px 3px 3px #111;
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: width 1s ease-in-out;
  transition: all 1s ease-in-out;
  z-index: 2;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: calc(100% + 12px);
    height: 12px;
    background-color: inherit;
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
  const [pillarWidth, setPillarWidth] = useState(false)

  const handleClick = () => {
    setPillarWidth(!pillarWidth)
  }

  return (
    <StyledPillar
      css={css`
        width: ${pillarWidth ? "100vw" : "100%"};
        transform: translateX(${pillarWidth ? "-48vw" : "0"});
      `}
      sx={{
        backgroundColor: "red.primary",
      }}
    >
      <MenuButton handleClick={handleClick} />
    </StyledPillar>
  )
}
