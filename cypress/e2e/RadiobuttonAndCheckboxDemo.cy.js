 describe('Radio Button and Checkbox Operations', () => {

  beforeEach(() => {
    cy.visit('https://testautomationpractice.blogspot.com/');
  });


 it(' Select Male radio button', () => {

    cy.get('#male')
      .check();

  });

 it(' Select Female and verify', () => {

    cy.get('#female')
      .check()
      .should('be.checked');

  });

it('Verify only one radio button can be selected', () => {

    cy.get('#male')
      .check()
      .should('be.checked');

    cy.get('#female')
      .should('not.be.checked');

  });

 it(' Check Sunday', () => {

    cy.get('#sunday')
      .check()
      .should('be.checked');

  });


  
  it('Check Monday', () => {

    cy.get('#monday')
      .check()
      .should('be.checked');

  });


  
  it('Check multiple checkboxes', () => {

    cy.get('#tuesday')
      .check()
      .should('be.checked');

    cy.get('#wednesday')
      .check()
      .should('be.checked');

  });



  it(' Uncheck Sunday', () => {

    cy.get('#sunday')
      .check()
      .should('be.checked');

    cy.get('#sunday')
      .uncheck()
      .should('not.be.checked');

  });

it(' Check first checkbox', () => {

    cy.get('input[type="checkbox"]')
      .first()
      .check()
      .should('be.checked');

  });


 it('Check last checkbox', () => {

    cy.get('input[type="checkbox"]')
      .last()
      .check()
      .should('be.checked');

  });

 it(' Check all four checkboxes', () => {

    cy.get('#sunday, #monday, #tuesday, #wednesday')
      .check()
      .should('be.checked');

  });


it('Uncheck all four checkboxes', () => {
    cy.get('#sunday, #monday, #tuesday, #wednesday')
      .check();

    cy.get('#sunday, #monday, #tuesday, #wednesday')
      .uncheck()
      .should('not.be.checked');

  });

});