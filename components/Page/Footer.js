import styled from "styled-components";
import { useRouter } from 'next/router';
import { ContactLinks, CONTACT_PATH } from "./ContactLinks";
import { breakpointMobile, breakpointTablet } from "./constants";


export function Footer () {
  const router = useRouter();

  const onContactPath = router.pathname === CONTACT_PATH;

  return (
    <FooterWrapper>
      {!onContactPath && <ContactLinks />}
    </FooterWrapper>
  )
}


const FooterWrapper = styled.div`
  display:flex;
  padding: 4vw 0 2vw 0;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  a.link { display:block;
    color: #282828;

    .svg-inline--fa {
      display:inline-block;
      position:relative; 
      transform-origin:center center;
      font-size: 2.5rem;

      &.fa-mixcloud {
        transform: scale(1.2) translate3d(2px, 0px, 0);
      }

      &.fa-youtube-square {
        transform: scale(1.2, .85);
      }
    }
  }

  @media (max-width: ${breakpointTablet}) {
    padding: 4rem 0 8rem 0;
  }

  @media (max-width: ${breakpointMobile}) {
    display:none;
  }
`;
