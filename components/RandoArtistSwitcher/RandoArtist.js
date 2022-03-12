import { RandoArtistNav } from './RandoArtistNav';
import { RandoArtistProfile } from './RandoArtistProfile';
import { getRandomArtist, getRelatedArtist } from './utils';

export function RandoArtist ({ catalogState, updateCatalog }) {

  console.log('catalogState.currentArtist: ', catalogState.currentArtist.name);

  const { 
    currentArtist,
    currentArtist: {
      name,
      mightAlsoLike
    }, 
    unviewedArtists 
  } = catalogState; 

  const relatedArtistList = unviewedArtists
    .filter(artist => mightAlsoLike.includes(artist.name))
    .map(artist => artist.name);

  const setNewRelatedArtist = () => {
    const newArtist = getRelatedArtist({ unviewedArtists, relatedArtistList }); 
    updateCatalog(newArtist);
  }

  const setNewArtist = () => {
    const newArtist = getRandomArtist(unviewedArtists);
    updateCatalog(newArtist);
  }

  return !!currentArtist ? (
    <div id="page">
      <RandoArtistNav 
        setNewArtist={setNewArtist}
        setNewRelatedArtist={setNewRelatedArtist}
        relatedArtistList={relatedArtistList}
        currentArtistName={name}
      />

      <RandoArtistProfile artist={currentArtist} />
    </div>
  ) : <></>;
}
