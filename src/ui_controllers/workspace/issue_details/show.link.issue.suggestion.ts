import { ChangeEvent } from "react";

export async function issueDetailsShowLinkIssueSuggestion(
	e: ChangeEvent<HTMLInputElement>,
) {
	const inputValue = e.target.value;

	if (inputValue.length >= 3) {
		document.getElementById("iss_dtl_lnk_sug")?.classList.remove("tw-hidden");
	} else if (inputValue.length < 1) {
		document.getElementById("iss_dtl_lnk_sug")?.classList.add("tw-hidden");
	}
}
