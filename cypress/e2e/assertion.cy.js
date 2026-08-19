 /*it('should verify login', () => {
  cy.visit('https://the-internet.herokuapp.com/login');

  cy.get('#username').type('tomsmith');
  cy.get('#password').type('SuperSecretPassword!');
  cy.get('.radius').click();

 
  cy.url().should('include', '/secure');


  cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');

  
  cy.get('.flash')
    .should('contain.text', 'You logged into a secure area!');
});*/

describe('Assertions Practice', () => {

  it('should perform implicit assertions', () => {

    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username')
      .should('be.visible')
      .and('be.enabled');

    cy.get('#password')
      .should('be.visible');

    cy.url()
      .should('include', '/login');

    cy.title()
      .should('eq', 'The Internet');

  });

  it('should perform explicit assertions', () => {

    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').then(($input) => {
      expect($input).to.be.visible;
      expect($input).to.be.enabled;
    });

    cy.url().then((url) => {
      expect(url).to.include('/login');
    });

    cy.title().then((title) => {
      expect(title).to.equal('The Internet');
    });

  });

});

// explicit assertion using assert
describe('Explicit Assertions', () => {

  it('should verify login success message', () => {

    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    let expMessage = 'You logged into a secure area!';

    cy.get('.flash').then((x) => {

      let actMessage = x.text();

      assert.include(actMessage, expMessage);

    });

  });

  //using except

  describe('Explicit Assertions', () => {

  it('should verify login success message', () => {

    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    let expMessage = 'You logged into a secure area!';

    cy.get('.flash').then((x) => {

      let actMessage = x.text();

      expect(actMessage).to.contain(expMessage);

    });

  });

});

});