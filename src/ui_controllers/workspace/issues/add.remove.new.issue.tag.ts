import { Dispatch, SetStateAction } from "react";

export async function addNewIssueTag(
	tags: string[],
	setTags: Dispatch<SetStateAction<string[]>>,
) {
	const tag = (
		document.getElementById("inp_new_iss_tag") as HTMLInputElement
	).value
		.trim()
		.toLowerCase();

	if (tag) setTags([...tags, tag]);
}

export async function removeNewIssueTag(
	tags: string[],
	setTags: Dispatch<SetStateAction<string[]>>,
	position: number,
) {
	setTags(
		tags.filter((el, index) => {
			if (position !== index) return el;
		}),
	);
}
