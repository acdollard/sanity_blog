import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FeaturedBlogsStyles } from "../../styles/homePage/FeaturedBlogsStyles";
import { SectionTitle } from "../typography/Title";
import ParagraphText from "../typography/ParagraphText";
import  BlogGrid  from "../blog/BlogGrid";

// function FeaturedBlogs() {
//   const data = useStaticQuery(graphql`
//     // query MyQuery {
//     //   allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
//     //     nodes {
//     //       blog {
//     //         title  
//     //         id
//     //         publishedAt
//     //         categories {
//     //           title
//     //           slug {
//     //             current
//     //           }
//     //         }
//     //         coverImage {
//     //           alt
//     //           asset {
//     //             gatsbyImageData
//     //           }
//     //         }
//     //         slug {
//     //           current
//     //         }
//     //       }
//     //     }
//     //   }
//     // }
//   `);

  const featuredBlogs = data.allSanityFeatured.nodes[0].blog;

  return (
    <FeaturedBlogsStyles>
      {/* <SectionTitle>Featured Blogs</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        
      </ParagraphText>
      <BlogGrid blogs={featuredBlogs}/> */}
    </FeaturedBlogsStyles>
  );
//}


export default FeaturedBlogs;

 