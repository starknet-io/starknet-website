import {expect, test, describe } from 'vitest';
import {convertStringTagsToArray, youtubeVideoIdFromURL, getShuffledArray } from './index';

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

describe('convertStringTagsToArray test', () => {
  test('should convert a comma-separated string of tags to an array', () => {
    const inputTags = 'tag1, tag2, tag3';
    const result = convertStringTagsToArray(inputTags);
    expect(result).toEqual(['tag1', 'tag2', 'tag3']);
  });

  test('should trim whitespace around tags', () => {
    const inputTags = ' tag1     , tag2 , tag3 ';
    const result = convertStringTagsToArray(inputTags);

    expect(result).toEqual(['tag1', 'tag2', 'tag3']);
  });
});

describe('getShuffledArray test', () => {

  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test('should return an array of the same length as the input', () => {
    const result = getShuffledArray(inputArray);

    expect(result).toHaveLength(inputArray.length);
  });

  test('should return an array with the same elements as the input', () => {
    const result = getShuffledArray(inputArray);

    inputArray.forEach((element) => {
      expect(result).toContain(element);
    });
  });

  test('should not modify the original array', () => {
    const originalArray = [...inputArray];
    const result = getShuffledArray(inputArray);

    expect(inputArray).toEqual(originalArray);
    expect(inputArray).not.toEqual(result);
  });



  test('should produce different results on different invocations', () => {
    const result1 = getShuffledArray(inputArray);
    const result2 = getShuffledArray(inputArray);

    expect(result1).not.toEqual(result2);
  });
});

