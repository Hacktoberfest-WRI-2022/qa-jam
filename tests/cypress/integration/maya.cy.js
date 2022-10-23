describe('empty spec', () => {
  it("Login Page Can Be Open and have correct specification", () => {
        cy.visit("/");
        cy.get('[data-id="title"]').should("have.text", "Login");
        cy.get('[data-id="label-email"]').should("have.text", "E-mail");
        cy.get('[data-id="label-password"]').should("have.text", "Password");
        cy.get('[data-id="btn-login"]').contains("Login").and("be.enabled");
    });

  it("User Can Login", () => {
        cy.visit("/");
        cy.get("h4").should("have.text", "Login");
        cy.get(":nth-child(2) > label").should("have.text", "E-mail");
        cy.get(".control-label").should("have.text", "Password");
        cy.get('[data-id="btn-login"]').contains("Login").and("be.enabled");

        cy.get('[data-id="input-email"]').type("emiliano86@example.net");
        cy.get('[data-id="input-password"]').type("password");
        cy.get('[data-id="btn-login"]').click();
        cy.get("h1").contains("Blank Page");

        cy.get('[data-id="avatar"]').click();
        cy.get('[data-id="btn-logout"]').click();
    });
})