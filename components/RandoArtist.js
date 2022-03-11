import { useState, useEffect } from 'react';
import { RandoArtistNav } from './RandoArtistNav';
import { RandoArtistProfile } from './RandoArtistProfile';

const LOCAL_STORAGE_KEY = 'pgu_saved';

export function RandoArtist ({ artistList }) {
  const [currentArtist, setCurrentArtist] = useState(null)
  const [unviewedArtistList, setUnviewedArtistList] = useState(artistList);

  const [catalogState, setCatalogState] = useState({
    currentArtist: null,
    unviewedArtists: []
  });

  // if ( !currentArtist && catalogState.currentArtist ) {}
  console.log('EEEartists', currentArtist?.name, catalogState.currentArtist?.name);
  console.log('UVAL', unviewedArtistList, catalogState.unviewedArtists);

  const relatedArtistList = !!currentArtist && unviewedArtistList
    .filter(filteredArtist => currentArtist.mightAlsoLike.includes(filteredArtist.name))
    .map(artist => artist.name);

  const updateCatalog = (newArtist) => {
    addToViewed(currentArtist.name);
    setCatalogState({
      currentArtist: newArtist,
      unviewedArtists: getUnviewedArtistList(artistList),
    });
  };

  const setNewRelatedArtist = () => {
    console.log('SNRA');
    const relatedArtist = getRelatedArtist({ unviewedArtistList, relatedArtistList }); 
    setCurrentArtist(relatedArtist);
    updateCatalog(relatedArtist);
  }

  const setNewArtist = () => {
    console.log('SNA');
    const randomArtist = getRandomArtist(unviewedArtistList)
    setCurrentArtist(randomArtist);
    updateCatalog(randomArtist);
  }

  useEffect(() => {
    const newArtist = getRandomArtist(artistList);
    setCatalogState({
      unviewedArtists: getUnviewedArtistList(artistList),
      currentArtist: newArtist
    })
    setCurrentArtist(newArtist);
  }, [])

  useEffect(() => {
    if ( !!currentArtist ) {
      console.log('---------- HWENN?!!!!! -------')
      addToViewed(currentArtist.name);
      setUnviewedArtistList(() => getUnviewedArtistList(artistList));      
    } else {
    }
  }, [currentArtist]);
  
  return !!currentArtist ? (
    <div id="page">
      <RandoArtistNav 
        setNewArtist={setNewArtist}
        setNewRelatedArtist={setNewRelatedArtist}
        relatedArtistList={relatedArtistList}
        currentArtistName={currentArtist.name}
      />

      <RandoArtistProfile artist={currentArtist} />
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
  const newFilteredList = artistList.filter(artist => !viewed[artist.name]);    
  const hasRemainingArtists = newFilteredList.length > 0;
  if ( !hasRemainingArtists ) { localStorage.removeItem(LOCAL_STORAGE_KEY); }
  return hasRemainingArtists ? newFilteredList : artistList;
}
