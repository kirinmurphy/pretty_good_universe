import { ContactInfoWrapper } from "../styles/ContactInfoWrapper";

import '../utils/fontAwesomeLibrary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialMediaLinks = [
  {
    href: 'https://www.youtube.com/channel/UC9wZyNh1lPQsJDcl9vX7OSA',
    icon: ['fab', 'youtube-square']
  },
  {
    href: 'https://www.facebook.com/GregMurphyGroup',
    icon: ['fab', 'facebook-square']
  },
  {
    href: 'https://www.instagram.com/g_skippy/',
    icon: ['fab', 'instagram']
  },
  {
    href: 'https://twitter.com/gregmurphymusic',
    icon: ['fab', 'twitter-square']
  }

];

export function ContactInfo () {
  
  return (
    <ContactInfoWrapper>
      <div className="split-row">
        <div className="bookings-and-lessons">
          <FontAwesomeIcon icon={['fas', 'envelope']} />
          <div className="message"> For <strong>booking inquiries, email Marz Jazz Booking Agency</strong> 
            {' '}
            <a href="mailto: reggie@marsjazz.com">reggie@marsjazz.com</a> 
          </div>
          <div className="message"> For <strong>all other inquiries, contact Greg Murphy Music</strong> 
            {' '}
            <a href="mailto: greglm3@yahoo.com">greglm3@yahoo.com</a>
          </div>
        </div>
        
        <div className="contact-links">
          {socialMediaLinks.map(({ href, icon }) => {
            return (
              <a target="_blank" href={href} key={href}>
                <FontAwesomeIcon icon={icon} />
              </a>  
            );
          })}
        </div>
      </div>
      
      <div className="photo-attribution">
        Marquee photo by <a target="_blank" href="https://www.facebook.com/ILovePhotographyTooMuch">Richard Ryals</a>
      </div>
    </ContactInfoWrapper>

  );
};

function SocialMediaLink ({ href, icon }) {
  return (
    <a target="_blank" href={href}>
      <FontAwesomeIcon icon={icon} />
    </a>

  );
}
