import React from 'react';
import PageSpace from '../components/PageSpace';
import BlogGrid from '../components/blog/BlogGrid';
import SEO from '../components/SEO';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import {SingleAuthorStyles} from '../styles/author/SingleAuthorStyles';
import MyPortableText from '../components/MyPortableText';
import { Title } from '../components/typography/Title';


export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!){
    sanityAuthor(id: {eq: $id}) {
      name
      _rawBio
      profileImage{
        alt
        asset{
          gatsbyImageData
        }
      }
    }
    allSanityBlog(filter: {author: {id: {eq: $id}}}){
      nodes{
        id
        title
        publishedAt
        slug{
          current
        }
        categories{
          title
          slug{
            current
          }
        }
        coverImage{
          alt
          asset{
            gatsbyImageData
          }
        }
      }
    }
  }
`

function SingleAuthor({ data }) {
  const author = data.sanityAuthor;
  const blogs = data.allSanityBlog.nodes;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title={author.name}/>
      <div className="conatiner">
        <SingleAuthorStyles>
          <div className="author-header">
            <GatsbyImage image={author.profileImage.asset.gatsbyImageData} alt={author.profileImage.alt} className="profileImage"/>
          <Title className="name">{author.name}</Title>
          </div>
          <div className="bio">
            <MyPortableText value={author._rawBio}></MyPortableText>
          </div>
          <hr className="hr"/>
          <BlogGrid blogs={blogs}/>
        </SingleAuthorStyles>
      </div>
      
    </PageSpace>
  )
}

export default SingleAuthor;