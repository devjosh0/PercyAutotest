describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://staging.amt-website.amalitech-dev.net/automation-testing2')
   // cy.url().should('include', 'testing-space')
   
   //cy.get('.module-contents > :nth-child(2)').should('be.visible');
cy.percySnapshot('footer', {
  scope: '.main-content > :nth-child(3)'
});

  })
})