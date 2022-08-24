import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faList } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useRouter } from "next/router";

export const CONTACT_PATH = '/contact';
export const routes = {
  contact: '/contact',
  artistList: '/artists',
  homepage: '/'
}


export function ContactLinks () {
  const router = useRouter();
  const onHomePage = router.pathname === '/';

  return (
    <ContactLinksWrapper>
      {!onHomePage && (
        <a className="link" href={routes.homepage}>
          <FontAwesomeIcon icon={faHome} />
        </a>
      )}
  
      <a className="link" href={routes.artistList}>
        <FontAwesomeIcon icon={faList} />
      </a>

      <a className="link" target="_blank" href="//youtube.com/outsidesounds">
        <FontAwesomeIcon icon={faYoutubeSquare} />
      </a>

      <a className="link" target="_blank" href="//www.instagram.com/prettygooduniverse/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>      

      <a className="link" href={routes.contact}>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>      
    </ContactLinksWrapper>
  );  
}

const ContactLinksWrapper = styled.nav`
  display:flex; 

  .link {
    margin-right: .5rem;
  }

  .svg-inline--fa {
    font-size: .75rem;

    &.fa-mixcloud {
      transform: scale(1.2) translate3d(2px, 0px, 0);
    }

    &.fa-youtube-square {
      transform: scale(1.2, .85);
    }
  }
`;