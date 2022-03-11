import styled from 'styled-components';
import { DiscogsPreview } from './DiscogsPreview';
import { YoutubeVids } from './YoutubePlayer';

export function RandoArtistProfile ({ artist }) {
  const { 
    name,
    from,
    discogsId,
    youtubeClips,
    avatar
  } = artist;

  console.log('artist', JSON.parse(JSON.stringify(artist)));

  return (
    <div id="artist-profile">
      <ArtistTitleBar>
        <h1>{name}</h1>
        <div>{from}</div>
      </ArtistTitleBar>
    
      <ArtistMarqueeWrapper>
        <ArtistAvatarWrapper>
          {avatar && <img src={`/images/${avatar}`} />}
        </ArtistAvatarWrapper>

        {discogsId && <DiscogsPreview discogsId={discogsId} />}
      </ArtistMarqueeWrapper>

      {!!youtubeClips && !!youtubeClips.length && (
        <YoutubeVids videos={youtubeClips} />
      )}
    </div>
  )
}

const marqueeBreakpoint = '730px';

const ArtistAvatarWrapper = styled.div`
  img { width: 100%; }

  @media (min-width:${marqueeBreakpoint}) {
    max-width: 300px;
  }  
`;

const ArtistMarqueeWrapper = styled.div`
  > * {
    margin-bottom: 1rem; 
  }

  @media (min-width:${marqueeBreakpoint}) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }  
`;

const ArtistTitleBar = styled.div`
  padding: 1rem 0;

  > * { display: inline-block; 
    &:first-of-type { margin-right: 1rem; }
  }


`;