function css(strings: TemplateStringsArray, ...values: any[]) {
  const style = document.createElement("style");
  style.innerHTML = String.raw({ raw: strings }, ...values);
  return style;
}

const mainMenuStyles = css`
  /* custom css for main menu settings page */
`;

function onLocationChange() {
  if (window.location.hash === "#/collections/settings/entries/main-menu") {
    document.body.appendChild(mainMenuStyles);
  } else {
    if (document.body === mainMenuStyles.parentElement) {
      document.body.removeChild(mainMenuStyles);
    }
  }
}

window.addEventListener("hashchange", onLocationChange);
onLocationChange();

export {};
