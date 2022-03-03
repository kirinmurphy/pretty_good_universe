import { RandoArtist } from '../components/RandoArtist';
import { artistList } from '../data/artistList'

export default function Home({ artistList}) {
  return <RandoArtist artistList={artistList} />;
};

export async function getStaticProps () {
  return { props: { artistList } };
}
