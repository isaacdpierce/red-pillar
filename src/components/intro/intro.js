/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import UseSiteMetaData from "../../hooks/useSiteMetaData"

export default () => {
  const { description } = UseSiteMetaData()
  return (
    <div>
      <h1 sx={{ lineHeight: "138%", fontSize: 7 }}>{description}</h1>
    </div>
  )
}
