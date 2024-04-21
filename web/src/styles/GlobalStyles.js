import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: #1bb013;
    --secondary: #1CCEE6;
    --darkBlue: #070747; 
    --darkPurple: #0E0034;
    --black-1: #F7F8F3;
    --black-2: #121826;
    --white-1: #C6BED9;
    --gray: #a4b6da;
    --grey: var(--gray);
    --white: white;
    --black: #EAEBE6; 
    --primaryLight: #eeeee4;
    --secondaryLight: #EAEBE6; 

  }
  html{
    font-size: 10px;
  }
  
  body{
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: 'Noto Serif JP', sans-serif;
    background: var(--black-1);
    color: var(--white);
  }
  a{
    text-decoration: none;
    color: var(--darkBlue);
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    
  }
  img, svg{
    height: 100%;
    width: 100%;
  }
  li, ul{
    list-style: none;
  }
`;

export default GlobalStyles;




//extra styles 

// --primary: #1bb013;
// --secondary: #24e9ff;
// --darkBlue: #070747; 
// --darkPurple: #0E0034;
// --black-1: #0D121F;
// --black-2: #121826;
// --white-1: #C6BED9;
// --gray: #64718A;
// --grey: var(--gray);
// --white: white;
// --black: black;