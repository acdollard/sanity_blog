import React from 'react';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import SEO from '../components/SEO';
import TopCategories from '../components/homePage/TopCategories';

const IndexPage = () => (
  <>
    <SEO></SEO>
    <HeroSection></HeroSection>
    <div className="container">
      <FeaturedBlogs/>
      <TopCategories />
    </div>
  </>
  
);

export default IndexPage;
