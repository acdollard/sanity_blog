import React from 'react';  
import { graphql } from 'gatsby';
import { FiCalendar } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { GatsbyImage } from 'gatsby-plugin-image';
import  { format } from 'date-fns';
import PageSpace from '../components/PageSpace';
import SEO from '../components/SEO';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';
import ParagraphText from '../components/typography/ParagraphText';
import { Title } from '../components/typography/Title';

export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
    }
  }
`;

function SingleBlog({ data }) {
  console.log(data);
  const blog = data.sanityBlog;

  return (
    <SingleBlogStyles>
      <SEO title={blog.title} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="blog-header">
            <GatsbyImage 
              image={blog.coverImage.asset.gatsbyImageData}
              alt={blog.coverImage.alt}
              className="blog-cover-image"
            />
            <Title className="title">{blog.title}</Title>
            <ParagraphText className="publishedAt">
              <FiCalendar style={{height: '1em', width: '1em'}}/>
              {format(new Date(blog.publishedAt), 
              'p, MMMM dd yyyy')}
            </ParagraphText>
            <ParagraphText
              className="categoriesText">
              <BiCategory style={{height: '1em', width: '1em'}}/>
              <span>
                {blog.categories.map((item, index) => 
                (
                  <h1>{item.title}</h1>
                ))}
              </span>
            </ParagraphText>
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
  )
};

export default SingleBlog;