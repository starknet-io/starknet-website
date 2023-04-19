export const OnThisPageItemsPage = {
  getOnThisPageListItems(timeout = 5000) {
    return cy.get("[role='list'] li");
  },
  getHeadings() {
    return cy.get("[id^='toc']");
  },
};

// export function getOnThisPagelistItems(timeout = 5000) {
//   return cy.get("[role='list'] li");
// }

// export function getHeadings() {
//   return cy.get("[id^='toc']");
// }

// export const HomePage = {
//   getCards() {
//     return cy.get(".chakra-card.css-1onecx3");
//   },
// };
