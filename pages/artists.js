import styled from 'styled-components';
import { ArtistDetail } from '../components/ArtistDetail'
import { artistList } from '../viewModels/formattedArtistList'

export default function Home({ artistList }) {
  return <>
    {artistList.map(artist => (
      <ArtistDetailListWrapper>
        <ArtistDetail artist={artist} />
      </ArtistDetailListWrapper>
    ))}
  </>;
};

export async function getStaticProps () {
  return { props: { artistList } };
}

const ArtistDetailListWrapper = styled.div`
  margin-bottom: 1rem;
`;