export const SearchPage = {
  clearSearchInput() {
    SearchPage.getSearchInput().then(($input) => {
      if ($input.val().length > 0) {
        SearchPage.getClearBtn().should("be.visible").click();
      }
    });
  },
  getBtnsOnSearchResultsItems(sourceId, title) {
    return cy
      .get(`[data-autocomplete-source-id='${sourceId}']`)
      .find(`[title^='${title}']`);
  },
  getCancelSearchBtn() {
    return cy.get(".aa-DetachedCancelButton");
  },
  getClearBtn() {
    return cy.get(".aa-ClearButton");
  },
  getSearchBtn() {
    return cy.get(".aa-DetachedSearchButton");
  },
  getSearchInput() {
    return cy.get(".aa-Input");
  },
  getSearchModal() {
    return cy.get(".aa-DetachedContainer--modal");
  },
  getSearchResultsSection(sourceId) {
    return cy.get(`[data-autocomplete-source-id='${sourceId}']`);
  },
  getSearchResultItems(sourceId) {
    return cy
      .get(`[data-autocomplete-source-id='${sourceId}']`)
      .find(".aa-Item");
  },
  openSearch() {
    SearchPage.getSearchBtn().should("be.visible").click();
    SearchPage.getSearchModal().should("be.visible");
  },
  performSearch(searchTerm) {
    SearchPage.getSearchBtn().should("be.visible").click();
    SearchPage.getSearchModal().should("be.visible");
    SearchPage.getSearchInput().type(searchTerm).type("{enter}");
    SearchPage.getSearchModal().should("not.exist");
  },
};
