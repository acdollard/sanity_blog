import { graphql } from 'gatsby';
import React from 'react';
import PageSpace from '../components/PageSpace';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import AuthorGrid from '../components/authors/AuthorGrid';

export const AuthorsQuery = graphql`
  query authorsQuery($limit: Int!, $offset: Int!){
    allSanityAuthor(limit: $limit, skip: $offset){
      nodes {
        id
        name
        slug {
          current
        }
        profileImage{
          alt
          asset{
            gatsbyImageData
          }
        }
      }
    }
  }
`

function AuthorList({ data, pageContext }) {
  const authors = data.allSanityAuthor.nodes
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="authors"/>
      <div className="container">
        <PageHeader
          title="All Authors"
          description="Thismoneh we will eat all 444t4 hotdogs oin thebbruffle tooast
          gud heavenly thinksh tat i wuz in theur quin oruf I didnut noew wut elaz too do
          "
        />
        <AuthorGrid authors={authors} />
      </div>
    </PageSpace>
  )
}

export default AuthorList;