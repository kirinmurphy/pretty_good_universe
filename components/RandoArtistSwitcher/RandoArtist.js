import { RandoArtistNav } from './RandoArtistNav';
import { RandoArtistProfile } from './RandoArtistProfile';
import { getRandomArtist, getRelatedArtist } from './utils';

export function RandoArtist ({ catalogState, updateCatalog }) {

  const relatedArtistList = !!catalogState.currentArtist 
    && !!catalogState.unviewedArtistList
    && catalogState.unviewedArtistList
      .filter(filteredArtist => catalogState.currentArtist.mightAlsoLike.includes(filteredArtist.name))
      .map(artist => artist.name);

  console.log('RAL', catalogState.unviewedArtistList);

  const setNewRelatedArtist = () => {
    const relatedArtist = getRelatedArtist({ 
      unviewedArtistList: catalogState.unviewedArtists, 
      relatedArtistList 
    }); 
    updateCatalog(relatedArtist);
  }

  const setNewArtist = () => {
    const randomArtist = getRandomArtist(catalogState.unviewedArtists)
    updateCatalog(randomArtist);
  }

  return !!catalogState.currentArtist ? (
    <div id="page">
      <RandoArtistNav 
        setNewArtist={setNewArtist}
        setNewRelatedArtist={setNewRelatedArtist}
        relatedArtistList={relatedArtistList}
        currentArtistName={catalogState.currentArtist.name}
      />

      <RandoArtistProfile artist={catalogState.currentArtist} />
    </div>
  ) : <></>;
}
