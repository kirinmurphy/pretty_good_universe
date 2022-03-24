import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const CONTACT_PATH = '/contact';

export function ContactLinks () {
  return (
    <ContactLinksWrapper>
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
    </ContactLinksWrapper>
  );  
}

const ContactLinksWrapper = styled.nav`
  display:flex; 

  .link {
    margin-right: .5rem;
  }

  .svg-inline--fa {
    font-size: 1.5rem;

    &.fa-mixcloud {
      transform: scale(1.2) translate3d(2px, 0px, 0);
    }

    &.fa-youtube-square {
      transform: scale(1.2, .85);
    }
  }
`;