export async function removeUserFromTeam(
	index: string,
	name: string,
	rank: string,
	position: string,
) {
	if (position == "lead") {
		document
			.getElementById(`team_lead_opt_popup_${index}`)
			?.classList.add("tw-hidden");
		document
			.getElementById(`team_lead_opt_conf_popup_${index}`)
			?.classList.remove("tw-hidden");

		document.getElementById(
			`team_lead_opt_conf_txt_${index}`,
		)!.textContent = `Are you sure you want to remove ${name} from the team?`;
	} else {
		document
			.getElementById(`team_mem_opt_popup_${index}_${position}`)
			?.classList.add("tw-hidden");
		document
			.getElementById(`team_mem_opt_conf_popup_${index}_${position}`)
			?.classList.remove("tw-hidden");

		document.getElementById(
			`team_mem_opt_conf_txt_${index}_${position}`,
		)!.textContent = `Are you sure you want to remove ${name} from the team?`;
	}
}
