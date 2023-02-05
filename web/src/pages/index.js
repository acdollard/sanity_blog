import React from 'react';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import SEO from '../components/SEO';

const IndexPage = () => (
  <>
    <SEO></SEO>
    <HeroSection></HeroSection>
    <div className="container">
      <FeaturedBlogs/>
    </div>
  </>
  
);

export default IndexPage;
