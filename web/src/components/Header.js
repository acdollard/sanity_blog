import clsx from 'clsx';
import { Link } from 'gatsby';
import React, {useState, useContext} from 'react';
import { MdSearch, MdMenu, MdClose } from 'react-icons/md'
import { menu } from '../constants/menu';
import HeaderStyles from '../styles/HeaderStyles';
import ActionButton from './buttons/ActionButton';
import Logo from './Logo';
import { SearchModalContext } from '../context/searchModalContext';


function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const { openSearchModal } = useContext(SearchModalContext);

    const handleSearchModalOpen = () => {
        openSearchModal();
    }

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
                <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
                    <nav>
                        {/* <ActionButton className='mobileMenuCloseBtn'
                            onClick={() => setIsNavOpen(false)}
                            onKeyDown={() => setIsNavOpen(false)}
                            >
                            <MdClose/>    
                        </ActionButton>    */}
                        <ul>    
                            {menu.map(item => (
                            <li key={item.path}>
                                <Link to={item.path} onClick={handleNavItemClick}>{item.title}</Link>
                            </li>
                            ))}
                            {/* <li className='searchIcon'> 
                                <div className='searchIcon__wrapper'
                                onClick={handleSearchModalOpen}
                                onKeyDown={handleSearchModalOpen}
                                role="button"
                                tabIndex={0}
                                >
                                <MdSearch />
                                </div>
                            </li> */}
                        </ul>
                    </nav>
                </div>    
            </div>
        </div>


    </HeaderStyles>     
  )
}

export default Header;