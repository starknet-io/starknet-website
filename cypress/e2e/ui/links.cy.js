import {} from "../../support/command";

const pagelinks =
  ".chakra-container.css-iqo6oj a:not(.chakra-linkbox__overlay):not(.chakra-breadcrumb__link)";

describe("Links", () => {
  /*
  Learn
  what is starknet, glossary, faq
  */

  it(`checks links returns 200 OK Status code on the 'what is starknet' page`, () => {
    cy.goToPage("en/learn/what-is-starknet");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'glossary' page`, () => {
    cy.goToPage("en/learn/glossary");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'faq' page`, () => {
    cy.goToPage("en/learn/frequently-asked-questions");
    cy.checkLinksBySelector(pagelinks);
  });

  /*
  Developers
  developers hub, tutorials, tools & resources, engineering blog
  */

  it(`checks links returns 200 OK Status code on the 'developers hub' page`, () => {
    cy.goToPage("en/developers"); //incorrect url?
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks each link returns 200 OK Status code on the 'tutorials' page`, () => {
    cy.goToPage("en/tutorials"); //incorrect url
    cy.interceptAndAssertAlgoliaRequest();
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'tools & resources' page`, () => {
    cy.goToPage("en/developers/tools-and-resources");
    cy.get(pagelinks).its("length").as("pagelinksLength");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'engineering blog' page`, () => {
    cy.goToPage("en/posts/engineering");
    cy.get(pagelinks).its("length").as("pagelinksLength");
    cy.checkLinksBySelector(pagelinks);
  });

  /*
  Ecosystem
  dapps, wallets, bridges & on-ramps, block explorers
  */

  it(`checks links returns 200 OK Status code on the 'dapps' page`, () => {
    cy.goToPage("/en/ecosystem/dapps");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'wallets' page`, () => {
    cy.goToPage("/en/ecosystem/wallets");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'bridges & on-ramps' page`, () => {
    cy.goToPage("en/ecosystem/bridges-and-onramps");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'block explorers' page`, () => {
    cy.goToPage("en/ecosystem/block-explorers");
    cy.checkLinksBySelector(pagelinks);
  });

  /*
  Community
  community hub, events, jobs, governance, online communities, all blog posts,
  language support
  community forum, edu newsletter, roundup newsletter go to external sites
  */

  it(`checks links returns 200 OK Status code on the 'community hub' page`, () => {
    cy.goToPage("en/community");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'events' page`, () => {
    cy.goToPage("en/events"); // incorrect url.. so might be changed
    cy.interceptAndAssertAlgoliaRequest();
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'jobs' page`, () => {
    cy.goToPage("en/jobs"); // incorrect url.. so might be changed
    cy.interceptAndAssertAlgoliaRequest();
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'governance' page`, () => {
    cy.goToPage("en/community/governance");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'online communities' page`, () => {
    cy.goToPage("en/community/online-communities");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'all blog posts' page`, () => {
    cy.goToPage("en/posts"); // incorrect url.. so might be changed
    cy.interceptAndAssertAlgoliaRequest();
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'language support' page`, () => {
    cy.goToPage("en/community/language-support");
    cy.checkLinksBySelector(pagelinks);
  });
});
