import styled from 'styled-components';

export function ArtistBio ({ artist }) {
  const { 
    bio,
  } = artist;

  return (
    <ArtistBioWrapper>
      {bio && <div>{bio}</div>}
    </ArtistBioWrapper>
  )
}

const ArtistBioWrapper = styled.div`
  min-height: 4rem;
  margin-bottom: .5rem; 
  font-size: .85rem;
`;
