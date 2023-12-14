export async function showTeamLeadOptionsPopup(index: string) {
	document
		.getElementById(`btn_team_lead_opt_${index}`)
		?.classList.add("tw-hidden");
	document
		.getElementById(`btn_cls_team_lead_opt_${index}`)
		?.classList.remove("tw-hidden");
	document
		.getElementById(`team_lead_opt_popup_${index}`)
		?.classList.remove("tw-hidden");
}

export async function hideTeamLeadOptionsPopup(index: string) {
	document
		.getElementById(`btn_cls_team_lead_opt_${index}`)
		?.classList.add("tw-hidden");
	document
		.getElementById(`btn_team_lead_opt_${index}`)
		?.classList.remove("tw-hidden");
	document
		.getElementById(`team_lead_opt_conf_popup_${index}`)
		?.classList.add("tw-hidden");
	document
		.getElementById(`team_lead_opt_popup_${index}`)
		?.classList.add("tw-hidden");
}
