import styled from 'styled-components';
import { DiscogsPreview } from './DiscogsPreview';
import { breakpointMobile, breakpointTablet } from '../Page/constants';

const LONG_NAME_CHARACTER_START = 20;

export function ArtistDetail ({ artist }) {
  const { 
    name,
    from,
    discogsId,
    bio,
  } = artist;

  const hasLongName = name.length > LONG_NAME_CHARACTER_START;

  return (
    <>
      <ArtistTitleBar>
        <h2 className={hasLongName ? "long-name" : ""}>{name}</h2>
        <div>{from}</div>
      </ArtistTitleBar>
    
      <ArtistMarqueeWrapper>
        {bio && <div>{bio}</div>}
        {!bio && discogsId && <DiscogsPreview discogsId={discogsId} />}
      </ArtistMarqueeWrapper>
    </>
  )
}

const ArtistMarqueeWrapper = styled.div`
  min-height: 4rem;
  margin-bottom: .5rem; 
  font-size: .85rem;
`;

const ArtistTitleBar = styled.div`
  margin-bottom: .75vw;
  
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
