import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import {HeroSectionStyles} from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';


function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
            This Week in Alex Town
            </h1>
            <ParagraphText className="hero__text">
            T.W.A.T. is a blog written by a dingus. Don't read it.
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">Explore Blogs</Button>
          </div>
          <div className='right'>
            <StaticImage 
              className='hero__image'
              src="../../images/image1.jpeg"
              alt="vr guy"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>

    </HeroSectionStyles>
  )
}

export default HeroSection