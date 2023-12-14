export async function openEditTeamLeadPopup(index: string) {
	document.querySelectorAll(".popup").forEach((el) => {
		el.classList.add("tw-hidden");
	});

	document
		.getElementById(`btn_edt_team_lead_${index}`)
		?.classList.add("tw-hidden");

	document
		.getElementById(`btn_cls_edt_team_lead_${index}`)
		?.classList.remove("tw-hidden");

	(
		document.getElementById(`edt_team_lead_inp_${index}`) as HTMLInputElement
	).value = "";

	document
		.getElementById(`edt_team_lead_popup_${index}`)
		?.classList.remove("tw-hidden");
}

export async function closeEditTeamLeadPopup(index: string) {
	(
		document.getElementById(`edt_team_lead_inp_${index}`) as HTMLInputElement
	).value = "";
	document
		.getElementById(`edt_team_lead_sug_popup_${index}`)
		?.classList.add("tw-hidden");

	document
		.getElementById(`btn_cls_edt_team_lead_${index}`)
		?.classList.add("tw-hidden");
	document
		.getElementById(`btn_edt_team_lead_${index}`)
		?.classList.remove("tw-hidden");

	document
		.getElementById(`edt_team_lead_popup_${index}`)
		?.classList.add("tw-hidden");
}

export async function showEditTeamLeadSuggestionPopup(index: string) {
	document
		.getElementById(`edt_team_lead_sug_popup_${index}`)
		?.classList.remove("tw-hidden");
}
