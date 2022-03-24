import styled from "styled-components";
import { breakpointMobile, breakpointMobileUp, breakpointTablet } from "./constants";

export const SiteHeaderWrapper = styled.div`
  display:flex;
  flex-direction: row;
  padding-bottom: 1.5vw;
  margin-bottom: 1vw;
  border-bottom: 1px solid #333;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
  }
  
  .nav-wrapper {
    margin-bottom: .25rem;

    &:after {
      content: "";
      clear: both;
      display: block;
    }    

    > * { float:right;
      &:first-of-type { padding-right: 0; }
    }

    span {
      padding: 0 .5rem;
    }

    .related-artist-link {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @media (min-width: 651px) { max-width: 55vw }
      @media (max-width: 650px) { max-width: 48vw; } 
      @media (max-width: 600px) { max-width: 45vw; } 
      @media (max-width: ${breakpointMobile}) { max-width: 60vw; } 
      @media (max-width: 450px) { max-width: 56vw; } 
      @media (max-width: 400px) { max-width: 50vw; } 
      @media (max-width: 350px) { max-width: 46vw; } 
      @media (max-width: 320px) { max-width: 145px; } 
    }
  }

  @media (max-width: ${breakpointTablet}) {
    position:fixed;
    background: #222832;
    z-index:100;
    bottom:0; 
    left:0; 
    right:0;
    min-width: 320px;
    padding:0 1rem;
    margin-bottom: 0;

    > h1,
    .mobile-menu,
    .nav-wrapper > span {
      padding: .75rem .5rem;
    }

    h1,
    .mobile-menu { 
      padding-left: 0; 
    }

    .nav-wrapper {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${breakpointMobileUp}) {
    .mobile-menu {
      display:none;
    }
  }

  @media (max-width: ${breakpointMobile})  { 
    > h1 { display:none; }
    > div { width:100%; }

    .mobile-menu {
      flex-basis: 50px;
    }

    .mobile-menu dd {
      display: flex;
      flex-direction: column;
      bottom: 3.25rem; 
      left: 0; 
      right: 0;
      padding: 1rem;
      background: #222832;

      h1 {
        margin-bottom: .5rem;
      }

      .link {
        font-size: .9rem;
      }

      .svg-inline--fa {
        margin-right: .5rem;
      }
    }
  } 
`;

