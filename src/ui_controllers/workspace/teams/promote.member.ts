export async function initiateTeamMemberPromotion(
	index: string,
	name: string,
	position: string,
) {
	document.querySelectorAll(".popup").forEach((el) => {
		el.classList.add("tw-hidden");
	});

	document
		.getElementById(`team_mem_opt_conf_popup_${index}_${position}`)
		?.classList.remove("tw-hidden");

	document.getElementById(
		`team_mem_opt_conf_txt_${index}_${position}`,
	)!.textContent = `Are you sure you want to promote ${name} to the lead.`;
}

export async function promoteTeamMemberToLead(
	index: string,
	name: string,
	position: string,
) {
	document.querySelectorAll(".popup").forEach((el) => {
		el.classList.add("tw-hidden");
	});

	document
		.getElementById(`btn_cls_team_mem_opt_${index}_${position}`)
		?.classList.add("tw-hidden");
	document
		.getElementById(`btn_team_mem_opt_${index}_${position}`)
		?.classList.remove("tw-hidden");
}
