import { SmallScreenView, WideScreenView } from '../../Page/ScreenViews';
import { YoutubePlayer } from '../../YoutubePlayer';
import { ArtistTitle } from '../../ArtistDetail/ArtistTitle';
import { ArtistBio } from '../../ArtistDetail/ArtistBio';
import styled from 'styled-components';

export function RandoArtistProfile ({ artist, onPlaylistEnd }) {
  const { youtubeClips } = artist;

  return (
    <>
      <ArtistTitle artist={artist} />

      <WideScreenView>
        <ArtistBio artist={artist} />
      </WideScreenView>

      {!!youtubeClips && !!youtubeClips.length && (
        <YoutubePlayer 
          videos={youtubeClips}  
          onPlaylistEnd={onPlaylistEnd}
        />
      )}

      <SmallScreenView>
        <SmallScreenBioWrapper>
          <ArtistBio artist={artist} />
        </SmallScreenBioWrapper>
      </SmallScreenView>
    </>
  )
}

const SmallScreenBioWrapper = styled.div`
  padding: 1rem 0;
`;
