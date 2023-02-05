require('dotenv').config('./.env');
const sanityConfig = require('./sanity-config');

module.exports = {
  siteMetadata: {
    title: `This Week in Alex Town`,
    siteUrl: `https://techhub-blog.netlify.com`,
    description: `TWAT is a semi-weekly blog written by a dingus. Don't read it.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig,
      }
    }
  ],
};
