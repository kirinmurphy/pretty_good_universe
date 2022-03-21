import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { marqueeBreakpoint } from '../RandoArtistSwitcher/RandoArtistProfile';
import { useRouter } from 'next/router';
import { faMixcloud, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const CONTACT_PATH = '/contact';

export function Footer () {

  const router = useRouter();

  const onContactPath = router.pathname === CONTACT_PATH;

  return (
    <FooterWrapper>
      {!onContactPath && (
        <>
          <a className="link" target="_blank" href="//youtube.com/outsidesounds">
            <FontAwesomeIcon icon={faYoutubeSquare} />
          </a>

          {/* <a className="link" target="_blank" href="//mixcloud.com/kirinmurphy">
            <FontAwesomeIcon icon={faMixcloud} />
          </a> */}

          <a className="link" href={CONTACT_PATH}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>      

          {/* <a className="link" target="_blank" href="//discogs">
            discogs
          </a> */}        
        </>
      )}
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

  @media (max-width: ${marqueeBreakpoint}) {
    padding: 4rem 0 8rem 0;
  }
`;
