import React from "react"
import UseSiteMetaData from "../../hooks/useSiteMetaData"

export default () => {
  const { description } = UseSiteMetaData()
  return (
    <div>
      {/* <h1>Hi people</h1> */}
      <p>{description}</p>
    </div>
  )
}
