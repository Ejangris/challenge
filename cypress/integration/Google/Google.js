import { Given, And} from 'cypress-cucumber-preprocessor/steps';

const url = 'https://www.google.com';
const search_bar_locator = "#APjFqb";
const search_btn_locator = "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf.emcav > div.UUbT9.EyBRub > div.aajZCb > div.lJ9FBc > center > input.gNO89b";
const apps_btn_locator = "body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img";

/**
 * Open page and take screenshot
 */
Given('I open Google page', () => {
  cy.visit(url).then(() => {
    cy.screenshot();
  });
});

/**
 * Search page for a expected parametrized value and take screenshot
 * param: term -> search term
 */
Given('I search {string}', (term) => {
  let search_bar_element = cy.get(search_bar_locator);
  // validate if element is visible before type search term
  search_bar_element.should('be.visible');
  search_bar_element.type(term);
  let search_btn_element = cy.get(search_btn_locator); 
  // validate if element is visible before click it
  search_btn_element.should('be.visible');
  search_btn_element.click().then(() => {
      cy.screenshot();
    });
  });

/**
 * Assertion of google apps page Image and take screenshot
 */
And('I see apps button on header', () => {
  let apps_btn_element = cy.get(apps_btn_locator);
  apps_btn_element.should('be.visible').then(() => {
      cy.screenshot();
  });
});




