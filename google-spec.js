// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {
  it('Visits Google', function () {
    //Visit google Website
    cy.visit('https://demoqa.com/');
    cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
    //Verify number of items present under the Widget Tab
    cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length', 9);
  });
});
