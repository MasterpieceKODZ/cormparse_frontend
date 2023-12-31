import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "http://localhost:3000",
		supportFile: "support/e2e.{js,ts}",
		specPattern: "e2e/**/*.cy.{js,jsx,ts,tsx}",
	},
});
