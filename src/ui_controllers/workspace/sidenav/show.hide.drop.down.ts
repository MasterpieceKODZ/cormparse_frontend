import { MouseEvent } from "react";

export async function openCloseDropDown(e: MouseEvent) {
	document.querySelector(`.${e.currentTarget.id}`)?.classList.toggle("show");
	document
		.querySelector(`.${e.currentTarget.id}_icon`)
		?.classList.toggle("tw-rotate-180");
}
