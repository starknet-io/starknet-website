import {} from "../../support/command";

import { HomePage } from "../../pageObjects/home.po.js";

describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.location("pathname").should("eq", "/en");
  });

  it("checks links on the page return 200", () => {
    const pageLinks =
      ".chakra-container.css-iqo6oj a:not(.chakra-linkbox__overlay";
    cy.checkLinksBySelector(pageLinks);
  });

  it("checks all images display", () => {
    cy.checkImagesDisplay();
  });

  it.only("checks all cards have a parent link", () => {
    HomePage.getCards().closest("a").should("have.class", "chakra-linkbox");
  });
});
