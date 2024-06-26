import { rawArtistList } from '../data/artistList';

const artistsByTags = rawArtistList.reduce((acc, curr) => {
  if ( !curr.tags || !curr.tags.length ) { return acc; }

  curr.tags.forEach(tag => {
    acc[tag] = !!acc[tag] ? [...acc[tag], curr.name] : [curr.name];
  })

  return acc;
}, {})

export const artistList = rawArtistList
  .map(artist => {
    const mightAlsoLike = !!artist.tags
      ? artist.tags
        .reduce((acc, curr) => {
            return [...acc, ...artistsByTags[curr]];
          }, [])
        .filter(tag => tag !== artist.name)
      : [];

    return {
      ...artist,
      mightAlsoLike      
    };
  }).sort(function(a, b) {
    const trimmedAName = a.name.replace("The ", "");
    const trimmedBName = b.name.replace("The ", "");
    return trimmedAName.localeCompare(trimmedBName);
  });
