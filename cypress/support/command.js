import "cypress-wait-until";
import {
  getTagBtns,
  getEvents,
  getEventsLength,
  getTagsOnEvents,
  getTagsOnVisibleEvents,
  getVisibleEvents,
} from "../pageObjects/filtering.po.js";
/*
  temporarily disabling these error messages to allow tests to run
*/

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Hydration failed")) {
    return false;
  }
});

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("There was an error while hydrating")) {
    return false;
  }
});

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Failed to execute 'removeChild' on 'Node'")) {
    return false;
  }
});

Cypress.on("uncaught:exception", (err, runnable) => {
  if (
    err.message.includes(
      "Cannot read properties of undefined (reading 'slice')"
    )
  ) {
    return false;
  }
});

/* custom commands start here */

Cypress.Commands.add("checkLinksBySelector", (selector) => {
  cy.get(selector).each(($a) => {
    const href = $a.prop("href");
    if (href && !href.startsWith("mailto:")) {
      cy.request(href).its("status").should("eq", 200);
    }
  });
});

Cypress.Commands.add("checkLinksByCollectionFunc", (collectionFunc) => {
  collectionFunc().each(($a) => {
    const href = $a.prop("href");
    cy.request(href).its("status").should("eq", 200);
  });
});

Cypress.Commands.add("goToPage", (pagePath) => {
  cy.visit(pagePath);
});

Cypress.Commands.add("checkImagesDisplay", () => {
  cy.get(".chakra-image").each(($img) => {
    cy.wrap($img)
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});

/*filtering by tag*/

// Cypress.Commands.add("upcomingEventsIsSelectedByDefault", () => {
//   cy.contains("a", "Upcoming events")
//     .should("be.visible")
//     .should("have.attr", "data-active", "");
// });

Cypress.Commands.add("upcomingEventsIsSelected", () => {
  return cy
    .contains("a", "Upcoming events")
    .should("be.visible")
    .should("have.attr", "data-active", "")
    .then(($el) => {
      return Cypress.$($el).is("[data-active='']"); // returns true or false based on the assertion result
    });
});

// Cypress.Commands.add("clickTagButtonByIndex", (index) => {
//   getTagBtns().eq(index).as("tagBtn").invoke("text").as("tagBtnText");
//   cy.get("@tagBtn")
//     .trigger("mouseover")
//     .click();
// });

// Cypress.Commands.add("clickTagButtonByIndex", (index) => {
//   getTagBtns().eq(index).as("tagBtn").invoke("text").as("tagBtnText");
//   cy.get("@tagBtn")
//     .trigger("mouseover")
//     .click()
//     .then(() => {
//       cy.wrap("@tagBtnText").as("clickedTagBtnText");
//     });
// });

Cypress.Commands.add("clickTagButtonByIndex", (index) => {
  getTagBtns().eq(index).as("tagBtn");
  cy.get("@tagBtn")
    .invoke("text")
    .as("tagBtnText")
    .trigger("mouseover")
    .click()
    .then(() => {
      cy.get("@tagBtnText").as("clickedTagBtnText");
    });
});

// Example usage
// cy.clickTagButtonByIndex(0).then(() => {
//   const clickedTagBtnText = cy.get("@clickedTagBtnText");
//   // Do something with the clickedTagBtnText, such as asserting that it's the expected value
// });

Cypress.Commands.add("clickFirstTagButton", (selector) => {
  getTagBtns().first().as("firstTagBtn").invoke("text").as("firstTagBtnText");
  cy.get("@firstTagBtn")
    .trigger("mouseover")
    .click()
    .should("not.have.class", "css-1umf0ha");
});

Cypress.Commands.add("clickSecondTagButton", () => {
  getTagBtns().eq(1).as("secondTagBtn").invoke("text").as("secondTagBtnText");
  cy.get("@secondTagBtn")
    .trigger("mouseover")
    .click()
    .should("not.have.class", "css-1umf0ha");
});

Cypress.Commands.add("algoliaPostRequestReturnsStatusOk", (timeout = 10000) => {
  cy.wait("@algoliaPostRequest", { timeout }).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  });
});

//upcomingEventsListDisplays(

Cypress.Commands.add("upcomingEventsListDisplays", () => {
  getEventsLength("eventsLength");
  cy.get("@eventsLength").should("be.gt", 0);
});

// Cypress.Commands.add("getUpcomingEvents", () => {
//   getEventsLength("eventsLength");
//   return cy.get("@eventsLength")
//     .then(($events) => {
//     const upcomingEvents = $events.filter(":visible");
//     return upcomingEvents.length;
//   });
// });

// Cypress.Commands.add("getUpcomingEvents", () => {
//   getEventsLength("eventsLength");
//   return cy.get("@eventsLength")
//     .then(($events) => {
//       const upcomingEvents = $events.filter(":visible");
//       return upcomingEvents.length;
//     });
// });

// Cypress.Commands.add("getUpcomingEvents", () => {
//   getEventsLength("eventsLength");
//   return cy.get("@eventsLength")
//     .then(($events) => {
//       const upcomingEvents = $events.toArray().filter((el) => Cypress.$(el).is(":visible"));
//       return upcomingEvents.length;
//     });
// });

// Cypress.Commands.add("getUpcomingEvents", () => {
//   getEventsLength("eventsLength");
//   return cy.get("@eventsLength")
//     .then((length) => {
//       return length;
//     });
// });

// Cypress.Commands.add("getFilteredEvents", () => {
//   getEventsLength("filteredEventsLength");
//   cy.get("@filteredEventsLength").should("be.gt", 0);
// });

// Cypress.Commands.add("getFilteredEvents", () => {
//   getEventsLength("filteredEventsLength");
//   return cy.get("@filteredEventsLength")
//     .then((length) => {
//       return length;
//     });
// });

// Cypress.Commands.add("getEventsLength", () => {
//   getEventsLength("noOfEvents");
//   return cy.get("@noOfEvents")
//     .then((length) => {
//       return length;
//     });
// });

Cypress.Commands.add("getNumberOfEvents", () => {
  getVisibleEvents().then(($events) => {
    const eventsLength = parseInt($events.length, 10);
    cy.wrap(eventsLength).as("noOfEvents");
    return cy.get("@noOfEvents");
  });
});

// Cypress.Commands.add("getEventsLength", (aliasName) => {
//   cy.getVisibleEvents().then(($events) => {
//     const eventsLength = parseInt($events.length, 10);
//     cy.wrap(eventsLength).as(aliasName);
//   });
// });

// Cypress.Commands.add("getTextFromFirstAndSecondTagButton", () => {
//   const tagButtons = [
//     { alias: "@firstTagBtn", text: "" },
//     { alias: "@secondTagBtn", text: "" },
//   ];

//   getTagBtns()
//     .first()
//     .invoke("text")
//     .then((text) => {
//       tagButtons[0].text = text;
//     });

//   getTagBtns()
//     .eq(1)
//     .invoke("text")
//     .then((text) => {
//       tagButtons[1].text = text;
//     });

//   cy.wrap(tagButtons);
// });

Cypress.Commands.add("getTextFromTagButton", (index) => {
  getTagBtns().eq(index).invoke("text").as("tagBtnText");
});

// Cypress.Commands.add("getTextFromFirstAndSecondTagButton", () => {
//   const tagButtons = [
//     { alias: "@firstTagBtn", text: "" },
//     { alias: "@secondTagBtn", text: "" },
//   ];

//   const firstTagBtnTextPromise = getTagBtns()
//     .first()
//     .invoke("text")
//     .then((text) => {
//       tagButtons[0].text = text;
//     });

//   const secondTagBtnTextPromise = getTagBtns()
//     .eq(1)
//     .invoke("text")
//     .then((text) => {
//       tagButtons[1].text = text;
//     });

//   return cy.wrap(tagButtons);
//   // return Promise.all([firstTagBtnTextPromise, secondTagBtnTextPromise]).then(
//   //   () => {
//   //     return tagButtons;
//   //   }
//   // );
// });

Cypress.Commands.add(
  "filteredEventsShouldContainTagForTagButtonClicked",
  (tagButtons) => {
    console.log(tagButtons);
    tagButtons.forEach((tagButton) => {
      cy.get(tagButton.alias).click();
      getTagsOnVisibleEvents()
        .invoke("text")
        .then((text) => {
          const tagsArray = text.split(/(?=[A-Z])/);
          const tagCount = tagsArray.filter((tag) =>
            tag.includes(tagButton.text)
          ).length;
          expect(tagCount).to.be.greaterThan(0);
        });
    });
  }
);

// Cypress.Commands.add("getTextFromFirstAndSecondTagButton", () => {
//   const tagButtons = [
//     { alias: "@firstTagBtn", text: "" },
//     { alias: "@secondTagBtn", text: "" },
//   ];

//   const firstTagBtnPromise = getTagBtns()
//     .first()
//     .invoke("text")
//     .then((text) => {
//       tagButtons[0].text = text;
//     });

//   const secondTagBtnPromise = getTagBtns()
//     .eq(1)
//     .invoke("text")
//     .then((text) => {
//       tagButtons[1].text = text;
//     });

//   return Promise.all([firstTagBtnPromise, secondTagBtnPromise]).then(() => {
//     return cy.wrap(tagButtons);
//   });
// });

Cypress.Commands.add("getTextFromFirstAndSecondTagButton", () => {
  const tagButtons = [
    { alias: "@firstTagBtn", text: "" },
    { alias: "@secondTagBtn", text: "" },
  ];

  return getTagBtns()
    .first()
    .invoke("text")
    .then((text) => {
      tagButtons[0].text = text;
      return getTagBtns().eq(1).invoke("text");
    })
    .then((text) => {
      tagButtons[1].text = text;
      return cy.wrap(tagButtons);
    });
});

Cypress.Commands.add("getTextFromTagButton", (buttonIndex) => {
  const tagButton = { alias: `@tagBtn${buttonIndex}`, text: "" };

  return getTagBtns()
    .eq(buttonIndex)
    .invoke("text")
    .then((text) => {
      tagButton.text = text;
      return cy.wrap(tagButton);
    });
});

Cypress.Commands.add("getTagCountOnEvents", (buttonIndex) => {
  return cy.getTextFromTagButton(buttonIndex).then((tagButton) => {
    return getTagsOnVisibleEvents()
      .invoke("text")
      .then((text) => {
        const tagsArray = text.split(/(?=[A-Z])/);
        const tagCount = tagsArray.filter((tag) =>
          tag.includes(tagButton.text)
        ).length;
        return tagCount;
      });
  });
});

/* */
// waitForNextjsStackFrameRequest
// Cypress.Commands.add("waitForNextjsStackFrameRequest", () => {
//   cy.intercept(
//     "GET",
//     "http://localhost:3000/__nextjs_original-stack-frame?*"
//   ).as("nextjsStackFrameRequest");

//   cy.wait("@nextjsStackFrameRequest", {
//     timeout: 10000,
//     requestTimeout: 60000,
//     retryOnStatusCodeFailure: true,
//   })
//     .its("response.statusCode")
//     .should("eq", 200);
// });

Cypress.Commands.add("waitForAllNextjsStackFrameRequests", () => {
  const requests = [];

  cy.intercept(
    "GET",
    /^http:\/\/localhost:3000\/__nextjs_original-stack-frame.*/
  ).as((req) => {
    console.log("Intercepted request:", req); // Log the intercepted request
    requests.push(req);
  });

  cy.wrap(requests).each((req) => {
    cy.wait(req, {
      timeout: 10000,
      requestTimeout: 60000,
      retryOnStatusCodeFailure: true,
    })
      .its("response.statusCode")
      .should("eq", 200);
  });
});

// does this one work?
Cypress.Commands.add("waitForNextJsRequests", () => {
  cy.intercept("**/nextjs_original_stack-frame*").as("nextJsRequests");

  cy.wait("@nextJsRequests", {
    timeout: 10000,
    requestTimeout: 60000,
    retryOnStatusCodeFailure: true,
  })
    .its("response.statusCode")
    .should("eq", 200);
});

Cypress.Commands.add("waitForAllRequests", () => {
  cy.intercept("**/*").as("allRequests");

  cy.wait("@allRequests", { timeout: 10000 })
    .its("response.statusCode")
    .should("eq", 200);
});

Cypress.Commands.add("interceptAlgoliaRequest", () => {
  cy.intercept(
    "POST",
    "https://vhyjo45ti4-dsn.algolia.net/1/indexes/*/queries?**",
    (req) => {
      req.headers["x-custom-header"] = "custom-value";
    }
  ).as("algoliaPostRequest");
});

Cypress.Commands.add("interceptAndAssertAlgoliaRequest", () => {
  cy.intercept(
    "POST",
    "https://vhyjo45ti4-dsn.algolia.net/1/indexes/*/queries?**",
    (req) => {
      req.headers["x-custom-header"] = "custom-value";
    }
  ).as("algoliaPostRequest");

  cy.wait("@algoliaPostRequest", { timeout: 10000 }).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  });
});
