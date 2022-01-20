// type definitions for Cypress object "cy"
/// <reference types="cypress" />
import authData from '../../fixtures/auth';

console.log(authData);
describe('My First Cypress Test', function () {
  it('Visits demoQa', function () {
    //Visit demoQA Website
    cy.visit('https://demoqa.com/');
    cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
    //Verify number of items present under the Widget Tab
    cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length', 9);
    cy.get(':nth-child(2) > .group-header > .header-wrapper').click();
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click();
    cy.get('.playgound-header').contains('Practice Form');
    // cy.visit(Cypress.env('imago_url'));
  });
  it('Input Data - Student Registration Form', () => {
    const { name } = authData;
    cy.get('#firstName').type(name.firstname);
    cy.get('#lastName').type(name.lastname);
    cy.get('#userEmail').should('be.visible').type(name.email);
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
    cy.get('#userNumber').type(name.phone);
    // cy.get('#dateOfBirthInput').type(name.dob);
    cy.get('.subjects-auto-complete__value-container').type(name.sub);
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
    cy.get('#currentAddress').type('123 Main St Dublin Ohio');
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click();
    cy.get('#react-select-3-option-1').click();
    // cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click();
    cy.get('#react-select-4-option-1').click();

    // cy.get('.css-1pahdxg-control > .css-1hwfws3').click();
    // cy.get('.css-1pahdxg-control > .css-1hwfws3').click();
    // cy.get('#stateCity-wrapper > :nth-child(2)').focus;
    // cy.get('#stateCity-wrapper > :nth-child(2)').click();
    // cy.get('[id="state"]').select('NCR');
    // cy.get('#stateCity-wrapper > :nth-child(3)').select(Option - 2);
    // cy.get('#stateCity-wrapper').select(Option - 2);
  });
});
