import {} from "../../support/command";

import { HomePage } from "../../pageObjects/home.po.js";

describe("home page", () => {
  beforeEach(() => {
    cy.log("**visit home page**");
    cy.visit("/");
    cy.log("**check the page is loaded**");
    cy.location("pathname").should("eq", "/en");
  });

  it("checks links on the page return 200", () => {
    cy.log("**check all links on the page return 200**");
    const pageLinks =
      ".chakra-container.css-iqo6oj a:not(.chakra-linkbox__overlay";
    cy.checkLinksBySelector(pageLinks);
  });

  it("checks all images display", () => {
    cy.log("**check all images display**");
    cy.checkImagesDisplay();
  });

  it.only("checks all cards have a parent link", () => {
    cy.log("**check all cards have a parent link**");
    HomePage.getCards().closest("a").should("have.class", "chakra-linkbox");
  });
});
