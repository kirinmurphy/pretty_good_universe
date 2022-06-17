import { rawArtistList_full } from './artistList_full';
import { rawArtistList_onDeck } from './artistList_onDeck';

const env = process.env.NODE_ENV;
const inDevelopment = env === 'development';

export const rawArtistList = inDevelopment 
  ? rawArtistList_onDeck : rawArtistList_full;
