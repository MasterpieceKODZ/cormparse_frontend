export async function initiateTeamLeadDemotion(index: string, name: string) {
	document
		.getElementById(`team_lead_opt_popup_${index}`)
		?.classList.add("tw-hidden");
	document
		.getElementById(`team_lead_opt_conf_popup_${index}`)
		?.classList.remove("tw-hidden");

	document.getElementById(
		`team_lead_opt_conf_txt_${index}`,
	)!.textContent = `Are you sure you want to demote ${name} as the lead ot this team?`;
}
