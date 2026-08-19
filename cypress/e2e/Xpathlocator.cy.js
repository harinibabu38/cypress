

describe('XPath Practice', () => {

  it('should login using XPath', () => {

    cy.visit('https://the-internet.herokuapp.com/login');

    
    cy.xpath('//input[@id="username"]')
      .type('tomsmith');

  
    cy.xpath('//input[@id="password"]')
      .type('SuperSecretPassword!');

  
    cy.xpath('//button[@class="radius"]')
      .click();

  
    cy.url().should('include', '/secure');

  });

});