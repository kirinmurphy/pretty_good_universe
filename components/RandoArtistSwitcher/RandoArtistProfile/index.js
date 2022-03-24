import styled from 'styled-components';
import { DiscogsPreview } from './DiscogsPreview';
import { YoutubePlayer } from '../../YoutubePlayer';
import { breakpointFull, breakpointTablet } from '../../Page/constants';

export function RandoArtistProfile ({ artist, onPlaylistEnd }) {
  const { 
    name,
    from,
    discogsId,
    youtubeClips,
    avatar
  } = artist;

  return (
    <div id="artist-profile">
      <ArtistTitleBar>
        <h1>{name}</h1>
        <div>{from}</div>
      </ArtistTitleBar>
    
      <ArtistMarqueeWrapper>
        {discogsId && <DiscogsPreview discogsId={discogsId} />}
      </ArtistMarqueeWrapper>

      {!!youtubeClips && !!youtubeClips.length && (
        <YoutubePlayer 
          videos={youtubeClips}  
          onPlaylistEnd={onPlaylistEnd}
        />
      )}
    </div>
  )
}

const ArtistMarqueeWrapper = styled.div`
  min-height: 3.5rem;
  margin-bottom: .5rem; 
  font-size: .85rem;

  @media (max-width: ${breakpointFull}) { min-height: calc(7rem - 5vw); }
  @media (max-width: ${breakpointTablet}) { min-height: calc(9rem - 10vw); }
`;

const ArtistTitleBar = styled.div`
  margin-bottom: 1vw;
  
  > * { 
    display: inline-block; 
    
    &:first-of-type { margin-right: 1rem; }
  }
`;
