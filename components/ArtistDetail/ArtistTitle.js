import styled from 'styled-components';
import { breakpointMobile, breakpointTablet } from '../Page/constants';

const LONG_NAME_CHARACTER_START = 20;

export function ArtistTitle ({ artist }) {
  const { 
    name,
    from,
  } = artist;

  const hasLongName = name.length > LONG_NAME_CHARACTER_START;

  return (
    <ArtistTitleBar>
      <h2 className={hasLongName ? "long-name" : ""}>{name}</h2>
      <div>{from}</div>
    </ArtistTitleBar>
  )
}

const ArtistTitleBar = styled.div`  
  h2 {
    font-size: 1.75rem;
  } 

  @media (max-width: ${breakpointTablet}) { h2.long-name { font-size: 1.5rem; } }
  @media (max-width: ${breakpointMobile}) { h2.long-name { font-size: 1.25rem; } }

  > * { 
    display: inline-block; 
    
    &:first-of-type { margin-right: 1rem; }
  }
`;
