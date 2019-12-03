/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import useMountainImage from "../../hooks/useMountainImg"

export default () => {
  const mainImage = useMountainImage()
  return (
    <div
      css={css`
        grid-column: 1 / span 2;
        grid-row: 2 / span 1;
      `}
      sx={{ py: 6, px: 5 }}
    >
      <Img
        className="background-texture"
        alt=""
        role="presentation"
        fluid={mainImage}
        css={css`
          width: 500px;
        `}
      />
    </div>
  )
}
