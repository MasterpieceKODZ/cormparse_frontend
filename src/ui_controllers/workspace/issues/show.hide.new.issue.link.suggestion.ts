export async function showLinkIssueSuggestion() {
	const value = (
		document.getElementById("inp_nw_iss_lnk_key") as HTMLInputElement
	).value.trim();

	if (value.split("").length >= 3) {
		document.getElementById("nw_iss_lnk_sug")?.classList.remove("tw-hidden");
	}
}

export async function hideLinkIssueSuggestion() {
	document.getElementById("nw_iss_lnk_sug")?.classList.add("tw-hidden");
}
