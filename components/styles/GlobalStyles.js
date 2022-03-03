import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * { 
    -webkit-text-size-adjust: 100%;
  }

  body { 
    background:#000;
    font-family: "Lato", Arial, Verdana, sans-serif;
    -webkit-overflow-scrolling: touch;
    min-width:320px;
    color: #fff;
  }

  a { 
    color: inherit;
    cursor:pointer; 
    text-decoration:none; 
    color:#38d; 
    cursor:pointer; 

    &:hover { 
      text-decoration:underline; 
      color: #fff;
    }
  }

  p {
    margin-bottom:1rem;
  }

  ul, li { 
    list-style-type:none; 
  }

  .intro { 
    font-size:1.1rem; 
    color:#999; 
    text-transform:uppercase; 
  }

  .link--inverted {
    cursor: pointer;

    color: #acf; 

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;
