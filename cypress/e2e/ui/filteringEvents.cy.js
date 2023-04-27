import {} from "../../support/command";

describe("filtering events", () => {
  beforeEach(() => {
    cy.log("**intercept Algolia API calls**");
    cy.intercept(
      "POST",
      "https://vhyjo45ti4-dsn.algolia.net/1/indexes/*/queries?*"
    ).as("events");
    cy.log("**visit events page**");
    cy.visit("/en/events");
    cy.location("pathname").should("eq", "/en/events");
    cy.log("**wait for events to load**");
    cy.wait("@events", { timeout: 6000 });
  });

  it("contains headings for upcoming and past events. Upcoming events is selected by default", () => {
    cy.log("**checks upcoming events is selected**");
    cy.get("a")
      .contains("upcoming events", { matchCase: false })
      .should("have.attr", "data-active");
    cy.get("a")
      .contains("past events", { matchCase: false })
      .should("not.have.attr", "data-active");
  });

  it("checks no filter is selected by default", () => {
    cy.log("**check no filter is selected**");
    cy.get("[dir='column'] button").should("have.class", "css-1umf0ha");
  });

  function parseDate(dateStr) {
    const [dayPart, monthYearPart] = dateStr.split(", ");
    const [day, month, year] = monthYearPart.match(/\d+|\D+/g);
    const [startDay, endDay] = dayPart.split(" - ");
    return new Date(year, month, startDay);
  }

  it("displays upcoming events in reverse date order", () => {
    cy.log("**get events**");
    cy.get("div.css-1c54vx9")
      .should("be.visible")
      .should("have.length.greaterThan", 0)
      .then(($events) => {
        cy.log("**get dates**");
        const dates = $events
          .find("p.css-tcazcx")
          .map((i, el) => {
            return Cypress.$(el).text();
          })
          .get();
        cy.log("**check dates are in reverse order**");
        const datesSorted = dates.sort((a, b) => {
          return parseDate(a) - parseDate(b);
        });
        expect(dates).to.deep.eq(datesSorted);
      });
  });

  it("displays past events in reverse date order", () => {
    cy.log("**click on past events button**");
    cy.get("a")
      .contains("past events", { matchCase: false })
      .click({ force: true });
    cy.log("**check url path is /en/events/past**");
    cy.location("pathname", { timeout: 5000 }).should("eq", "/en/events/past");
    cy.log("**wait for events to load**");
    cy.wait("@events", { timeout: 5000 });
    cy.log("**get events**");
    cy.log("**get dates on events**");
    cy.log("**check dates are in reverse order**");
    cy.get("div.css-1c54vx9")
      .should("be.visible")
      .should("have.length.greaterThan", 0)
      .then(($events) => {
        const dates = $events
          .find("p.css-tcazcx")
          .map((i, el) => {
            return Cypress.$(el).text();
          })
          .get();
        const datesSorted = dates.sort((a, b) => {
          return parseDate(a) - parseDate(b);
        });
        expect(dates).to.deep.eq(datesSorted);
      });
  });

  it("filters upcoming events by location", () => {
    cy.log("**click on Europe button**");
    cy.get("button").contains("Europe").click();
    cy.log("**wait for events to load**");
    cy.wait("@events");
    cy.log("**check events are visible**");
    cy.get("div.css-1c54vx9")
      .should("have.length.greaterThan", 0)
      .and("be.visible");
    cy.log("**check for Europe tag**");
    cy.get("div.css-1c54vx9").each(($el) => {
      cy.wrap($el)
        .find("span.css-1kuwq4c")
        .contains("Europe", { matchCase: false })
        .should("be.visible");
    });
  });

  it("filters upcoming events by location and type", () => {
    cy.log("**click on Europe button**");
    cy.get("button").contains("Europe").click();
    cy.log("**wait for events to load**");
    cy.wait("@events");
    cy.log("**click on Conference button**");
    cy.get("button").contains("Conference").click();
    cy.log("**wait for events to load**");
    cy.wait("@events");
    cy.log("**check events are visible**");
    cy.get("div.css-1c54vx9")
      .should("have.length.greaterThan", 0)
      .and("be.visible");
    cy.log("**check for Europe tag**");
    cy.get("div.css-1c54vx9").each(($el) => {
      cy.wrap($el)
        .find("span.css-1kuwq4c")
        .contains("Europe", { matchCase: false })
        .should("be.visible");
    });
    cy.log("**check for Conference tag**");
    cy.get("div.css-1c54vx9").each(($el) => {
      cy.wrap($el)
        .find("span.css-1kuwq4c")
        .contains("Conference", { matchCase: false })
        .should("be.visible");
    });
  });
});
