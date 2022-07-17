import { MobileNoticerThing } from '../components/MobileNoticerThing';
import { RandoArtistSwitcher } from '../components/RandoArtistSwitcher';
import { artistList } from '../viewModels/formattedArtistList'

export default function Home({ artistList}) {
  return (
    <>
      <MobileNoticerThing />
      <RandoArtistSwitcher artistList={artistList} />
    </>
  );
};

export async function getStaticProps () {
  return { props: { artistList } };
}
