import React from 'react';
import LatestBlogs from '../components/homePage/LatestBlogs';
import HeroSection from '../components/homePage/HeroSection';
import SEO from '../components/SEO';
import TopCategories from '../components/homePage/TopCategories';

const IndexPage = () => (
  <>
    <SEO></SEO>
    <HeroSection></HeroSection>
    <div className="container">
      <LatestBlogs/>
      <TopCategories />
    </div>
  </>
  
);

export default IndexPage;
