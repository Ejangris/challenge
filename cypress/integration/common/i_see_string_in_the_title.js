import { Then } from 'cypress-cucumber-preprocessor/steps';

/**
 * Assertion of title
 */
Then('I see {string} in the title', (title) => {
  cy.title().should('include', title);
});
