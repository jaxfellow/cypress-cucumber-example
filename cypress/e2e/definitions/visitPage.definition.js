import { Given, Then } from 'cypress10-cucumber-preprocessor/steps';
import { getWebsite } from '../common/websites';

export function defineVisitPageSteps() {

    Given('I open {string} page', (website) => {     
        website = getWebsite(website);
        cy.visit(website);
    })

    Then('I see {string} in the url', (website) => {
        website = getWebsite(website);
        cy.url().should('eq', website)
    })
}