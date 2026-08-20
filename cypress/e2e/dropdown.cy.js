 /*describe('Handle Dropdowns', () => {

  it('Dynamic dropdown', () => {

    cy.visit('https://www.google.com/');

    cy.get('input[name="q"]')
      .type('cypress automation');

    cy.get('div.wM6W7d span')
      .should('have.length', 11);

    cy.get('div.wM6W7d span')
      .each(($el, index, $list) => {

        if ($el.text() === 'cypress automation tool') {

          cy.wrap($el).click();

        }

      });

  });
});*/





describe('Dynamic Dropdown Practice', () => {

  it('should select a suggestion from dynamic dropdown', () => {

    cy.visit('https://www.google.com/');

    
    cy.get('#search')
      .type('Ind');

    
    cy.get('.suggestions')
      .should('be.visible');

    
    cy.get('.suggestions')
      .contains('India')
      .click();

  });

});