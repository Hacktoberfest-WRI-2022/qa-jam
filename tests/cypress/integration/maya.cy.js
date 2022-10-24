describe('empty spec', () => {
  it("Login Page Can Be Open and have correct specification", () => {
        cy.visit("/");
        cy.get('[data-id="title"]').should("have.text", "Login");
        cy.get('[data-id="label-email"]').should("have.text", "E-mail");
        cy.get('[data-id="label-password"]').should("have.text", "Password");
        cy.get('[data-id="btn-login"]').contains("Login").and("be.enabled");
    });

  
})