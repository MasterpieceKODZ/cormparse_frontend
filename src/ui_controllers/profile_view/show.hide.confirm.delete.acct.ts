export async function toggleConfirmDeleteAccountPopup() {
	// hide all other popup layout
	document.querySelectorAll(".popup").forEach((el) => {
		if (el.id !== "cont_del_acct_popup") el.classList.add("tw-hidden");
	});

	document.getElementById("cont_del_acct_popup")?.classList.toggle("tw-hidden");
}

export async function deleteAccount() {
	toggleConfirmDeleteAccountPopup();
}
