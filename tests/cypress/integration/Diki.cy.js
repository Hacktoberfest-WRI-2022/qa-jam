describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')

    cy.get('.action-focus').focus()
    .should('have.class', 'focus')
    .prev().should('have.attr', 'style', 'color: orange;')
    .type('fakepass1234')
    
    
    cy.get('.action-blur').type('Ayonima ma frenn').blur()
    .should('have.class', 'error')
    .prev().should('have.attr', 'style', 'color: red;')
  })
})
