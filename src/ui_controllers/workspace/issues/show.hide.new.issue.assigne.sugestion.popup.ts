export async function toggleNewIssueAssigneeSugPopup() {
	const assigneeUsernameInptVal = (
		document.getElementById("inp_new_iss_assignee") as HTMLInputElement
	).value.trim();

	if (assigneeUsernameInptVal) {
		document
			.getElementById("new_iss_prsn_sug_popup")
			?.classList.remove("tw-hidden");
	} else {
		document
			.getElementById("new_iss_prsn_sug_popup")
			?.classList.add("tw-hidden");
	}
}
