import {} from "../../support/command";
import { HeaderAndFooterPage } from "../../pageObjects/headerAndFooter.po.js";

describe("header and footer", () => {
  beforeEach(() => {
    cy.log("**visit home page**");
    cy.visit("/");
    cy.log("**check the page is loaded**");
    cy.location("pathname").should("eq", "/en");
  });
  it("checks all links in the header return 200", () => {
    cy.log("**check all links in the header return 200**");
    cy.checkLinksByCollectionFunc(() => {
      return HeaderAndFooterPage.getHeaderLinks().should("be.visible");
    });
  });

  it("displays light mode by default", () => {
    cy.log("**check light mode is displayed by default**");
    cy.get("body").should("have.class", "chakra-ui-light");
  });

  it("displays dark mode when clicked", () => {
    cy.log("**check dark mode is displayed when clicked**");
    HeaderAndFooterPage.getToggleColorButton().trigger("mouseover").click();
    cy.get("body").should("have.class", "chakra-ui-dark");
  });

  it("displays english as default language", () => {
    cy.log("**check english is displayed by default**");
    HeaderAndFooterPage.getLanguagesButton().invoke("text").should("eq", "en");
  });

  it("opens languages", () => {
    cy.log("**check languages popover opens**");
    HeaderAndFooterPage.getLanguagesButton().trigger("mouseover").click();
    cy.get(".chakra-popover__content").should("be.visible");
  });

  it.only("checks all links in the footer return 200", () => {
    cy.log("**check all links in the footer return 200**");
    cy.checkLinksByCollectionFunc(() => {
      return HeaderAndFooterPage.getFooterLinks().should("be.visible");
    });
  });
});
