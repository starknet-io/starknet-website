export function getTagBtns() {
  return cy.get("[role='complementary'] button");
}

export function getEvents() {
  return cy.get("div.css-1c54vx9");
}

export function getVisibleEvents() {
  return getEvents().filter(":visible");
}

export function getTagsOnEvents() {
  return cy.get(".chakra-wrap__listitem");
}

export function getTagsOnVisibleEvents() {
  return getVisibleEvents().find(".chakra-wrap__listitem:visible");
}

// returns alias for events length
export function getEventsLength(aliasName) {
  getVisibleEvents().as("visibleEvents");
  cy.get("@visibleEvents").then(($events) => {
    let eventsLength = parseInt($events.length, 10);
    cy.wrap(eventsLength).as(aliasName);
  });
}
