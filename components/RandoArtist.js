import { useState, useEffect } from 'react';
import { RandoArtistNav } from './RandoArtistNav';
import { RandoArtistProfile } from './RandoArtistProfile';

const LOCAL_STORAGE_KEY = 'pgu_saved';

export function RandoArtist ({ artistList }) {
  const initialArtist = getRandomArtist(artistList);
  const [currentArtist, setCurrentArtist] = useState(initialArtist)
  const [unviewedArtistList, setUnviewedArtistList] = useState(artistList);

  const relatedArtistList = unviewedArtistList
    .filter(filteredArtist => currentArtist.mightAlsoLike.includes(filteredArtist.name))
    .map(artist => artist.name);

  const setNewRelatedArtist = () => {
    const relatedArtist = getRelatedArtist({ unviewedArtistList, relatedArtistList }); 
    setCurrentArtist(relatedArtist);
  }

  const setNewArtist = () => {
    const randomArtist = getRandomArtist(unviewedArtistList)
    setCurrentArtist(randomArtist);
  }

  useEffect(() => {
    addToViewed(currentArtist.name);
    setUnviewedArtistList(() => getUnviewedArtistList(artistList));    
  }, [currentArtist]);
  
  return (
    <div id="page">
      <RandoArtistNav 
        setNewArtist={setNewArtist}
        setNewRelatedArtist={setNewRelatedArtist}
        relatedArtistList={relatedArtistList}
        currentArtistName={currentArtist.name}
      />

      <RandoArtistProfile artist={currentArtist} />
    </div>
  )
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
  const viewed = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const newFilteredList = artistList.filter(artist => !viewed[artist.name]);    
  const hasRemainingArtists = newFilteredList.length > 0;
  if ( !hasRemainingArtists ) { localStorage.removeItem(LOCAL_STORAGE_KEY); }
  return hasRemainingArtists ? newFilteredList : artistList;
}
