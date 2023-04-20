import {} from "../../support/command";

import { SearchPage } from "../../pageObjects/search.po";

describe("Search", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.location("pathname").should("eq", "/en");
    cy.wait(2000); // need to wait for the search to display
    SearchPage.performSearch("cairo");
  });

  it("opens and cancels search", () => {
    // open search
    SearchPage.openSearch();
    // cancel search
    SearchPage.getCancelSearchBtn().trigger("mouseover").click();
    SearchPage.getSearchModal().should("not.exist");
  });

  it("finds items in recent searches", () => {
    // open search
    SearchPage.openSearch();
    // get search value
    SearchPage.getSearchInput().invoke("val").as("searchTerm");
    SearchPage.getSearchInput().clear().should("have.value", "");
    // checks for recent search items
    SearchPage.getSearchResultItems("recentSearchesPlugin")
      .as("recentSearchItems")
      .should("have.length.at.least", 1);
    cy.get("@searchTerm").then((searchTerm) => {
      const regexp = new RegExp(searchTerm, "i");
      cy.get("@recentSearchItems").each(($el) => {
        cy.wrap($el).invoke("text").should("match", regexp);
      });
    });
  });

  it("removes recent searches", () => {
    // open search
    SearchPage.openSearch();
    // clear search input and check it's empty
    SearchPage.getSearchInput().clear().should("have.value", "");
    // checks recent search items exist
    SearchPage.getSearchResultItems("recentSearchesPlugin").should(
      "have.length.at.least",
      1
    );
    // checks remove this search buttons are visible
    SearchPage.getSearchResultItems("recentSearchesPlugin")
      .find("button[title^='Remove']")
      .as("removeThisSearchBtns")
      .should("be.visible");
    // clicks on remove this search buttons
    cy.get("@removeThisSearchBtns").each(($btn) => {
      cy.wrap($btn).click();
    });
    // checks recent search items do not exist
    SearchPage.getSearchResultsSection("recentSearchesPlugin").should(
      "not.exist"
    );
  });

  it("populates the search input with a recent search", () => {
    // open search
    SearchPage.openSearch();
    // clear search input and check it's empty
    SearchPage.getSearchInput().clear().should("have.value", "");
    // checks for recent search items
    SearchPage.getSearchResultItems("recentSearchesPlugin").should(
      "have.length.at.least",
      1
    );
    // clicks on fill query button in first recent search item
    SearchPage.getBtnsOnSearchResultsItems("recentSearchesPlugin", "Fill query")
      .first()
      .click();
    // checks search input is not empty
    SearchPage.getSearchInput()
      .invoke("val")
      .then((actualValue) => {
        expect(actualValue.trim()).not.to.be.empty;
      });
  });

  it("populates the search input with a popular search", () => {
    // open search
    SearchPage.openSearch();
    // clear search input and check's its empty
    SearchPage.getSearchInput().clear().should("have.value", "");
    // checks for popular search items
    SearchPage.getSearchResultItems("querySuggestionsPlugin").should(
      "have.length.at.least",
      1
    );
    SearchPage.getBtnsOnSearchResultsItems(
      "querySuggestionsPlugin",
      "Fill query"
    )
      .first()
      .click();
    // checks search input is not empty
    SearchPage.getSearchInput()
      .invoke("val")
      .then((actualValue) => {
        expect(actualValue.trim()).not.to.be.empty;
      });
  });

  it("checks that 'pages' contains links to pages", () => {
    // open search
    SearchPage.openSearch();
    // check search input is not empty
    SearchPage.getSearchInput().invoke("val").should("not.be.empty");
    // find items under pages
    SearchPage.getSearchResultItems("pages").should("have.length.at.least", 1);
  });

  it("checks 'post' search results have search term", () => {
    // opens search
    SearchPage.openSearch();
    // check search input is not empty
    SearchPage.getSearchInput().invoke("val").should("not.be.empty");
    // get search term value
    SearchPage.getSearchInput().invoke("val").as("searchTerm");
    // check there are search results in posts
    SearchPage.getSearchResultItems("posts")
      .as("postItems")
      .should("have.length.at.least", 1);
    // find search term in search results in posts
    cy.get("@searchTerm").then((searchTerm) => {
      const regexp = new RegExp(searchTerm, "i");
      cy.get("@postItems").each(($el) => {
        cy.wrap($el).invoke("text").should("match", regexp);
      });
    });
  });

  it("checks 'documentation' search results have search term", () => {
    // open search
    SearchPage.openSearch();
    // check search input is not empty
    SearchPage.getSearchInput().invoke("val").should("not.be.empty");
    // get search term used in search
    SearchPage.getSearchInput().invoke("val").as("searchTerm");
    // check there are search results in documentation
    SearchPage.getSearchResultItems("docs").should("have.length.at.least", 1);
    // find search term in documentation search results
    cy.get("@searchTerm").then((searchTerm) => {
      const regexp = new RegExp(searchTerm, "i");
      SearchPage.getSearchResultItems("docs").each(($el) => {
        cy.wrap($el).invoke("text").should("match", regexp);
      });
    });
  });
});
