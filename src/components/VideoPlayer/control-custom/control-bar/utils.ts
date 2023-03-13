export const preventVideoJSHotKeys = (
  event: React.KeyboardEvent<HTMLElement>
) => {
  // event.target.blur()
  event.preventDefault();
};
