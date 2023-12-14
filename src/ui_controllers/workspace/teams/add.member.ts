export async function openNewMemberInput(index: string) {
	document
		.getElementById(`edt_team_mem_popup_${index}`)
		?.classList.remove("tw-hidden");
}

export async function closeNewMemberInput(index: string) {
	(
		document.getElementById(`edt_team_mem_inp_${index}`) as HTMLInputElement
	).value = "";
	document
		.getElementById(`edt_team_mem_sug_popup_${index}`)
		?.classList.add("tw-hidden");
	document
		.getElementById(`edt_team_mem_popup_${index}`)
		?.classList.remove("tw-hidden");
}

export async function showEditTeamMembersSuggestionPopup(index: string) {
	document
		.getElementById(`edt_team_mem_sug_popup_${index}`)
		?.classList.remove("tw-hidden");
}
