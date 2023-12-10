import { MouseEvent } from "react";

export async function showUserPopup(e: MouseEvent) {
	e.currentTarget.querySelector(".user_popup")?.classList.remove("tw-hidden");
}

export async function hideUserPopup(e: MouseEvent) {
	e.currentTarget.querySelector(".user_popup")?.classList.add("tw-hidden");
}
