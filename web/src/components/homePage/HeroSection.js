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
              Fuck my ass please please please
            </h1>
            <ParagraphText className="hero__text">
              gimmie that body baby letme lick you 
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">Explore Blogs</Button>
          </div>
          <div className='right'>
            <StaticImage 
              className='hero__image'
              src="../../images/vr-guy.jpg"
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