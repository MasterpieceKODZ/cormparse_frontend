export async function showNewPersonPopup() {
	document.querySelectorAll(".popup").forEach((e) => {
		e.classList.add("tw-hidden");
	});
	document.getElementById("new_person_popup")?.classList.remove("tw-hidden");
	document.getElementById("new_person_popup")?.classList.add("tw-grid");
}

export async function hideNewTeamPopup() {
	document.getElementById("new_person_popup")?.classList.remove("tw-grid");
	document.getElementById("new_person_popup")?.classList.add("tw-hidden");
}
