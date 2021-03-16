describe('The app is being successfully rendered', () => {
  it('Visits the page', () => {
    cy.visit('http://localhost:3000/');
  });
  it('Contains Learn React text', () => {
    cy.contains('Learn React');
  });
});
