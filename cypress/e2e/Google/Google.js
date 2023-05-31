import { Given } from "cypress10-cucumber-preprocessor/steps";

const url = 'https://www.google.com/'

Given('I open Google page', () => {
  cy.visit(url)
})

Then('I see {string} in the url', () => {
  cy.url().should('eq', url)
})