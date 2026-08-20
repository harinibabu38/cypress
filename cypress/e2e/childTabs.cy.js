describe('Handling Child Tabs', () => {

  it('Handle child tab by removing target attribute', () => {

    cy.visit('https://the-internet.herokuapp.com/windows');

    
    cy.get('#content a')
      .should('have.attr', 'target', '_blank');

  
    cy.get('#content a')
      .invoke('removeAttr', 'target')
      .click();

    cy.url()
      .should('include', '/windows/new');

    cy.get('h3')
      .should('have.text', 'New Window');

  });


  it('Handle child tab by extracting href and visiting it', () => {

    cy.visit('https://the-internet.herokuapp.com/windows');

    
    cy.get('#content a')
      .invoke('attr', 'href')
      .then((childUrl) => {

        cy.visit('https://the-internet.herokuapp.com' + childUrl);

      });

    cy.url()
      .should('include', '/windows/new');

    cy.get('h3')
      .should('have.text', 'New Window');

  });


  it('Handle child tab and validate parent page before switching', () => {

    cy.visit('https://the-internet.herokuapp.com/windows');

   
    cy.get('h3')
      .should('have.text', 'Opening a new window');

    cy.get('#content a')
      .should('contain.text', 'Click Here')
      .and('have.attr', 'target', '_blank');

  
    cy.get('#content a')
      .invoke('removeAttr', 'target')
      .click();

  
    cy.url()
      .should('eq', 'https://the-internet.herokuapp.com/windows/new');

    cy.get('h3')
      .should('be.visible')
      .and('have.text', 'New Window');

  });

}); 