import { MouseEvent } from "react";

export async function toggleArrowIcon(e: MouseEvent) {
	if (!e.currentTarget.classList.contains("active")) {
		document
			.querySelector(`.${e.currentTarget.id}_arrow`)
			?.classList.toggle("tw-invisible");
	}
}
