import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from 'gatsby';

function SEO({ title, description }) {
  const {site} = useStaticQuery(graphql`
  {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const seo =  {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description
  }


  return (
    <Helmet title={seo.title}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Helmet>
  )
}

export default SEO