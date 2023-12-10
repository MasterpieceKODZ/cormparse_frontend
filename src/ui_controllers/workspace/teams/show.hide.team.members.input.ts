export async function showTeamMembersInput() {
	document
		.getElementById("create_team_mem_inp_wrap")
		?.classList.remove("tw-hidden");

	document.getElementById("btn_show_team_mem_inp")?.classList.add("tw-hidden");
	document
		.getElementById("btn_hide_team_mem_inp")
		?.classList.remove("tw-hidden");
}

export async function hideTeamMembersInput() {
	(document.getElementById("team_mem_un_inp") as HTMLInputElement).value = "";
	document
		.getElementById("team_mem_users_suggest_wrap")
		?.classList.add("tw-hidden");
	document
		.getElementById("create_team_mem_inp_wrap")
		?.classList.add("tw-hidden");

	// change icon buttons
	document.getElementById("btn_hide_team_mem_inp")?.classList.add("tw-hidden");
	document
		.getElementById("btn_show_team_mem_inp")
		?.classList.remove("tw-hidden");
}
