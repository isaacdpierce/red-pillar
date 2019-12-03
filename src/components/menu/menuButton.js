/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.button``

export default ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      sx={{
        backgroundColor: "red.primary",
        border: "none",
        p: 0,
        color: "white",
        fontFamily: "heading",
        fontWeight: "bold",
        maxWidth: "100px",
      }}
    >
      MENU
    </button>
  )
}
