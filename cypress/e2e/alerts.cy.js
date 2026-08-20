 describe('Alerts', () => {

  
  it('JavaScript Alert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('I am a JS Alert');
    });

    cy.get("button[onclick='jsAlert()']").click();

    cy.get('#result')
      .should('have.text', 'You successfully clicked an alert');

  });

  it('JavaScript Confirm Alert - OK', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.equal('I am a JS Confirm');

      // true means click OK
      return true;
    });

    cy.get("button[onclick='jsConfirm()']").click();

    cy.get('#result')
      .should('have.text', 'You clicked: Ok');

  });

  it('JavaScript Prompt Alert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.window().then((win) => {

      cy.stub(win, 'prompt')
        .returns('Cypress Automation');

    });

    cy.get("button[onclick='jsPrompt()']").click();

    cy.get('#result')
      .should('have.text', 'You entered: Cypress Automation');

  });

  it('Authenticated Alert', () => {

    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    });

    cy.get("div[class='example'] p")
      .should('contain.text', 'Congratulations');

  });

});