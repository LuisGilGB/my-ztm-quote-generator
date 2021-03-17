describe('The app is being successfully rendered', () => {
  it('Visits the page', () => {
    cy.visit('/');
  });
  it('Contains Learn React text', () => {
    cy.contains('Learn React');
  });
});
