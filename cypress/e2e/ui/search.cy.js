import {} from "../../support/command";

import { SearchPage } from "../../pageObjects/search.po";

describe("Search", () => {
  beforeEach(() => {
    cy.log("**visit home page**");
    cy.visit("/");
    cy.log("**check the page is loaded**");
    cy.location("pathname").should("eq", "/en");
    cy.wait(2000); // need to wait for the search to display
    cy.log("**peform search**");
    SearchPage.performSearch("cairo");
  });

  it("opens and cancels search", () => {
    cy.log("**open search**");
    SearchPage.openSearch();
    cy.log("**cancel search**");
    SearchPage.getCancelSearchBtn().trigger("mouseover").click();
    cy.log("**check search is closed**");
    SearchPage.getSearchModal().should("not.exist");
  });

  it("finds items in recent searches", () => {
    cy.log("**open search**");
    SearchPage.openSearch();
    cy.log("**gets search term used in search**");
    SearchPage.getSearchInput().invoke("val").as("searchTerm");
    cy.log("**clear search input**");
    SearchPage.getSearchInput().clear().should("have.value", "");
    cy.log("**checks recent search items exist**");
    SearchPage.getSearchResultItems("recentSearchesPlugin")
      .as("recentSearchItems")
      .should("have.length.at.least", 1);
    cy.log("**checks recent search items contain search term**");
    cy.get("@searchTerm").then((searchTerm) => {
      const regexp = new RegExp(searchTerm, "i");
      cy.get("@recentSearchItems").each(($el) => {
        cy.wrap($el).invoke("text").should("match", regexp);
      });
    });
  });

  it("removes recent searches", () => {
    cy.log("**open search**");
    SearchPage.openSearch();
    cy.log("**clear search input**");
    SearchPage.getSearchInput().clear().should("have.value", "");
    cy.log("**checks recent search items exist**");
    SearchPage.getSearchResultItems("recentSearchesPlugin").should(
      "have.length.at.least",
      1
    );
    cy.log("**checks remove search buttons on recent search items display**");
    SearchPage.getSearchResultItems("recentSearchesPlugin")
      .find("button[title^='Remove']")
      .as("removeThisSearchBtns")
      .should("be.visible");
    cy.log("**clicks on remove search buttons**");
    cy.get("@removeThisSearchBtns").each(($btn) => {
      cy.wrap($btn).click();
    });
    cy.log("**checks recent search items do not exist**");
    SearchPage.getSearchResultsSection("recentSearchesPlugin").should(
      "not.exist"
    );
  });

  it("populates the search input with a recent search", () => {
    cy.log("**open search**");
    SearchPage.openSearch();
    cy.log("**clears search input**");
    SearchPage.getSearchInput().clear().should("have.value", "");
    cy.log("**checks recent search items exist**");
    SearchPage.getSearchResultItems("recentSearchesPlugin").should(
      "have.length.at.least",
      1
    );
    cy.log("**clicks on fill query button in first recent search item**");
    SearchPage.getBtnsOnSearchResultsItems("recentSearchesPlugin", "Fill query")
      .first()
      .click();
    cy.log("**checks search input is not empty**");
    SearchPage.getSearchInput()
      .invoke("val")
      .then((actualValue) => {
        expect(actualValue.trim()).not.to.be.empty;
      });
  });

  it("populates the search input with a popular search", () => {
    cy.log("**open search**");
    SearchPage.openSearch();
    cy.log("**clears search input**");
    SearchPage.getSearchInput().clear().should("have.value", "");
    cy.log("**checks popular search items exist**");
    SearchPage.getSearchResultItems("querySuggestionsPlugin").should(
      "have.length.at.least",
      1
    );
    cy.log("**clicks on fill query button in first popular search item**");
    SearchPage.getBtnsOnSearchResultsItems(
      "querySuggestionsPlugin",
      "Fill query"
    )
      .first()
      .click();
    cy.log("**checks search input is not empty**");
    SearchPage.getSearchInput()
      .invoke("val")
      .then((actualValue) => {
        expect(actualValue.trim()).not.to.be.empty;
      });
  });

  it("checks that 'pages' contains links to pages", () => {
    cy.log("**open search**");
    SearchPage.openSearch();
    cy.log("**checks search input is not empty**");
    SearchPage.getSearchInput().invoke("val").should("not.be.empty");
    cy.log("**checks there items listed under pages**");
    SearchPage.getSearchResultItems("pages").should("have.length.at.least", 1);
  });

  it("checks 'post' search results have search term", () => {
    cy.log("**open search**");
    SearchPage.openSearch();
    cy.log("**checks search input is not empty**");
    SearchPage.getSearchInput().invoke("val").should("not.be.empty");
    cy.log("**gets search term used in search**");
    SearchPage.getSearchInput().invoke("val").as("searchTerm");
    cy.log("**checks there are search results in posts**");
    SearchPage.getSearchResultItems("posts")
      .as("postItems")
      .should("have.length.at.least", 1);
    cy.log("**checks search term displays in search results in posts**");
    cy.get("@searchTerm").then((searchTerm) => {
      const regexp = new RegExp(searchTerm, "i");
      cy.get("@postItems").each(($el) => {
        cy.wrap($el).invoke("text").should("match", regexp);
      });
    });
  });

  it("checks 'documentation' search results have search term", () => {
    cy.log("**open search**");
    SearchPage.openSearch();
    cy.log("**checks search input is not empty**");
    SearchPage.getSearchInput().invoke("val").should("not.be.empty");
    cy.log("**gets search term used in search**");
    SearchPage.getSearchInput().invoke("val").as("searchTerm");
    cy.log("**checks there are search results in documentation**");
    SearchPage.getSearchResultItems("docs").should("have.length.at.least", 1);
    cy.log(
      "**checks search term displays in search results in documentation**"
    );
    cy.get("@searchTerm").then((searchTerm) => {
      const regexp = new RegExp(searchTerm, "i");
      SearchPage.getSearchResultItems("docs").each(($el) => {
        cy.wrap($el).invoke("text").should("match", regexp);
      });
    });
  });
});
