import { ChangeEvent } from "react";

export async function showTeamLeadSuggestion(e: ChangeEvent) {
	const value = (e.currentTarget as HTMLInputElement).value.trim();

	if (value) {
		document
			.getElementById("team_users_suggest_wrap")
			?.classList.remove("tw-hidden");
	}
}
