import { MouseEvent } from "react";

export async function openTeamAccordion(e: MouseEvent) {
	e.currentTarget.parentElement
		?.querySelector(".team_memb_list")
		?.classList.toggle("show");
	e.currentTarget
		.querySelector(".team_drop_icon")
		?.classList.toggle("tw-rotate-180");
}
