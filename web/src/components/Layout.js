import React from 'react'
import { SearchModalContext, SearchModalContextProvider } from '../context/searchModalContext';
import GlobalStyles from '../styles/GlobalStyles';
import Header2 from './Header2';
import Footer from './Footer';
import Search from './search/SearchModal';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
    <GlobalStyles/>

    <Header2 />
    {children}
    <Footer></Footer>
    </SearchModalContextProvider>
  );
  
};

export default Layout;

