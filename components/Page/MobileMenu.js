import { useState } from 'react';
import styled from "styled-components";

export function MobileMenu ({ title, content }) {

  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <MobileMenuWrapper className="mobile-menu">
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
