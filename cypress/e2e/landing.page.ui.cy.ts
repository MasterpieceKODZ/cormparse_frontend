it("verify UI into text and get started button should navigate user to login page", () => {
	cy.visit("/").contains("GET STARTED").click();

	cy.url().should("eq", `${Cypress.config().baseUrl}/auth/login`);
});
