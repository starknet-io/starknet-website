import { search } from "../../support/command";

import {
  clearSearchInput,
  getCancelSearchBtn,
  getListOfPages,
  getPopularSearches,
  getRecentSearches,
  getSearchBtn,
  getSearchInput,
  getSearchModal,
  getRemoveThisSearchBtns,
  getSearchResultsFromDocumentation,
  getSearchResultsFromPosts,
  getFillQueryBtnFromRecentSearch,
  getFillQueryBtnFromPopularSearch,
  performSearch,
} from "../../pageObjects/search.po";

describe("Search", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.waitForNextjsStackFrameRequest();
    performSearch("cairo");
  });

  it("opens and cancels search", () => {
    // open search
    getSearchBtn().should("be.visible").click();
    getSearchModal().should("be.visible");
    // cancel search
    getCancelSearchBtn().trigger("mouseover").click();
    getSearchModal().should("not.exist");
  });

  it("finds item in recent searches", () => {
    // open search
    getSearchBtn().should("be.visible").click();
    getSearchModal().should("be.visible");
    // clear search input
    clearSearchInput();
    // checks for recent searches
    getRecentSearches().its("length").should("be.gt", 0);
    // find item in recent searches
    getRecentSearches().should("contain", "cairo");
  });

  it("removes recent search", () => {
    // open search
    getSearchBtn().should("be.visible").click();
    getSearchModal().should("be.visible");
    // clear search input
    clearSearchInput();
    // checks for recent searches
    getRecentSearches().its("length").should("be.gt", 0);
    // find item in recent searches
    getRemoveThisSearchBtns().its("length").as("recentSearchesLength");
    cy.get("@recentSearchesLength").should("eq", 1);
    // removes first recent search item
    getRemoveThisSearchBtns().first().click();
    cy.get("@recentSearchesLength").should("eq", 0);
  });

  it("populates the search input with a recent search", () => {
    // open search
    getSearchBtn().should("be.visible").click();
    getSearchModal().should("be.visible");
    // clear search input
    clearSearchInput();
    // checks for recent searches
    getRecentSearches().its("length").should("be.gt", 0);
    // populates search input with recent search
    getFillQueryBtnFromRecentSearch().first().click();
    getSearchInput()
      .invoke("val")
      .then((actualValue) => {
        expect(actualValue.trim()).not.to.be.empty;
      });
  });

  it("populates the search input with a popular search", () => {
    // open search
    getSearchBtn().should("be.visible").click();
    getSearchModal().should("be.visible");
    // clear search input
    clearSearchInput();
    // checks for popular searches
    getPopularSearches().its("length").should("be.gt", 0);
    // populate the search input with first item in popular searches
    getFillQueryBtnFromPopularSearch().first().click();
    getSearchInput()
      .invoke("val")
      .then((actualValue) => {
        expect(actualValue.trim()).not.to.be.empty;
      });
  });

  it("checks that 'pages' contains links to pages", () => {
    // open search
    getSearchBtn().should("be.visible").click();
    getSearchModal().should("be.visible");
    // check search input is not empty
    getSearchInput().invoke("val").should("not.be.empty");
    // find items under pages
    getListOfPages().children("li").should("have.length.at.least", 1);
  });

  it("checks 'post' search results have search term", () => {
    // open search
    getSearchBtn().should("be.visible").click();
    getSearchModal().should("be.visible");
    // check search input is not empty
    getSearchInput().invoke("val").should("not.be.empty");
    // get search term used in search
    getSearchInput().invoke("val").as("searchTerm");
    // find search results from posts
    getSearchResultsFromPosts().should("have.length.at.least", 1);
    // find search term in search results from posts
    cy.get("@searchTerm").then((searchTerm) => {
      getSearchResultsFromPosts()
        .invoke("text")
        .then((text) => {
          const regexp = new RegExp(searchTerm, "i");
          expect(text).to.match(regexp);
        });
    });
  });

  it("checks 'documentation' search results have search term", () => {
    // open search
    getSearchBtn().should("be.visible").click();
    getSearchModal().should("be.visible");
    // check search input is not empty
    getSearchInput().invoke("val").should("not.be.empty");
    // get search term used in search
    getSearchInput().invoke("val").as("searchTerm");
    // find search results from documentation
    getSearchResultsFromDocumentation().should("have.length.at.least", 1);
    // find search term in search results from documentation
    cy.get("@searchTerm").then((searchTerm) => {
      getSearchResultsFromDocumentation()
        .invoke("text")
        .then((text) => {
          console.log(text);
          const regexp = new RegExp(searchTerm, "i");
          expect(text).to.match(regexp);
        });
    });
  });
});
