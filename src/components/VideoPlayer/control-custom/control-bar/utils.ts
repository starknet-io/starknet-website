export const preventVideoJSHotKeys = (
  event: React.KeyboardEvent<HTMLButtonElement>
) => {
  // event.target.blur()
  event.preventDefault();
};
