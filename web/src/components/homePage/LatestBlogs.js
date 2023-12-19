import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FeaturedBlogsStyles } from "../../styles/homePage/FeaturedBlogsStyles";
import { SectionTitle } from "../typography/Title";
import ParagraphText from "../typography/ParagraphText";
import  BlogGrid  from "../blog/BlogGrid";

function LatestBlogs() {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allSanityBlog(filter: {}, limit: 6, sort: {fields: _createdAt, order: DESC}) {
      nodes {
        title
        id
        publishedAt
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
        slug {
          current
        }
      }
    }
  }
  
  `);

  const latestBlogs = data.allSanityBlog.nodes;

  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Latest Blogs</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        {console.log(latestBlogs)}
      </ParagraphText>
      <BlogGrid blogs={latestBlogs}/>
    </FeaturedBlogsStyles>
  );
}


export default LatestBlogs;

