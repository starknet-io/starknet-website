import {} from "../../support/command";

const pagelinks =
  ".chakra-container.css-iqo6oj a:not(.chakra-linkbox__overlay):not(.chakra-breadcrumb__link)";

describe("Links", () => {
  /*
  Learn
  what is starknet, glossary, faq
  */

  it(`checks links returns 200 OK Status code on the 'what is starknet' page`, () => {
    cy.log("**visit 'what is starknet' page**");
    cy.goToPage("en/learn/what-is-starknet");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'glossary' page`, () => {
    cy.log("**visit 'glossary' page**");
    cy.goToPage("en/learn/glossary");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'faq' page`, () => {
    cy.log("**visit 'faq' page**");
    cy.goToPage("en/learn/frequently-asked-questions");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  /*
  Developers
  developers hub, tutorials, tools & resources, engineering blog
  */

  it(`checks links returns 200 OK Status code on the 'developers hub' page`, () => {
    cy.log("**visit 'developers hub' page**");
    cy.goToPage("en/developers"); //incorrect url?
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks each link returns 200 OK Status code on the 'tutorials' page`, () => {
    cy.log("**visit 'tutorials' page**");
    cy.goToPage("en/tutorials"); //incorrect url
    cy.log("**wait for tutorials to display**");
    cy.wait(2000); // maybe do a call here to wait for agolia to return results
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'tools & resources' page`, () => {
    cy.log("**visit 'tools & resources' page**");
    cy.goToPage("en/developers/tools-and-resources");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'engineering blog' page`, () => {
    cy.log("**visit 'engineering blog' page**");
    cy.goToPage("en/posts/engineering");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  /*
  Ecosystem
  dapps, wallets, bridges & on-ramps, block explorers
  */

  it(`checks links returns 200 OK Status code on the 'dapps' page`, () => {
    cy.log("**visit 'dapps' page**");
    cy.goToPage("/en/ecosystem/dapps");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'wallets' page`, () => {
    cy.log("**visit 'wallets' page**");
    cy.goToPage("/en/ecosystem/wallets");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'bridges & on-ramps' page`, () => {
    cy.log("**visit 'bridges & on-ramps' page**");
    cy.goToPage("en/ecosystem/bridges-and-onramps");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'block explorers' page`, () => {
    cy.log("**visit 'block explorers' page**");
    cy.goToPage("en/ecosystem/block-explorers");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  /*
  Community
  community hub, events, jobs, governance, online communities, all blog posts,
  language support
  community forum, edu newsletter, roundup newsletter go to external sites
  */

  it(`checks links returns 200 OK Status code on the 'community hub' page`, () => {
    cy.log("**visit 'community hub' page**");
    cy.goToPage("en/community");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'events' page`, () => {
    cy.log("**visit 'events' page**");
    cy.goToPage("en/events"); // incorrect url.. so might be changed
    cy.log("**wait for events to display**");
    cy.wait(2000); // maybe do a call here to wait for agolia to return results
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'jobs' page`, () => {
    cy.log("**visit 'jobs' page**");
    cy.goToPage("en/jobs"); // incorrect url.. so might be changed
    cy.log("**wait for jobs to display**");
    cy.wait(2000); // maybe do a call here to wait for agolia to return results
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'governance' page`, () => {
    cy.log("**visit 'governance' page**");
    cy.goToPage("en/community/governance");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'online communities' page`, () => {
    cy.log("**visit 'online communities' page**");
    cy.goToPage("en/community/online-communities");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'all blog posts' page`, () => {
    cy.log("**visit 'all blog posts' page**");
    cy.goToPage("en/posts"); // incorrect url.. so might be changed
    cy.log("**wait for blog posts to display**");
    cy.wait(2000); // maybe do a call here to wait for agolia to return results
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });

  it(`checks links returns 200 OK Status code on the 'language support' page`, () => {
    cy.log("**visit 'language support' page**");
    cy.goToPage("en/community/language-support");
    cy.log("**check all links on the page return 200**");
    cy.checkLinksBySelector(pagelinks);
  });
});
