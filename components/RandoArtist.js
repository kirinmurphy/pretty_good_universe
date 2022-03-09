import { useState } from 'react';
import useSWR from 'swr'; 

export function RandoArtist ({ artistList }) {

  // const artistEndpoint = "//localhost:8080/artists"

  // const getData = async () => {
  //   const response = await fetch(artistEndpoint);
  //   return await response.json();
  // };

  // const { data } = useSWR(artistEndpoint, getData);

  // console.log('EEEE', data);

  const initialArtist = getRandomArtist(artistList);
  const [currentArtist, setCurrentArtist] = useState(initialArtist)

  const { 
    name,
    from: {
      city,
      state, 
      country,
    },
    mightAlsoLike 
  } = currentArtist;

  const setNewRelatedArtist = () => {
    const relatedArtist = getRelatedArtist({ artistList, mightAlsoLike });
    setCurrentArtist(relatedArtist);
  }

  const setNewArtist = () => {
    const randomArtist = getRandomArtist(artistList)
    setCurrentArtist(randomArtist);
  }

  return (
    <div id="page">

      <div>
        <span className="link--inverted" onClick={setNewArtist}>Nextguy</span>
      </div>

      <div id="artist-proflie">
        <h1>{name}</h1>
        <div>from: {city}, {state}, {country}</div>
        {!!mightAlsoLike.length && (
          <span 
            className="link--inverted" 
            onClick={setNewRelatedArtist}
          >
            more like {name}
          </span>
        )}
      </div>
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
