import { DiscogsPreview } from './DiscogsPreview';
import { YoutubeVids } from './YoutubePlayer';

export function RandoArtistProfile ({ artist }) {
  const { 
    name,
    from: {
      city,
      state, 
      country,
    },
    discogsId,
    youtubeClips
  } = artist;

  return (
    <div id="artist-profile">
      <h1>{name}</h1>
      <div>from: {city}, {state}, {country}</div>
    
      {discogsId && <DiscogsPreview discogsId={discogsId} />}

      {!!youtubeClips && !!youtubeClips.length && (
        <YoutubeVids videos={youtubeClips} />
      )}
    </div>
  )
}
