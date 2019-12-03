module.exports = {
  siteMetadata: {
    title: `Red Pillar`,
    description: `We build vigorous web solutions for relentless entrepreneurs.`,
    headline: `We build fierce, snappy, nimble, on-the-double, vigorous web solutions for industrious, obsessed, wild, devoted, determined, relentless, hell-bent entrepreneurs.`,
    author: `Isaac Pierce`,
    url: `https://www.isaacpierce.io/`,
    twitter: `@isaacdpierce`,
    twitterUrl: `https://twitter.com/isaacdpierce`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/ip-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
