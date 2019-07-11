module.exports = {
  siteMetadata: {
    title: `Catalyst Starter`,
    description: `Speed up your Gatsby development workflow. Designed as an opinionated and high speed starter.`,
    author: `Eric Howey`,
    menuLinks:[
          {
            name:'Page 1',
            link:'/page-1'
          },
          {
            name:'Page 2',
            link:'/page-2'
          },
          {
            name:'Page 3',
            link:'/page-3'
          }
            ]
  },
    plugins: [
      'gatsby-theme-catalyst-core',
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-basic`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      }
    }
    ]
}