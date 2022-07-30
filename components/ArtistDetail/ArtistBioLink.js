import { BIOLINK_DISCOGS, BIOLINK_ORIGINAL } from '../../data/artistList_tags';

const discogsPrefix = 'https://www.discogs.com/artist/';

export function ArtistBioLink ({ artist }) {
  const { 
    bioLink,
    discogsId
  } = artist;

  const discogsBioLink = `${discogsPrefix}${discogsId}`;

  const nonDiscogsBioLink = bioLink !== BIOLINK_ORIGINAL 
    && bioLink !== BIOLINK_DISCOGS 
    && bioLink;

  return (
    <>
      {discogsId && (
        <a href={discogsBioLink} target="_blank">discography</a>
      )}

      {nonDiscogsBioLink && (
        <>
          {' '}
          <a href={nonDiscogsBioLink} target="_blank">more</a>        
        </>
      )}
    </>
  )
}
