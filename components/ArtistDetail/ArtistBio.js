import styled from 'styled-components';
import { ArtistBioLink } from './ArtistBioLink';

export function ArtistBio ({ artist }) {
  const { 
    bio,
  } = artist;

  return (
    <ArtistBioWrapper>
      {bio && (
        <div>
          {bio}
          <ArtistBioLink artist={artist} />

        </div>
      )}

    </ArtistBioWrapper>
  )
}

const ArtistBioWrapper = styled.div`
  min-height: 4rem;
  margin-bottom: .5rem; 
  font-size: .85rem;

  a { margin-left: .5rem; }
`;

