import React from 'react'
import PageSpace from '../components/PageSpace';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';
import { SectionTitle } from '../components/typography/Title';
import ParagraphText from '../components/typography/ParagraphText';
import { Link } from 'gatsby';

function NotFoundPage() {
  return (
    <PageSpace>
      <div className='container'>
        <NotFoundPageStyles>
          <SectionTitle>
            404
          </SectionTitle>
          <ParagraphText>
            The page you looking for gone, bitch. <br /> 
            Go back to{' '}<Link to='/' className="homePage"> Home Page</Link>
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  )
}

export default NotFoundPage;