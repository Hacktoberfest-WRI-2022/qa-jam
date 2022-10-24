describe('empty spec', () => {
  it('passes', () => {
    cy.visit("/");
    cy.get('[data-id="title"]').should("have.text", "Login");
    cy.get('[data-id="label-email"]').should("have.text", "E-mail");
    cy.get('[data-id="label-password"]').should("have.text", "Password");
    cy.get('[data-id="btn-login"]').contains("Login").and("be.enabled");
  })
  
  it("User Cannot Login", () => {
    cy.visit("/");
    cy.get('[data-id="title"]').should("have.text", "Login");
    cy.get('[data-id="label-email"]').should("have.text", "E-mail");
    cy.get('[data-id="label-password"]').should("have.text", "Password");
    cy.get('[data-id="btn-login"]').contains("Login").and("be.enabled");

    cy.get('[data-id="input-email"]').type("random@example.org");
    cy.get('[data-id="input-password"]').type("random");
    cy.get(".btn").click();
    cy.get(".invalid-feedback").contains(
        "These credentials do not match our records."
    );
  });
})