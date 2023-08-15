import { youtubeVideoIdFromURL } from './index'; // replace with your actual file path
import { expect, test } from 'vitest';

test('youtubeVideoIdFromURL', () => {
  // Testing full YouTube URLs
  expect(youtubeVideoIdFromURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
  expect(youtubeVideoIdFromURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')).toBe('dQw4w9WgXcQ');


  // Testing URLs with 'live' in the path
  expect(youtubeVideoIdFromURL('https://www.youtube.com/live/FWvP5bh0yIM')).toBe('FWvP5bh0yIM');
  expect(youtubeVideoIdFromURL('https://www.youtube.com/live/FWvP5bh0yIM?feature=share')).toBe('FWvP5bh0yIM');

  // Testing no 'www'
  expect(youtubeVideoIdFromURL('https://youtube.com/live/NL-skz5VW_0')).toBe('NL-skz5VW_0');
  
  // Testing shortened URLs
  expect(youtubeVideoIdFromURL('https://youtu.be/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');

  // Testing URLs with 'embed' in the path
  expect(youtubeVideoIdFromURL('https://www.youtube.com/embed/FWvP5bh0yIM')).toBe('FWvP5bh0yIM');

});
