import {} from "../../support/command";

import {
  getHeadings,
  getOnThisPagelistItems,
} from "../../pageObjects/navigation.po.js";

describe("navigating content via headings", () => {
  beforeEach(() => {
    cy.visit("/en/learn/what-is-starknet");
  });

  it("checks that the number of headings and 'on this page' list items match", () => {
    getOnThisPagelistItems().as("onThisPageListItems");
    getHeadings().as("headings");
    cy.get("@onThisPageListItems").then(($onThisPageListItem) => {
      cy.get("@headings").then(($heading) => {
        expect($onThisPageListItem.length).to.equal($heading.length);
      });
    });
  });

  it("checks text for headings and 'on this page' list items matches", () => {
    getOnThisPagelistItems().as("onThisPageListItems");
    getHeadings().as("headings");
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
    getHeadings().first().scrollIntoView(); // activate 'on this page' list
    getOnThisPagelistItems().as("onThisPageListItems");
    cy.get("@onThisPageListItems").first().should("have.class", "css-733n7b");
  });

  it("checks the second 'on this page' link is selected when clicked", () => {
    getHeadings().first().scrollIntoView(); // activate 'on this page' list
    getOnThisPagelistItems().as("onThisPageListItems");
    cy.get("@onThisPageListItems").eq(1).trigger("mouseover").click();
    cy.get("@onThisPageListItems").eq(1).should("have.class", "css-733n7b");
  });
});
