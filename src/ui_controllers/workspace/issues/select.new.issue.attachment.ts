import { ChangeEvent } from "react";

export async function selectNewIssueFileAttachment(
	e: ChangeEvent<HTMLInputElement>,
) {
	const files = e.target.files;

	console.log(files);
}
