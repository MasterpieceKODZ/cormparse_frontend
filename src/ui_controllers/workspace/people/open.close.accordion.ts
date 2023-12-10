import { MouseEvent } from "react";

export async function openClosePeopleAccordion(e: MouseEvent) {
	e.currentTarget.parentElement
		?.querySelector(".people_memb_list")
		?.classList.toggle("show");
	e.currentTarget
		.querySelector(".people_drop_icon")
		?.classList.toggle("tw-rotate-180");
}
