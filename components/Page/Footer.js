import styled from "styled-components";
import { useRouter } from 'next/router';
import { ContactLinks } from "./ContactLinks";
import { breakpointMobile, breakpointTablet } from "./constants";


export function Footer () {

  return (
    <FooterWrapper>
      <ContactLinks />
    </FooterWrapper>
  )
}


const FooterWrapper = styled.div`
  nav {
    padding: 4vw 0 2vw 0;
    justify-content: center;
    align-items: center;
    gap: 2.5rem; 

  }

  a.link { display:block;
    color: #282828;

    .svg-inline--fa {
      display:inline-block;
      position:relative; 
      transform-origin:center center;
      font-size: 1.75rem;
    }
  }

  @media (max-width: ${breakpointTablet}) {
    padding: 4rem 0 8rem 0;
  }

  @media (max-width: ${breakpointMobile}) {
    height: 0;
    overflow: hidden;
    padding:0;
    margin-bottom: 3.5rem;
  }
`;
