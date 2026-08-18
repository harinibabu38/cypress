describe('Title Verification', () => {

  it('verify page title', () => {

    cy.visit('https://the-internet.herokuapp.com/');

    cy.title().should('eq', 'The Internet');

  });

});