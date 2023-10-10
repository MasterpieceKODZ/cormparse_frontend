const quote = "I am the MASTER of my FATE and the CAPTAIN of my soul";

describe("quote output", () => {
	it("show input text in new paragraph", () => {
		cy.visit("/");

		cy.get("#inp-qut").type(quote);

		cy.get("button").click();

		cy.get("#p-show-qut").should("have.text", quote);
	});
});
