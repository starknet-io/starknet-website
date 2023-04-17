export function getSearchBtn() {
  return cy.get(".aa-DetachedSearchButton");
}

export function getCancelSearchBtn() {
  return cy.get(".aa-DetachedCancelButton");
}

export function getClearBtn() {
  return cy.get(".aa-ClearButton");
}

export function getListOfPages() {
  return cy.get("[data-autocomplete-source-id='pages'] ul");
}

export function getPopularSearches() {
  return cy.get(
    "[data-autocomplete-source-id='querySuggestionsPlugin'] .aa-List .aa-Item .aa-ItemContentTitle"
  );
}

export function getRecentSearches() {
  return cy.get(
    "[data-autocomplete-source-id='recentSearchesPlugin'] .aa-List .aa-Item .aa-ItemContentTitle"
  );
}

export function getRemoveThisSearchBtns(searchTerm) {
  return cy.get(
    "[data-autocomplete-source-id='recentSearchesPlugin'] button[title='Remove this search']"
  );
}

export function getSearchInput() {
  return cy.get(".aa-Input");
}

export function getSearchModal() {
  return cy.get(".aa-DetachedContainer--modal");
}

export function getSearchResultsFromPosts() {
  return cy.get("[data-autocomplete-source-id='posts']");
}

export function getSearchResultsFromDocumentation() {
  return cy.get("[data-autocomplete-source-id='docs']");
}

export function getFillQueryBtnFromRecentSearch() {
  return cy.get(
    "[data-autocomplete-source-id='recentSearchesPlugin'] button[title^='Fill query with']"
  );
}

export function getFillQueryBtnFromPopularSearch() {
  return cy.get(
    "[data-autocomplete-source-id='querySuggestionsPlugin'] button"
  );
}

export function clearSearchInput() {
  getSearchInput()
    .then(($input) => {
      if ($input.val().length > 0) {
        getClearBtn().should("be.visible").click();
      }
    })
    .should(($input) => {
      expect($input.val()).to.equal("");
    });
}

export function performSearch(searchTerm) {
  getSearchBtn().should("be.visible").click();
  getSearchModal().should("be.visible");
  getSearchInput().type(searchTerm).type("{enter}");
  getSearchModal().should("not.exist");
}
