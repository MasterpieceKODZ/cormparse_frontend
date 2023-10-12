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
				className="tw-w-60 tw-text-center"
				placeholder="Write a quote..."
			/>
			<br />
			<br />
			<br />
			<button
				type="submit"
				className="tw-bg-primary">
				Submit
			</button>
		</form>
	);
};

export default TestForm;
