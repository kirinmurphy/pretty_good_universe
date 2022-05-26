import styled from 'styled-components';
import { YoutubePlayer } from '../../YoutubePlayer';
import { breakpointMobile, breakpointTablet } from '../../Page/constants';
import { ArtistDetail } from '../../ArtistDetail';

const LONG_NAME_CHARACTER_START = 20;

export function RandoArtistProfile ({ artist, onPlaylistEnd }) {
  const { youtubeClips } = artist;

  return (
    <div id="artist-profile">
      <ArtistDetail artist={artist} />

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
  min-height: 4rem;
  margin-bottom: .5rem; 
  font-size: .85rem;
`;

const ArtistTitleBar = styled.div`
  margin-bottom: 1vw;
  
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
