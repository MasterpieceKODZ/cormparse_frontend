export async function showTeamMemberOptionsPopup(
	index: string,
	position: string,
) {
	document.querySelectorAll(".popup").forEach((el) => {
		el.classList.add("tw-hidden");
	});

	document
		.getElementById(`btn_team_mem_opt_${index}_${position}`)
		?.classList.add("tw-hidden");

	document
		.getElementById(`btn_cls_team_mem_opt_${index}_${position}`)
		?.classList.remove("tw-hidden");

	(
		document.getElementById(`edt_team_mem_inp_${index}`) as HTMLInputElement
	).value = "";

	document
		.getElementById(`team_mem_opt_popup_${index}_${position}`)
		?.classList.remove("tw-hidden");
}

export async function closeTeamMemberOptionsPopup(
	index: string,
	position: string,
) {
	document
		.getElementById(`team_mem_opt_conf_popup_${index}_${position}`)
		?.classList.add("tw-hidden");

	document
		.getElementById(`btn_cls_team_mem_opt_${index}_${position}`)
		?.classList.add("tw-hidden");
	document
		.getElementById(`btn_team_mem_opt_${index}_${position}`)
		?.classList.remove("tw-hidden");

	document
		.getElementById(`team_mem_opt_popup_${index}_${position}`)
		?.classList.add("tw-hidden");
}
