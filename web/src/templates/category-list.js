import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CategoryGrid from '../components/category/CategoryGrid';
import Pagination from '../components/Pagination';
import PageSpace from '../components/PageSpace';

export const CategoryListQuery = graphql`
  query categoriesListQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes{ 
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function CategoryList(  {data, pageContext}) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;
  

  return (
    <><SEO title="categories"/>
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader 
            title="All Categories"
            description=""
          />
          <CategoryGrid categories={categories} />
          {numberOfPages > 1 && (
            <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            baseURL="/categories"
            />
            )
          }
        </div>
      </PageSpace>
    </>
  )
}

export default CategoryList;