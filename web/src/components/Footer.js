import React from 'react';
import { Link } from 'gatsby';
import { menu } from '../constants/menu';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';
import { socialList } from '../constants/socialList';

function Footer() {
  return (
    <FooterStyles>
      <div className='container'>
        <Logo />
        <ul className='footer__menuList'>
          {menu.map(item => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link></li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialList.map(item => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          An Alex Dollard Creative {new Date().getFullYear()}. All rights reserved.
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;