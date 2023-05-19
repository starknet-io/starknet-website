// https://stackoverflow.com/a/12646864

export function getShuffledArray(_array: readonly any[]) {
  const array = _array.slice(0);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
