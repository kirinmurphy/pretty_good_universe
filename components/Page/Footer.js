// do i need to import this in numerous places or just once globally? 
import '../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { marqueeBreakpoint } from '../RandoArtistSwitcher/RandoArtistProfile';

export function Footer () {
  return (
    <FooterWrapper>
      <a target="_blank" href="//youtube.com/outsidesounds">
        <FontAwesomeIcon icon={['fab', 'youtube-square']} />
      </a>
      {/* <a target="_blank" href="//mixcloud.com/kirinmurphy">
        <FontAwesomeIcon icon={['fab', 'mixcloud']} />
      </a>       */}
      <a href="/contact">
        <FontAwesomeIcon icon={['fas', 'envelope']} />
      </a>      
      {/* <a target="_blank" href="//discogs">
        discogs
      </a> */}
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display:flex;
  padding: 4vw 0 2vw 0;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  a { display:block;
    color: #222;

    .svg-inline--fa {
      display:inline-block;
      position:relative; 
      transform-origin:center center;
      width: 2rem;

      &.fa-mixcloud {
        transform: scale(1.4) translate3d(2px, 0px, 0);
      }

      &.fa-youtube-square {
        transform: scale(1.1, .81);
      }
    }
  }

  @media (max-width: ${marqueeBreakpoint}) {
    padding: 4rem 0 8rem 0;
  }
`;
