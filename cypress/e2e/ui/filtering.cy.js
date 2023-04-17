import {} from "../../support/command";

import {
  getTagBtns,
  getEvents,
  getEventsLength,
  getTagsOnEvents,
  getTagsOnVisibleEvents,
} from "../../pageObjects/filtering.po";

describe("filtering events list", () => {
  let upcomingEventsCount;

  beforeEach(() => {
    cy.visit("/en/events");
    cy.interceptAndAssertAlgoliaRequest();

    cy.getNumberOfEvents().then((noOfEvents) => {
      upcomingEventsCount = noOfEvents;
      expect(upcomingEventsCount).to.be.greaterThan(0);
    });
  });

  // checks upcoming events are displayed
  // checks no tag buttons are selected
  // gets events length
  // intercepts post request
  // clicks first tag button and checks it's selected
  // waits for algolia post request to return 200
  // gets filtered events length
  // filtered events should be less than events - not necessarily
  // filtered events should contain the tag for the tag button clicked

  it("should filter upcoming events by tag", () => {
    // upcoming events should be selected
    cy.upcomingEventsIsSelected().then((isSelected) => {
      expect(isSelected).to.be.true;
    });

    // upcoming events should display
    let upcomingEventsCount;
    cy.getNumberOfEvents().then((noOfEvents) => {
      upcomingEventsCount = noOfEvents;
      expect(upcomingEventsCount).to.be.greaterThan(0);
    });

    cy.interceptAlgoliaRequest();

    // first tag button in the navigation should be clicked
    // and appear as selected
    cy.clickTagButtonByIndex(0);
    cy.get("@tagBtn").should("not.have.class", "css-1umf0ha");

    // wait for post request to return 200
    cy.algoliaPostRequestReturnsStatusOk();

    // events should display
    let filteredUpcomingEventsByTagCount;
    cy.getNumberOfEvents().then((noOfEvents) => {
      filteredUpcomingEventsByTagCount = noOfEvents;
      expect(filteredUpcomingEventsByTagCount).to.be.greaterThan(0);
      expect(filteredUpcomingEventsByTagCount).to.be.lessThan(
        upcomingEventsCount
      );
    });

    // first tag button text should be visible on events
    cy.getTagCountOnEvents(0).then((tagCount) => {
      expect(tagCount).to.be.greaterThan(0);
    });
  });

  it.only("short version", () => {
    cy.upcomingEventsIsSelected().then((isSelected) => {
      expect(isSelected).to.be.true;
    });

    cy.interceptAlgoliaRequest();

    let clickedTagBtnText;
    cy.clickTagButtonByIndex(0).then(() => {
      clickedTagBtnText = cy.get("@clickedTagBtnText");
      console.log("clicked button text is: ", clickedTagBtnText);
    });
  });

  it("should filter upcoming events by tag - practice", () => {
    // upcoming events should be selected
    cy.upcomingEventsIsSelected().then((isSelected) => {
      expect(isSelected).to.be.true;
    });

    // upcoming events should display
    let upcomingEventsCount;
    cy.getNumberOfEvents().then((noOfEvents) => {
      upcomingEventsCount = noOfEvents;
      expect(upcomingEventsCount).to.be.greaterThan(0);
    });

    cy.interceptAlgoliaRequest();

    // first tag button in the navigation should be clicked
    // and appear as selected
    // cy.clickTagButtonByIndex(0);
    // cy.get("@tagBtn").should("not.have.class", "css-1umf0ha");

    // let clickedTagBtnText;
    // cy.clickTagButtonByIndex(0).then(()=> {
    //   clickedTagBtnText = cy.get("@clickedTagBtnText");
    //   console.log("clicked button text is: ", clickedTagBtnText);
    // });

    // this is for checking if an event display
    // let clickedTagBtnText;
    // cy.get("a.chakra-linkbox").as("$events")
    // .should("have.length.gt",0)
    // .each(($event) => {
    //   cy.wrap($event).should('contain' clickedTagBtnText);
    // });

    // wait for post request to return 200
    cy.algoliaPostRequestReturnsStatusOk();

    // events should display
    let filteredUpcomingEventsByTagCount;
    cy.getNumberOfEvents().then((noOfEvents) => {
      filteredUpcomingEventsByTagCount = noOfEvents;
      expect(filteredUpcomingEventsByTagCount).to.be.greaterThan(0);
      expect(filteredUpcomingEventsByTagCount).to.be.lessThan(
        upcomingEventsCount
      );
    });

    // first tag button text should be visible on events
    cy.getTagCountOnEvents(0).then((tagCount) => {
      expect(tagCount).to.be.greaterThan(0);
    });
  });

  it("should filter events by two selected tags", () => {
    // upcoming events should be selected
    cy.upcomingEventsIsSelected().then((isSelected) => {
      expect(isSelected).to.be.true;
    });
    // upcoming events should display
    // let upcomingEventsCount;
    // cy.getNumberOfEvents().then((noOfEvents) => {
    //   upcomingEventsCount = noOfEvents;
    //   expect(upcomingEventsCount).to.be.greaterThan(0);
    // });

    cy.interceptAlgoliaRequest();

    // first tag button in navigation should be clicked and appear as selected
    // //const clickedTagBtnText;
    // cy.clickTagButtonByIndex(0).then(() => {
    //   clickedTagBtnText = cy.get("@clickedTagBtnText");
    //   console.log("clicked button text is: ", clickedTagBtnText);
    // });

    cy.get("@tagBtn").should("not.have.class", "css-1umf0ha");

    // wait for post request to return 200
    cy.algoliaPostRequestReturnsStatusOk();

    // filtered events should display
    // let filteredUpcomingEventsByTagCount;
    //   cy.getNumberOfEvents().then((noOfEvents) => {
    //     filteredUpcomingEventsByTagCount = noOfEvents;
    //     expect(filteredUpcomingEventsByTagCount).to.be.greaterThan(0);
    //     expect(filteredUpcomingEventsByTagCount).to.be.lessThan(upcomingEventsCount);
    //   });

    // second tag button in navigation should be clicked and appear as selected
    // cy.clickTagButtonByIndex(1);
    // cy.get("@tagBtn").should("not.have.class", "css-1umf0ha");

    cy.algoliaPostRequestReturnsStatusOk();

    // events should display
    // let secondFilteredUpcomingEventsByTagCount;
    // cy.getNumberOfEvents().then((noOfEvents) => {
    //   secondFilteredUpcomingEventsByTagCount = noOfEvents;
    //   cy.wait(1000);
    //   expect(secondFilteredUpcomingEventsByTagCount).to.be.greaterThan(firstFilteredUpcomingEventsByTagCount);
    //   expect(secondFilteredUpcomingEventsByTagCount).to.be.lessThan(upcomingEventsCount);
    // });

    // just trying something
    // let clickedTagBtnText;
    // cy.get("a.chakra-linkbox").as("$events")
    // .should("have.length.gt",0)
    // .each(($event) => {
    //   cy.wrap($event).should('contain' clickedTagBtnText);
    // });

    let filteredUpcomingEventsByTagCount;
    cy.getNumberOfEvents().then((noOfEvents) => {
      filteredUpcomingEventsByTagCount = noOfEvents;
      expect(filteredUpcomingEventsByTagCount).to.be.greaterThan(0);
      expect(filteredUpcomingEventsByTagCount).to.be.lessThan(
        upcomingEventsCount
      );
    });

    // first tag button text should be visible as a tag on events
    cy.getTagCountOnEvents(0).then((tagCount) => {
      expect(tagCount).to.be.greaterThan(0);
    });

    // second tag button text should be visible as a tag on events
    cy.getTagCountOnEvents(1).then((tagCount) => {
      expect(tagCount).to.be.greaterThan(0);
    });
  });

  //   cy.getTextFromFirstAndSecondTagButton().then((tagButtons) => {
  //     console.log("the tag buttons text is", tagButtons);
  //     tagButtons.forEach((tagButton) => {
  //       //cy.get(tagButton.alias).click();
  //       getTagsOnVisibleEvents()
  //         .invoke("text")
  //         .then((text) => {
  //           const tagsArray = text.split(/(?=[A-Z])/);
  //           console.log("the tags array is", tagsArray);
  //           console.log("the tag button text is", tagButton.text);
  //           const tagCount = tagsArray.filter((tag) =>
  //             tag.includes(tagButton.text)
  //           ).length;
  //           expect(tagCount).to.be.greaterThan(0);
  //         });
  //     });
  //   });
  // });

  //cy.filteredEventsShouldContainTagForTagButtonClicked();
  // I'll have to do these tag button separately
  // cy.getTextFromTagButton(0).then((tagButton) => {
  //   console.log(tagButton);
  //   getTagsOnVisibleEvents()
  //     .invoke("text")
  //     .then((text) => {
  //       const tagsArray = text.split(/(?=[A-Z])/);
  //       const tagCount = tagsArray.filter((tag) =>
  //         tag.includes(tagButton.text)
  //       ).length;

  //       expect(tagCount).to.be.greaterThan(0);
  //     });
  // tagButtons.forEach((tagButton) => {
  //   cy.filteredEventsShouldContainTagForTagButtonClicked(tagButton, 0);
  // tagButtons.forEach((tagButton) => {
  //   cy.filteredEventsShouldContainTagForTagButtonClicked(tagButton, 0);
  // });
  // });
  // });

  it("should filter the events list by tag", () => {
    // upcoming events should display
    cy.contains("a", "Upcoming events")
      .should("be.visible")
      .should("have.attr", "data-active", "");

    // no tag buttons should be selected
    getTagBtns().should("have.class", "css-1umf0ha");

    // gets events length
    getEventsLength("eventsLength");
    cy.get("@eventsLength").should("be.gt", 0);

    // intercepts post request
    cy.interceptAlgoliaRequest();

    // should click first tag button and check it's selected
    getTagBtns().first().as("firstTagBtn");
    getTagBtns().first().invoke("text").as("firstTagBtnText");
    cy.get("@firstTagBtn").trigger("mouseover").click();
    cy.get("@firstTagBtn").should("not.have.class", "css-1umf0ha");

    // waits for algolia post request to return 200
    cy.wait("@algoliaPostRequest", { timeout: 10000 }).then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    // gets filtered events length
    getEventsLength("filteredEventsLength");
    cy.get("@filteredEventsLength").should("be.gt", 0);

    // filtered events should be less than events
    // I wonder if that's always the case - maybe not
    // cy.get("@eventsLength").then((eventsLength) => {
    //   cy.get("@filteredEventsLength").then((filteredEventsLength) => {
    //     expect(filteredEventsLength).to.be.lt(eventsLength);
    //   });
    // });

    // filtered events should contain the tag for the tag button clicked
    cy.get("@firstTagBtnText").then((wordToCount) => {
      console.log("wordToCount", wordToCount);
      getTagsOnEvents()
        .invoke("text")
        .then((text) => {
          const wordsArray = text.split(/(?=[A-Z])/);
          const wordCount = wordsArray.filter((word) =>
            word.includes(wordToCount)
          ).length;

          cy.get("@filteredEventsLength").then((filteredEventsLength) => {
            expect(wordCount).to.equal(filteredEventsLength);
          });
        });
    });
  });

  // checks upcoming events are displayed
  // checks no tag buttons are selected
  // gets events length
  // intercepts post request
  // clicks first tag button and checks it's selected
  // waits for algolia post request to return 200
  // gets filtered events length
  // filtered events should be less than events - not necessarily
  // filtered events should contain the tag for the tag button clicked
  // clicks second tag button and checks it's selected
  // waits for algolia post request to return 200
  // gets filtered events length
  // filtered events should be less than events - not necessarily
  // filtered events should contain the tag for the tag button clicked
  // filtered events should contain the tag for the first tag button clicked
  // filtered events should contain the tag for the second tag button clicked

  it("should filter events list by two tags", () => {
    // no tag buttons should be selected
    getTagBtns().should("have.class", "css-1umf0ha");

    // intercepts post requests
    cy.interceptAlgoliaRequest();

    // gets events length when no tags are selected
    getEventsLength("eventsLength");
    cy.get("@eventsLength").should("be.gt", 0);

    // should click first tag button and check it's selected
    getTagBtns().first().as("firstTagBtn").invoke("text").as("firstTagBtnText");
    cy.get("@firstTagBtn")
      .trigger("mouseover")
      .click()
      .should("not.have.class", "css-1umf0ha");

    // waits for algolia post request to return 200
    cy.wait("@algoliaPostRequest", { timeout: 10000 }).then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    // should click second tag button and check it's selected
    getTagBtns().eq(1).as("secondTagBtn").invoke("text").as("secondTagBtnText");
    cy.get("@secondTagBtn")
      .trigger("mouseover")
      .click()
      .should("not.have.class", "css-1umf0ha");

    // waits for algolia post request to return 200
    cy.wait("@algoliaPostRequest", { timeout: 10000 }).then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    // waits for events to be filtered
    // find better way - tried cy.waitUntil but it didn't work and code was super long
    cy.wait(2000);

    // filtered events length should be greater than 0
    getEventsLength("filteredEventsLength");
    cy.get("@filteredEventsLength").should("be.gt", 0);

    // filtered events should contain the tags for the tag buttons clicked
    const tagButtons = [
      { alias: "@firstTagBtn", text: "" },
      { alias: "@secondTagBtn", text: "" },
    ];

    getTagBtns()
      .first()
      .invoke("text")
      .then((text) => {
        tagButtons[0].text = text;
      });

    getTagBtns()
      .eq(1)
      .invoke("text")
      .then((text) => {
        tagButtons[1].text = text;
      });

    tagButtons.forEach((tagButton) => {
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
  });

  // change name to something more descriptive
  it("should filter events list by no tags", () => {
    // no tag buttons should be selected
    getTagBtns().should("have.class", "css-1umf0ha");

    // intercepts post requests
    cy.interceptAlgoliaRequest();

    // click tag button
    getTagBtns().contains("Tel Aviv").as("telAvivBtn");
    cy.get("@telAvivBtn").trigger("mouseover").click();

    // waits for algolia post request to return 200
    cy.wait("@algoliaPostRequest", { timeout: 10000 }).then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    // should have selected class
    cy.get("@telAvivBtn").should("not.have.class", "css-1umf0ha");

    // waits for events to be filtered
    cy.wait(5000); // find better way

    // gets filtered events length
    getEventsLength("filteredEventsLength");
    cy.get("@filteredEventsLength").should("be.gt", 0);

    // click tag button again
    cy.get("@telAvivBtn").trigger("mouseover").click();

    // should have unselected class
    cy.get("@telAvivBtn").should("have.class", "css-1umf0ha");

    // gets events length
    getEventsLength("unfilteredEventsLength");
    cy.get("@unfilteredEventsLength").should("be.gt", 0);

    // checks events length is greater than filtered events length
    cy.get("@unfilteredEventsLength").then((unfilteredEventsLength) => {
      cy.get("@filteredEventsLength").then((filteredEventsLength) => {
        expect(unfilteredEventsLength).to.be.greaterThan(filteredEventsLength);
      });
    });
  });
});
