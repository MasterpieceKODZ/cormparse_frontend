"use client";

import submitForm from "@/ui_controllers/submit.quote";

const TestForm = () => {
	return (
		<form
			action="/"
			onSubmit={submitForm}>
			<input
				type="text"
				name="quote"
				id="inp-qut"
				placeholder="Write a quote..."
			/>
			<br />
			<br />
			<br />
			<button type="submit">Submit</button>
		</form>
	);
};

export default TestForm;
