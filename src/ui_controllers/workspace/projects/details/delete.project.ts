export async function showDeleteProjectPopup() {
	document.getElementById("btn_del_prj")?.classList.remove("tw-hidden");
}

export async function hideDeleteProjectPopup() {
	document.getElementById("btn_del_prj")?.classList.add("tw-hidden");
}

export async function deleteProject() {
	document.getElementById("btn_del_prj")?.classList.add("tw-hidden");
}
