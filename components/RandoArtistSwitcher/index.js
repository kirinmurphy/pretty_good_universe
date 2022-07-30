import { useState, useEffect } from 'react';
import { RandoArtist } from './RandoArtist';
import { getRandomArtist } from './utils';
import { MobileNoticerThing } from '../MobileNoticerThing';

const LOCAL_STORAGE_KEY = 'pgu_saved';

export function RandoArtistSwitcher ({ artistList }) {  
  const [catalogState, setCatalogState] = useState({
    currentArtist: null,
    unviewedArtists: []
  });

  const updateCatalog = (newArtist) => {
    addToViewed(newArtist.name);
    setCatalogState({
      currentArtist: newArtist,
      unviewedArtists: getUnviewedArtistList(artistList),
    });
  };

  useEffect(() => {
    updateCatalog(getRandomArtist(artistList));
  }, [])

  return !!catalogState.currentArtist ? (
    <>
      <RandoArtist 
        catalogState={catalogState}
        updateCatalog={updateCatalog}
      />
      <MobileNoticerThing />    
    </>
  ) : <></>;
}

function addToViewed(artistName) {
  const viewed = localStorage.getItem(LOCAL_STORAGE_KEY);
  const json = viewed ? JSON.parse(viewed) : {};
  json[artistName] = true;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(json));
}

function getUnviewedArtistList (artistList) {
  const viewed = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  const newFilteredList = artistList.filter(artist => !viewed[artist.name]);    
  const hasRemainingArtists = newFilteredList.length > 0;
  if ( !hasRemainingArtists ) { localStorage.removeItem(LOCAL_STORAGE_KEY); alert("dang you finished!") }
  console.log('nfl.length', newFilteredList.length);
  return hasRemainingArtists ? newFilteredList : artistList;
}
