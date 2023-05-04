import {} from "../../support/command";

describe("in page navigation", () => {
  beforeEach(() => {
    cy.log("**visits 'what is starknet' page**");
    cy.visit("/en/learn/what-is-starknet");
    cy.log("**checks pathname is correct**");
    cy.location("pathname").should("contain", "/what-is-starknet");
    cy.log("**checks 'on this page' heading displays**");
    cy.contains("h6.chakra-heading", "On this page").should("be.visible");
    cy.log("**gets on this page items**");
    getOnThisPageListItems().should("be.visible").as("onThisPageListItems");
    cy.log("**gets headings**");
    getHeadings().should("be.visible").as("headings");
  });

  const getOnThisPageListItems = () => {
    return cy.get("[role='list'] li");
  };

  const getHeadings = () => {
    return cy.get("[id^='toc']");
  };

  it("checks the number of headings and 'on this page' list items match", () => {
    cy.log(
      "**gets the headings and 'on this page' items and checks they match**"
    );
    cy.get("@onThisPageListItems").then(($onThisPageListItem) => {
      cy.get("@headings").should("have.length", $onThisPageListItem.length);
    });
  });

  it("checks text for headings and 'on this page' list items matches", () => {
    let onThisPageListItemsTexts = [];
    let headingsTexts = [];

    cy.log("**gets 'on this page' items text**");
    cy.get("@onThisPageListItems").each(($item) => {
      cy.wrap($item)
        .invoke("text")
        .then((text) => {
          onThisPageListItemsTexts.push(text);
        });
    });

    cy.log("**gets headings text**");
    cy.get("@headings").each(($heading) => {
      cy.wrap($heading)
        .invoke("text")
        .then((text) => {
          headingsTexts.push(text);
        });
    });

    cy.log("**checks 'on this page' items text matches headings text**");
    cy.wrap(null).then(() => {
      expect(onThisPageListItemsTexts).to.deep.eq(headingsTexts);
    });
  });

  it("checks 'on this page' item is activated after scrolling to heading", () => {
    cy.log("**scrolls to first heading**");
    cy.get("@headings").first().scrollIntoView();
    cy.log("**checks first 'on this page' item is activated**");
    cy.get("@onThisPageListItems").first().should("have.class", "css-733n7b");

    cy.log("**checks other 'on this page' items are not activated**");
    cy.get("@onThisPageListItems")
      .not(":first")
      .each(($el) => {
        cy.wrap($el).should("not.have.class", "css-733n7b");
      });
  });

  it.only("checks the second 'on this page' link is activated when clicked", () => {
    cy.log("**clicks on second 'on this page' item**");
    cy.get("@onThisPageListItems")
      .eq(1)
      .within(() => {
        cy.get("a").trigger("mouseover").click({ force: true });
      });
    cy.log("**checks the second 'on this page' link is activated**");
    cy.location("hash", { timeout: 6000 }).should(
      "contain",
      "toc-how-it-works"
    );
    cy.get("@onThisPageListItems").eq(1).should("have.class", "css-733n7b");
    cy.log("**checks other 'on this page' items are not activated**");
    cy.get("@onThisPageListItems")
      .filter((index, element) => index !== 1) // Filter out the second element
      .as("otherOnThisPageListItems")
      .each(($el) => {
        cy.wrap($el).should("not.have.class", "css-733n7b");
      });
  });
});
