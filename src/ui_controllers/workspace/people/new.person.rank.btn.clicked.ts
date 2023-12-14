import { MouseEvent } from "react";

export async function selectNewPersonRank(e: MouseEvent) {
	document.querySelectorAll(".btn_prjct_person_rank").forEach((el) => {
		el.classList.remove("tw-text-blue-600");
		el.classList.add("tw-text-gray-800", "dark:tw-text-gray-400");
	});

	e.currentTarget.classList.remove("tw-text-gray-800", "dark:tw-text-gray-400");
	e.currentTarget.classList.add("tw-text-blue-600");
}
