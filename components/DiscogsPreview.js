import useSWR from 'swr'; 

const ARTIST_PROFILE_CHARACTER_LIMIT = 400;

export function DiscogsPreview ({ discogsId }) {

  const discogsApiId = discogsId.split('-')[0]

  const discogsApiEndpoint = "https://api.discogs.com/artists/" + discogsApiId; 
  const discogsArtistPageUrl = "https://www.discogs.com/artist/" + discogsId;
  
  const getData = async () => {
    const response = await fetch(discogsApiEndpoint);
    return await response.json();
  };
  const { data } = useSWR(discogsApiEndpoint, getData);

  if ( !data ) { return <></>; }

  const {
    profile
  } = data;

  return (
    <div>
      {profile && (
        <div>
          {getProfileBlurb(data.profile)}
          {' '}
          <a href={discogsArtistPageUrl}>more from discogs.com</a>
        </div>
      )}
    </div>
  )
}

function getProfileBlurb (profile) {
  if ( profile.length < ARTIST_PROFILE_CHARACTER_LIMIT ) { return profile; }
  const sentences = profile.substring(0, ARTIST_PROFILE_CHARACTER_LIMIT).split('.');
  return sentences
    .filter((_, index) => index < sentences.length - 1)
    .join(".") + '...';
}