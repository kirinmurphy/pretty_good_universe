import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactLinks } from "../Page/ContactLinks";
import { Logo } from "../Page/Logo";
import { MobileMenu } from "../Page/MobileMenu";
import { SiteHeaderWrapper } from "../Page/SiteHeaderWrapper";

export function RandoArtistNav (props) {  
  const { 
    setNewArtist, 
    setNewRelatedArtist, 
    relatedArtistList, 
    currentArtistName 
  } = props;

  return (
    <SiteHeaderWrapper>
      <MobileMenu
        title={<FontAwesomeIcon icon={faBars} />}
        content={<>
          <ContactLinks />          
        </>}
      />              
      <Logo />
      
      <div className="nav-wrapper">
        <span 
          className="link" 
          onClick={setNewArtist}>
            new orbit
        </span>

        {!!relatedArtistList.length && (
          <>
            <span>{' | '}</span>
            <span 
              className="link related-artist-link" 
              onClick={setNewRelatedArtist}
            >
              more like {currentArtistName}
            </span>          
          </>                
        )}
      </div>
    </SiteHeaderWrapper>
  )
}

