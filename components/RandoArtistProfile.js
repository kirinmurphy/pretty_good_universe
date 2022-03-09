import { DiscogsPreview } from './DiscogsPreview';

export function RandoArtistProfile (props) {
  const { 
    setNewArtist, 
    setNewRelatedArtist,
    relatedArtistList,
    artist: { 
      name,
      from: {
        city,
        state, 
        country,
      },
      discogsId
    }
  } = props; 

  return (
    <div id="page">
      <div>
        <span 
          className="link--inverted" 
          onClick={setNewArtist}>
            Nextguy
        </span>
      </div>

      <div id="artist-proflie">
        <h1>{name}</h1>
        <div>from: {city}, {state}, {country}</div>
        
        {!!relatedArtistList.length && (
          <span 
            className="link--inverted" 
            onClick={setNewRelatedArtist}
          >
            more like {name}
          </span>
        )}

        {discogsId && <DiscogsPreview 
          discogsId={discogsId} 
        />}
      </div>
    </div>
  )
}
