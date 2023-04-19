import {} from "../../support/command";

describe("home page", () => {
  const INDEX_NAME = "web_events_dev";
  const APPLICATION_ID = "VHYJO45TI4";
  const URL = `https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/${INDEX_NAME}/query`;
  beforeEach(() => {
    cy.intercept({
      method: "POST",
      url: URL,
    }).as("postRequest");

    cy.visit("/en/events");
    cy.location("pathname").should("eq", "/en/events");

    cy.wait("@postRequest", { timeout: 10000 }).then(
      ({ request, response }) => {
        console.log("request", request);
        console.log("response", response);

        // Check the response status
        expect(response.statusCode).to.eq(200);
      }
    );
  });

  it("does something on the events page", () => {
    cy.get("h2").contains("Events");
    //cy.get("body").should("have.class", "chakra-ui-light");
  });
});
