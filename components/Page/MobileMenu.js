import { useCallbackOnExternalEventTrigger } from 'codethings-react-ui';
import { useRef, useState } from 'react';
import styled from "styled-components";

export function MobileMenu ({ title, content }) {
  const dropdownRef = useRef(null);

  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  useCallbackOnExternalEventTrigger(dropdownRef, () => {
    if ( isMenuActive ) { setIsMenuActive(false); }
  });

  return (
    <MobileMenuWrapper 
      className="mobile-menu" 
      ref={dropdownRef}>
      
      <dt onClick={toggleMobileMenu}>{title}</dt>
      {isMenuActive && <dd>{content}</dd>}
    </MobileMenuWrapper>
  );
}

const MobileMenuWrapper = styled.dl`
  position: relative;

  dt {
    cursor: pointer;
  }

  dd {
    position: fixed;
  }
`;
