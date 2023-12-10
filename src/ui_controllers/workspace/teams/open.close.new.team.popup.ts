export async function showNewTeamPopup() {
	document.getElementById("new_team_popup")?.classList.remove("tw-hidden");
	document.getElementById("new_team_popup")?.classList.add("tw-flex");
}

export async function hideNewTeamPopup() {
	document.getElementById("new_team_popup")?.classList.remove("tw-flex");
	document.getElementById("new_team_popup")?.classList.add("tw-hidden");
}
