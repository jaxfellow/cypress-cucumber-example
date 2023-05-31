import { Given, Then } from "cypress10-cucumber-preprocessor/steps";

const url = "https://www.facebook.com/"

Given('I open Facebook page', () => {
  cy.visit(url)
})

Then('I see {string} in the url', () => {
    cy.url().should('eq', url)
  })