/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import Header from "./header/header"
import Footer from "./footer/footer"
import Pillar from "./pillar/pillar"
import BgTexture from "./background/bgTextureLight"
import MainImage from "./landing/mainImage"

import "./layout.css"

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 47.5vw 5vw 47.5vw;
  grid-template-rows: 100px 1fr 100px;
  min-height: calc(100vh + 100px);
  overflow: hidden;
`

const StyledMain = styled.main`
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const Layout = ({ children }) => {
  return (
    <LayoutGrid sx={{ backgroundColor: "muted" }}>
      <BgTexture />

      <Header />
      <MainImage />
      <StyledMain sx={{ px: 6, py: 3 }}>{children}</StyledMain>
      <Pillar />
      <Footer />
    </LayoutGrid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
