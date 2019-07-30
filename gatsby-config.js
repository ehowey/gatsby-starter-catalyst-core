module.exports = {
  siteMetadata: {
    title: `Catalyst Core`,
    description: `Speed up your Gatsby development workflow. Designed as an opinionated and high speed starter.`,
    author: `Eric Howey`,
    menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`
      },
      {
        name: `Page 2`,
        link: `/page-2`
      },
      {
        name: `Page 3`,
        link: `/page-3`
      }
    ],
    socialLinks: [
      {
        name: `Email`,
        url: `eric@erichowey.dev`,
        location: `footer` //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        url: `https://www.github.com/ehowey`,
        location: `all` //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        url: `https://www.twitter.com/erchwy`,
        location: `header` //Options are "all", "header", "footer"
      }
    ]
  },
  plugins: [
    `gatsby-theme-catalyst-core`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-basic`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo-512.png` // This path is relative to the root of the site.
      }
    }
  ]
};
