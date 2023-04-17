export function getToggleColorButton() {
  return cy.get("button[aria-label='Toggle color mode']");
}

export function getLanguagesButton() {
  return cy.get(".chakra-button.css-1sxgr6w");
}

export function getHeaderLinks() {
  return cy.get("[role='navigation'] a");
}

export function getFooterLinks() {
  return cy.get("[role='contentinfo'] a");
}
