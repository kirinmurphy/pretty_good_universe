import { useState, useEffect } from 'react';
import { RandoArtistNav } from './RandoArtistNav';
import { RandoArtistProfile } from './RandoArtistProfile';

const LOCAL_STORAGE_KEY = 'pgu_saved';

export function RandoArtist ({ artistList }) {
  const [catalogState, setCatalogState] = useState({
    currentArtist: null,
    unviewedArtists: []
  });

  const relatedArtistList = !!catalogState.currentArtist 
    && !!catalogState.unviewedArtistList
    && catalogState.unviewedArtistList
      .filter(filteredArtist => catalogState.currentArtist.mightAlsoLike.includes(filteredArtist.name))
      .map(artist => artist.name);

  console.log('RAL', catalogState.unviewedArtistList);

  const updateCatalog = (newArtist) => {
    addToViewed(catalogState.currentArtist.name);
    setCatalogState({
      currentArtist: newArtist,
      unviewedArtists: getUnviewedArtistList(artistList),
    });
  };

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

  useEffect(() => {
    const u = getUnviewedArtistList(artistList);
    console.log('wooop', u);
    setCatalogState({
      unviewedArtists: u,
      currentArtist: getRandomArtist(artistList)
    })
  }, [])
  
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

function getRandomArtist(unviewedArtistList) {
  const randomIndex = Math.floor(Math.random() * unviewedArtistList.length);
  return unviewedArtistList[randomIndex];
}

function getRelatedArtist({ unviewedArtistList, relatedArtistList }) {
  const randomRelatedArtist = getRandomArtist(relatedArtistList);
  return unviewedArtistList.filter(artist => artist.name === randomRelatedArtist)[0];
}

function addToViewed(artistName) {
  const viewed = localStorage.getItem(LOCAL_STORAGE_KEY);
  let json = {};
  if ( viewed ) { json = JSON.parse(viewed); }
  json[artistName] = true;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(json));
}

function getUnviewedArtistList (artistList) {
  const viewed = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  console.log('viewed', viewed);
  const newFilteredList = artistList.filter(artist => !viewed[artist.name]);    
  const hasRemainingArtists = newFilteredList.length > 0;
  if ( !hasRemainingArtists ) { localStorage.removeItem(LOCAL_STORAGE_KEY); }
  return hasRemainingArtists ? newFilteredList : artistList;
}
