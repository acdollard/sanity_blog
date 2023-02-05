require('dotenv').config('./.env');

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
  ],
};
