describe('Cypress Practice', () => {

  it('should check the first checkbox', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');

    cy.get('input[type="checkbox"]')
      .first()
      .check()
      .should('be.checked');
  });

  it('should check the last checkbox', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');

    cy.get('input[type="checkbox"]')
      .last()
      .check()
      .should('be.checked');
  });

  it('should click the login button', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('.radius').click();

    cy.url().should('include', '/secure');
  });

  it('should login successfully', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username')
      .type('tomsmith')
      .should('have.value', 'tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!')
      .should('have.value', 'SuperSecretPassword!');

    cy.get('.radius').click();

    cy.url().should('include', '/secure');

    cy.get('.flash').should('be.visible');
  });

});