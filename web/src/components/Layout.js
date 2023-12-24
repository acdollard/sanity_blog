import React from 'react'
import { SearchModalContext, SearchModalContextProvider } from '../context/searchModalContext';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import Search from './search/SearchModal';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
    <GlobalStyles/>

    <Header />
    {children}
    <Footer></Footer>
    </SearchModalContextProvider>
  );
  
};

export default Layout;

