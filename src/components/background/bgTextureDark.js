/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import useBgTexture from "../../hooks/useBgTexture/Light"

export default () => {
  const bgTexture = useBgTexture()
  return (
    <Img
      className="background-texture"
      alt=""
      role="presentation"
      fluid={bgTexture}
      css={css`
        opacity: 1;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        height: 100vh;
      `}
    />
  )
}
