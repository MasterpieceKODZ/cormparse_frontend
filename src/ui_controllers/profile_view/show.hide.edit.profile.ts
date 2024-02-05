export async function showEditProfileForm() {
	document.getElementById("edt_profile_popout")?.classList.remove("tw-hidden");
}

export async function hideEditProfileForm() {
	document.getElementById("edt_profile_popout")?.classList.add("tw-hidden");
}
