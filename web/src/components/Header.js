import clsx from "clsx";
import { Link } from "gatsby";
import React, { useState, useContext } from "react";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import { menu } from "../constants/menu";
import HeaderStyles from "../styles/HeaderStyles";
import ActionButton from "./buttons/ActionButton";
import Logo from "./Logo";
import { SearchModalContext } from "../context/searchModalContext";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { openSearchModal } = useContext(SearchModalContext);

  const handleSearchModalOpen = () => {
    openSearchModal();
  };

  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(falase);
    }
  };

  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <Logo />
          <div className={clsx("nav__wrapper", isNavOpen && "open")}>
            <div className="mobileIcon">
              {/* <div className="searchIcon">
                <div
                  className="searchIcon__wrapper"
                  onClick={handleSearchModalOpen}
                  onKeyDown={handleSearchModalOpen}
                  role="button"
                  tabIndex={0}
                >
                  <MdSearch
                    style={{
                      fontSize: "30px",
                      maxHeight: "30px",
                      maxWidth: "30px",
                      height: "30px",
                      width: "30px",
                    }}
                  />
                </div>
              </div> */}
              <ActionButton
                className="mobileMenuBtn"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <MdMenu
                  style={{
                    fontSize: "30px",
                    maxHeight: "30px",
                    maxWidth: "30px",
                    height: "30px",
                    width: "30px",
                  }}
                />
              </ActionButton>
            </div>
            {isNavOpen && (
              <div
                className="mobileNavBg"
                aria-label="close menu"
                role="button"
                tabIndex={0}
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              />
            )}
            <nav>
              <ActionButton
                className="mobileMenuCloseBtn"
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              >
                <MdClose
                  style={{
                    fontSize: "30px",
                    maxHeight: "30px",
                    maxWidth: "30px",
                    height: "30px",
                    width: "30px",
                  }}
                />
              </ActionButton>
              <ul>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={handleNavItemClick}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                {/* <li className="searchIcon">
                  <div
                    className="searchIcon__wrapper"
                    onClick={handleSearchModalOpen}
                    onKeyDown={handleSearchModalOpen}
                    role="button"
                    tabIndex={0}
                  >
                    <MdSearch
                        style={{
                            fontSize: "30px",
                            maxHeight: "30px",
                            maxWidth: "30px",
                            height: "30px",
                            width: "30px",
                            }}
                    />
                  </div>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
