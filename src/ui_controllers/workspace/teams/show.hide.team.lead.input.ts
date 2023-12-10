export async function showTeamLeadInput() {
	document.getElementById("create_team_lead_wrap")?.classList.add("tw-hidden");
	document
		.getElementById("create_team_lead_inp_wrap")
		?.classList.toggle("tw-hidden");
}

export async function hideTeamLeadInput() {
	// clear team lead username input and hide the suggestion layout
	//setTeamLeadUsername("");
	(document.getElementById("team_lead_un_inp") as HTMLInputElement).value = "";

	document
		.getElementById("team_users_suggest_wrap")
		?.classList.add("tw-hidden");

	document
		.getElementById("create_team_lead_inp_wrap")
		?.classList.add("tw-hidden");
	document
		.getElementById("create_team_lead_wrap")
		?.classList.remove("tw-hidden");
}
