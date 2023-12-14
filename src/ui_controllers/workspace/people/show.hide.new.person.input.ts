export async function showAddProjectPeopleInput() {
	document.getElementById("add_prsn_inp_wrap")?.classList.remove("tw-hidden");

	document
		.getElementById("btn_show_projc_prsn_inp")
		?.classList.add("tw-hidden");
	document
		.getElementById("btn_hide_prjct_prsn_inp")
		?.classList.remove("tw-hidden");
}

export async function hideAddProjectPeopleInput() {
	(document.getElementById("prjct_prsn_un_inp") as HTMLInputElement).value = "";
	document
		.getElementById("prjct_prsn_users_suggest_wrap")
		?.classList.add("tw-hidden");
	document.getElementById("add_prsn_inp_wrap")?.classList.add("tw-hidden");

	// change icon buttons
	document
		.getElementById("btn_hide_prjct_prsn_inp")
		?.classList.add("tw-hidden");
	document
		.getElementById("btn_show_projc_prsn_inp")
		?.classList.remove("tw-hidden");
}
