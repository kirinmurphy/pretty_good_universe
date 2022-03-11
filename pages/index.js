import { RandoArtistSwitcher } from '../components/RandoArtistSwitcher';
import { artistList } from '../viewModels/formattedArtistList'

export default function Home({ artistList}) {
  return <RandoArtistSwitcher artistList={artistList} />;
};

export async function getStaticProps () {
  return { props: { artistList } };
}
