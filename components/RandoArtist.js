import { useState } from 'react';

export function RandoArtist ({ artistList }) {

  const initialArtist = getRandomArtist(artistList);
  const [currentArtist, setCurrentArtist] = useState(initialArtist)

  const { name, fromCity, fromState, fromCountry, mightAlsoLike } = currentArtist;

  const setNewArtist = () => {
    const relatedArtist = getRelatedArtist({ artistList, mightAlsoLike });
    setCurrentArtist(relatedArtist);
  }

  return (
    <div id="page">
      <h1>{name}</h1>
      <div>from: {fromCity}, {fromState}, {fromCountry}</div>
      {!!mightAlsoLike.length && (
        <span 
          className="link--inverted" 
          onClick={setNewArtist}
        >
          more like {name}
        </span>
      )}
    </div>
  )
}

function getRandomArtist(artistList) {
  const randomIndex = Math.floor(Math.random() * artistList.length);
  return artistList[randomIndex]
}

function getRelatedArtist({ artistList, mightAlsoLike }) {
  const randomRelatedArtist = getRandomArtist(mightAlsoLike);
  return artistList.filter(artist => artist.name === randomRelatedArtist)[0];
}
