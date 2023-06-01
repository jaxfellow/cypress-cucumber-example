import { Given, Then } from 'cypress10-cucumber-preprocessor/steps';

export function defineSearchSteps() {

    Given("I am on the Google homepage", () => {
        cy.visit("https://www.google.com/");
        // Accept cookies consent
        cy.get("#L2AGLb").click();
    });

    When('I enter {string} into the search box', (searchTerm) => {
        cy.get('#APjFqb').type(searchTerm).type('{enter}');
    });

    Given("I am on the Google search results page", () => {
        cy.url().should("contain", "google.com/search"); // Check if the URL contains "google.com/search"
      });
      

    Then("I should see search results", () => {
        cy.get("#search").should("be.visible");
    });

    When("I click on the first search result", () => {
        cy.get("#search .g").first().find("a.l").first().click();
    });

    Then("I should be redirected to the corresponding website", () => {
        cy.url().should("not.contain", "google.com");
    });

    When("I click on the {string} button", (buttonText) => {
        cy.contains(buttonText).click({force: true});
    });

    Then("I should be redirected to a random website", () => {
        cy.url().should("not.contain", "search");
    });

}