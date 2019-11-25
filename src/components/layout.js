/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import Header from "./header/header"
import Footer from "./footer/footer"
import Pillar from "./pillar/pillar"
import BgTexture from "./background/bgTexture"
import "./layout.css"

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 47.5vw 5vw 47.5vw;
  grid-template-rows: 100px 1fr 100px;
  min-height: calc(100vh + 100px);
`

const StyledMain = styled.main`
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledBgTexture = styled(BgTexture)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`

const Layout = ({ children }) => {
  return (
    <LayoutGrid sx={{ backgroundColor: "muted" }}>
      {/* <StyledBgTexture /> */}
      <Header />
      <StyledMain>{children}</StyledMain>
      <Pillar />
      <Footer />
    </LayoutGrid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
