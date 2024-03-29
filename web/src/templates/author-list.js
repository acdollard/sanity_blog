import { graphql } from 'gatsby';
import React from 'react';
import PageSpace from '../components/PageSpace';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import AuthorGrid from '../components/authors/AuthorGrid';
import Pagination from  '../components/Pagination'; 

export const AuthorsQuery = graphql`
  query authorQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  const authors = data.allSanityAuthor.nodes
  const { currentPage, numberOfPages } = pageContext;

  return (
    <>
    <PageSpace top={80} bottom={100}>
      <SEO title="authors"/>
      <div className="container">
        <PageHeader
          title="All Authors"
          description=""
        />
        <AuthorGrid authors={authors} />
        {
          numberOfPages > 1 && (
            <Pagination
              baseURL="/authors"
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              />
          )
        }
      </div>
    </PageSpace>
    </>
  )
}

export default AuthorList;