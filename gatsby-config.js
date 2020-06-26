module.exports = {
  siteMetadata: {
    siteTitle: `Media Lab IITG`,
    defaultTitle: `Media Lab IITG`,
    siteTitleShort: `Media Lab`,
    siteDescription: `Online repository for Media Lab IITG`,
    siteUrl: `http://www.iitg.ac.in/design/medialab/`,
    siteAuthor: `Media Lab`,
    siteImage: `static/Media lab logo title.png`,
    siteLanguage: `en`,
    themeColor: `#121521`,
    basePath: `/`,
    footer: `@ Media Lab IITG 2020`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#e2cfc3`,
        display: `standalone`,
        icon: `static/Media lab logo.jpeg`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
