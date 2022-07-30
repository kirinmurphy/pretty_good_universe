import { ArtistTitle } from './ArtistTitle';
import { ArtistBio } from './ArtistBio';

export function ArtistDetail ({ artist }) {

  return (
    <>
      <ArtistTitle artist={artist} />
      <ArtistBio artist={artist} />
    </>
  )
}
