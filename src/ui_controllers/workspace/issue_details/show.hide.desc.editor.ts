export async function showIssueDetailDescriptionEditor() {
	document.getElementById("iss_dtl_desc")?.classList.add("tw-hidden");
	document.getElementById("iss_dtl_desc_edt")?.classList.remove("tw-hidden");

	// populate the editor with the current description
	document
		.getElementById("iss_dtl_desc_edt")!
		.querySelector(".ql-editor")!.innerHTML =
		document.getElementById("iss_dtl_desc")!.innerHTML;
}

export async function hideIssueDetailDescriptionEditor() {
	document.getElementById("iss_dtl_desc_edt")?.classList.add("tw-hidden");
	document.getElementById("iss_dtl_desc")?.classList.remove("tw-hidden");
}

export async function saveIssueDetailDescription() {
	// set thr html content of the editor as the new issue description
	document.getElementById("iss_dtl_desc")!.innerHTML = document
		.getElementById("iss_dtl_desc_edt")!
		.querySelector(".ql-editor")!.innerHTML;

	hideIssueDetailDescriptionEditor();
}
