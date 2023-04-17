import {} from "../../support/command";
import {
  getToggleColorButton,
  getFooterLinks,
  getHeaderLinks,
  getLanguagesButton,
} from "../../pageObjects/headerAndFooter.po.js";

describe("header and footer", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.waitForNextjsStackFrameRequest();
  });
  it("checks all links in the header return 200", () => {
    cy.checkLinksByCollectionFunc(() => {
      return getHeaderLinks();
    });
  });

  it("displays light mode by default", () => {
    cy.get("body").should("have.class", "chakra-ui-light");
  });

  it("displays dark mode when clicked", () => {
    getToggleColorButton().trigger("mouseover").click();
    cy.get("body").should("have.class", "chakra-ui-dark");
  });

  it("displays english as default language", () => {
    cy.url().should("include", "/en");
    getLanguagesButton().invoke("text").should("eq", "en");
  });

  it("opens languages", () => {
    getLanguagesButton().trigger("mouseover").click();
    cy.get(".chakra-popover__content").should("be.visible");
  });

  it("checks all links in the footer return 200", () => {
    cy.checkLinksByCollectionFunc(() => {
      return getFooterLinks();
    });
  });
});
