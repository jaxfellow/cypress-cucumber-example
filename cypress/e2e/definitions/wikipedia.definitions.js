import { Given, Then } from 'cypress10-cucumber-preprocessor/steps';

export function defineWikipediaPageSteps() {

    Given("I am on the Wikipedia homepage", () => {
        cy.visit("https://www.wikipedia.org/");
    });

    When('I enter {string} into the search box', (searchTerm) => {
        cy.get('#searchInput').type(searchTerm);
    });

    When('I click the search button', () => {
        cy.get('.pure-button').click();
    });

    Then("I should see the search results page", () => {
        cy.url().should("contain", "/wiki/");
    });

    When("I search for {string}", (searchTerm) => {
        cy.get('#searchInput').type(searchTerm);
        cy.wait(500);
    });

    When("I click on the first search result", () => {
        cy.get('div.suggestions-dropdown').find('a').first().click();
    });

    Then("I should see the article page for {string}", (articleTitle) => {
        cy.get('#firstHeading').should('contain', articleTitle);
    });

    Given("I am on a Wikipedia article page", () => {
        cy.visit("https://wikipedia.org/wiki/OpenAI#History");
    });

    When("I click on the Wikipedia logo", () => {
        cy.get('.mw-logo').click();
    });

    Then("I should be redirected to the Wikipedia main page", () => {
        cy.url().should("contain", "wiki/Main_Page");
    });

}