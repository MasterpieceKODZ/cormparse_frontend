export async function showRemovePersonPopup(rank: string, position: string) {
	document.querySelectorAll(".rmv_prj_usr").forEach((el) => {
		el.classList.add("tw-hidden");
	});

	document
		.getElementById(`rmv_prj_usr_${rank}_${position}`)
		?.classList.remove("tw-hidden");
}

export async function hideRemovePersonPopup() {
	document.querySelectorAll(".rmv_prj_usr").forEach((el) => {
		el.classList.add("tw-hidden");
	});
}

export async function confirmRemoveUserFromProject() {
	document.querySelectorAll(".rmv_prj_usr").forEach((el) => {
		el.classList.add("tw-hidden");
	});
}
