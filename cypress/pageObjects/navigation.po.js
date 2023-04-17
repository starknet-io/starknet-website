export function getOnThisPagelistItems(timeout = 5000) {
  return cy.get("[role='list'] li");
}

export function getHeadings() {
  return cy.get("[id^='toc']");
}
