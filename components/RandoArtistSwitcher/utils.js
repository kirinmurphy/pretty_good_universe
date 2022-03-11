export function getRandomArtist(unviewedArtists) {
  const randomIndex = Math.floor(Math.random() * unviewedArtists.length);
  return unviewedArtists[randomIndex];
}

export function getRelatedArtist({ unviewedArtists, relatedArtistList }) {
  const randomRelatedArtist = getRandomArtist(relatedArtistList);
  return unviewedArtists.filter(artist => artist.name === randomRelatedArtist)[0];
}
