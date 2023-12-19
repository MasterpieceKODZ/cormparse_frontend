import { MouseEvent } from "react";

export async function sortIssuesTable(e: MouseEvent) {
	document.querySelectorAll(".iss_tb_hd").forEach((el) => {
		el.classList.remove("tw-bg-gray-300", "dark:tw-bg-gray-800", "active");

		document.querySelector(`.${el.id}_arrow`)?.classList.add("tw-invisible");
	});
	e.currentTarget.classList.add(
		"tw-bg-gray-300",
		"dark:tw-bg-gray-800",
		"active",
	);

	//show and rotate arrow icon
	document
		.querySelector(`.${e.currentTarget.id}_arrow`)
		?.classList.remove("tw-invisible");
}
