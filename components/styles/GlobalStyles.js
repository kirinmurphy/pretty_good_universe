import { createGlobalStyle } from 'styled-components';
import { breakpointTablet } from '../Page/constants';

export const GlobalStyles = createGlobalStyle`
  * { 
    -webkit-text-size-adjust: 100%;
  }

  body { 
    background:#000;
    /* font-family: "Josefin Sans", Arial, Verdana, sans-serif;
    font-family: "Inconsolata", Arial, Verdana, sans-serif;
    font-family: "Monda", Arial, Verdana, sans-serif; */
    font-family: "Baloo 2", Arial, Verdana, sans-serif;

    -webkit-overflow-scrolling: touch;
    min-width:320px;
    color: #fff;

    /* &:after {
      content: "";
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-image: url("/images/bg_space2.png");
      background-position: left top;
      background-repeat: no-repeat;
      background-size: cover;
      opacity:.15;
    }

    > * {
      position: relative; 
      z-index: 2;
    } */
  }

  a { 
    color: inherit;
    cursor:pointer; 
    text-decoration:none; 
    color:#38d; 
    cursor:pointer; 
  }

  p {
    margin-bottom:1rem;
  }

  ul, li { 
    list-style-type:none; 
  }

  h1 { 
    font-size: 1.75rem;   
  }

  .intro { 
    font-size:1.1rem; 
    color:#999; 
    text-transform:uppercase; 
  }

  .panel--dark {
    a,
    .link {
      cursor: pointer;

      color: #acf; 

      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
  }

  #page {
    position: relative; 
    z-index: 2;
    padding: 2vw 3vw;
    max-width:950px;
    margin-left: auto;
    margin-right: auto;
  }

  #bg {    
    position: fixed;
    left:0; 
    top:0;
    width: 100%;
    height:100%;
    border: 0;
    z-index:1;

    @media (max-width: ${breakpointTablet}) { 
      display:none;
    }
  }
`;
