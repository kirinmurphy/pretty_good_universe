import { ArtistDetail } from '../components/ArtistDetail'
import { artistList } from '../viewModels/formattedArtistList'

export default function Home({ artistList }) {
  return <>
    {artistList.map(artist => (
      <ArtistDetail artist={artist} />
    ))}
  </>;
};

export async function getStaticProps () {
  return { props: { artistList } };
}
