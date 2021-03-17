describe('The tests suite for the elements on the main view', () => {
  before(() => {
    cy.visit('/');
  });
  it('Has a quote card', () => {
    cy.get('[data-cy="quote-card"]').should('have.class', 'quote-card');
  });
  it('Has quote text', () => {
    cy.get('[data-cy="quote-card"] [data-cy="quote-text"]');
  });
  it('Has quote author', () => {
    cy.get('[data-cy="quote-card"] [data-cy="quote-author"]');
  });
});
