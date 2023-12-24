import clsx from 'clsx';
import { Link } from 'gatsby';
import React, {useState, useContext} from 'react';
import { MdMenu, MdClose } from 'react-icons/md'
import { menu } from '../constants/menu';
import HeaderStyles from '../styles/HeaderStyles';
import ActionButton from './buttons/ActionButton';
import Logo from './Logo';
import { SearchModalContext } from '../context/searchModalContext';


function Header2() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavItemClick= () => {
        if(isNavOpen){
            setIsNavOpen(falase);
        }
    }

  return (
    <HeaderStyles>
        <div className='container'>
        <div className='header__container'>
          <Logo />
          <div className="nav__wrapper">
          <nav>
          <ul>
            {menu.map(item => (
              <li key={item.path}>
                  <Link to={item.path} onClick={handleNavItemClick}>{item.title}</Link>
              </li>
              ))}
          </ul>
          </nav>
          </div>
        </div>
        </div>
    </HeaderStyles>     
  )
}

export default Header2;