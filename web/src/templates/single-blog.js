import React from 'react';  
import { graphql, Link } from 'gatsby';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { GatsbyImage } from 'gatsby-plugin-image';
import  { format } from 'date-fns';
import PageSpace from '../components/PageSpace';
import SEO from '../components/SEO';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';
import ParagraphText from '../components/typography/ParagraphText';
import { Title } from '../components/typography/Title';
import MyPortableText from '../components/MyPortableText';

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
  const blog = data.sanityBlog;

  return (
    <SingleBlogStyles>
      <SEO title={blog.title} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="blog-header">
            <GatsbyImage 
              image={blog.coverImage.asset !== null ? blog.coverImage.asset.gatsbyImageData : null}
              alt={blog.coverImage ? blog.coverImage.alt : ""}
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
                  <span key={item.slug.current}>
                    <Link to={`/categories/${item.slug.current}`}>
                      {item.title}
                    </Link>
                    {index < blog.categories.length -1 ? ', ' : ''}
                    </span >
                ))}
              </span>
            </ParagraphText>
            <ParagraphText className="author">
              <FiUser style={{height: '1em', width: '1em'}}>
                <Link to={`/authors/${blog.author.slug.current}`}>
                  {blog.author.name}
                </Link>
              </FiUser>
            </ParagraphText>
          </div>
          <hr className="hr" />
          <div className="body">
            <MyPortableText value={blog._rawBody}></MyPortableText>
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
  )
};

export default SingleBlog;