
const url = "https://github.com/"

Given('I open Github page', () => {
    cy.visit(url)
});

Then('I see {string} in the url', () => {
    cy.url().should('eq', url)
  })