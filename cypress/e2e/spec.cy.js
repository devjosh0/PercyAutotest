describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://amalitech-website-web.vercel.app/testing-space')
    cy.url().should('include', 'testing-space')
   cy.document().percySnapshot('Docs');
   
   cy.get('section.w-full.text-white.py-6.px-2xl.md\\:px-5.bg-white').should('be.visible');
cy.percySnapshot('Block Quote', {
  scope: 'section.w-full.text-white.py-6.px-2xl.md\\:px-5.bg-white'
});

  })
})