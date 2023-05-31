import { Given } from "cypress10-cucumber-preprocessor/steps";

export function defineOpenWebpageSteps() {

  const google = "https://google.com";
  const facebook = "https://facebook.com"
  const github = "https://github.com"

  Given(`I open {string} page`, (url) => {
    switch (url) {
      case 'Facebook':
        cy.visit(facebook);
      case 'Google':
        cy.visit(google);
      case 'Github':
        cy.visit(github);
      default:
        throw new Error(`Unknown website: ${url}`);
    }
  });

  Then(`I see {string} in the title`, title => {
    cy.title().should("include", title);
  });

}

