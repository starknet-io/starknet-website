export const preventVideoJSHotKeys = (
  event: React.KeyboardEvent<HTMLElement>
) => {
  // event.target.blur()
  event.preventDefault();
};

export const convertSecondsToMMSS = (seconds: number): string => {
  const date = new Date(0);
  date.setSeconds(seconds);
  const timeString = date.toISOString().substring(14, 19);
  return timeString;
};
