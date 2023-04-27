export const HeaderAndFooterPage = {
  getToggleColorButton() {
    return cy.get("button[aria-label='Toggle color mode']");
  },
  getLanguagesButton() {
    return cy.get(".chakra-button.css-1sxgr6w");
  },
  getHeaderLinks() {
    return cy.get("[role='navigation'] a");
  },
  getFooterLinks() {
    return cy.get("[role='contentinfo'] a");
  },
};

// export function getToggleColorButton() {
//   return cy.get("button[aria-label='Toggle color mode']");
// }

// export function getLanguagesButton() {
//   return cy.get(".chakra-button.css-1sxgr6w");
// }

// export function getHeaderLinks() {
//   return cy.get("[role='navigation'] a");
// }

// export function getFooterLinks() {
//   return cy.get("[role='contentinfo'] a");
// }

//export const HomePage = {
//   getCards() {
//     return cy.get(".chakra-card.css-1onecx3");
//   },
// };
