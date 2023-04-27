import {} from "../../support/command";

import { OnThisPageItemsPage } from "../../pageObjects/navigation.po.js";

describe("navigating content via headings", () => {
  beforeEach(() => {
    cy.log("**visit 'what is starknet' page**");
    cy.visit("/en/learn/what-is-starknet");
    cy.log("**check pathname is correct**");
    cy.location("pathname").should("eq", "/en/learn/what-is-starknet");
  });

  it("checks that the number of headings and 'on this page' list items match", () => {
    cy.log("**gets on this page items**");
    OnThisPageItemsPage.getOnThisPageListItems().as("onThisPageListItems");
    cy.log("**gets headings**");
    OnThisPageItemsPage.getHeadings().as("headings");
    cy.log(
      "**checks the number of headings and 'on this page' list items are the same**"
    );
    cy.get("@onThisPageListItems").then(($onThisPageListItem) => {
      cy.get("@headings").then(($heading) => {
        expect($onThisPageListItem.length).to.equal($heading.length);
      });
    });
  });

  it("checks text for headings and 'on this page' list items matches", () => {
    cy.log("**gets on this page items**");
    OnThisPageItemsPage.getOnThisPageListItems().as("onThisPageListItems");
    cy.log("**gets headings**");
    OnThisPageItemsPage.getHeadings().as("headings");
    cy.log(
      "**checks the text for headings and 'on this page' list items match**"
    );
    cy.get("@onThisPageListItems").each(($onThisPagelink) => {
      const linkText = $onThisPagelink.text();
      cy.get("@headings").each(($heading) => {
        const headingText = $heading.text();
        if (linkText === headingText) {
          expect(linkText).to.equal(headingText);
        }
      });
    });
  });

  it("checks correct 'on the page' link is selected when scrolling to matching heading", () => {
    cy.log("**scrolls to first heading to activate 'on this page' list**");
    OnThisPageItemsPage.getHeadings().first().scrollIntoView();
    cy.log("**gets on this page items**");
    OnThisPageItemsPage.getOnThisPageListItems().as("onThisPageListItems");
    cy.log("**checks the first 'on this page' link is selected**");
    cy.get("@onThisPageListItems").first().should("have.class", "css-733n7b");
  });

  it("checks the second 'on this page' link is selected when clicked", () => {
    cy.log("**scrolls to first heading to activate 'on this page' list**");
    OnThisPageItemsPage.getHeadings().first().scrollIntoView();
    cy.log("**gets on this page items**");
    OnThisPageItemsPage.getOnThisPageListItems().as("onThisPageListItems");
    cy.log("**clicks on second on this page item**");
    cy.get("@onThisPageListItems").eq(1).trigger("mouseover").click();
    cy.log("**checks the second 'on this page' link is selected**");
    cy.get("@onThisPageListItems").eq(1).should("have.class", "css-733n7b");
  });
});
