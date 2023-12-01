import { MouseEvent } from "react";

export function toggleWorkspaceNavPopup(e: MouseEvent) {
	// close all workspace navbar popups except the active one
	if (
		document
			.querySelector(`.${e.currentTarget.id}`)
			?.classList.contains("tw-hidden")
	) {
		document.querySelectorAll(".popup").forEach((e) => {
			e.classList.add("tw-hidden");
		});
	}

	// show the triggered popup
	document
		.querySelector(`.${e.currentTarget.id}`)
		?.classList.toggle("tw-hidden");
}
