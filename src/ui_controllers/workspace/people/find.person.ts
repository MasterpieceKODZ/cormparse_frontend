import { ChangeEvent } from "react";

export async function showProjectPersonSuggestion(e: ChangeEvent) {
	const value = (e.currentTarget as HTMLInputElement).value.trim();

	if (value)
		document
			.getElementById("prjct_prsn_users_suggest_wrap")
			?.classList.remove("tw-hidden");
}
