import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            headline
            author
            url
            twitter
            twitterUrl
          }
        }
      }
    `
  )
  return site.siteMetadata
}
