// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {
  it('Visits Google', function () {
    //Visit google Website
    cy.visit('https://demoqa.com/');
    cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
    //Verify number of items present under the Widget Tab
    cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length', 9);
    cy.get(':nth-child(2) > .group-header > .header-wrapper').click();
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click();
    cy.get('.playgound-header').contains('Practice Form');
    // cy.visit(Cypress.env('imago_url'));
    cy.get('#firstName').type('vijay');
    cy.get('#lastName').type('Mogali');
    cy.get('#userEmail').type('abc@gmail.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
  });
});
