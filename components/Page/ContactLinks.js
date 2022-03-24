import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const CONTACT_PATH = '/contact';

export function ContactLinks ({ showText = false }) {
  return (
    <>
      <a className="link" target="_blank" href="//youtube.com/outsidesounds">
        <FontAwesomeIcon icon={faYoutubeSquare} />
        {!!showText && <> youtube.com/outsidesounds</>}
      </a>

      {/* <a className="link" target="_blank" href="//mixcloud.com/kirinmurphy">
        <FontAwesomeIcon icon={faMixcloud} />
        {!!showText && <> mixcloud.com/kirinmurphy</>}
      </a> */}

      <a className="link" href={CONTACT_PATH}>
        <FontAwesomeIcon icon={faEnvelope} />
        {!!showText && <> contact</>}
      </a>      

      {/* <a className="link" target="_blank" href="//discogs">
        discogs
      </a> */}        
    </>
  );  
}
