export function getRandomArtist(unviewedArtistList) {
  const randomIndex = Math.floor(Math.random() * unviewedArtistList.length);
  return unviewedArtistList[randomIndex];
}

export function getRelatedArtist({ unviewedArtistList, relatedArtistList }) {
  const randomRelatedArtist = getRandomArtist(relatedArtistList);
  return unviewedArtistList.filter(artist => artist.name === randomRelatedArtist)[0];
}
