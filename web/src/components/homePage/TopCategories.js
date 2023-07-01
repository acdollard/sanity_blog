import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';
import CategoryGrid from '../category/CategoryGrid';


function TopCategories() {

  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: {_id: {eq: 
      "featuredItems" } }){
        nodes{
          category{
            id
            title
            slug{
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);

  const categories = data.allSanityFeatured.nodes[0].category;
  return (
    <TopCategoriesStyles>
      <SectionTitle>Main Categories</SectionTitle>
      <ParagraphText className="info">Putting things into categories is hard. 
      </ParagraphText>
      <CategoryGrid categories={categories}></CategoryGrid>
    </TopCategoriesStyles>
  
  )
}

export default TopCategories;