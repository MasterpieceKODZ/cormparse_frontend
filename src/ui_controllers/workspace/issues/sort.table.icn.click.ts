import { MouseEvent } from "react";

export async function issuesListTableSortArrowClicked(e: MouseEvent) {
	// hide all sort icons
	document.querySelectorAll(".iss_srt_icn").forEach((el) => {
		el.classList.add("tw-invisible");
	});

	// reset all table head buttons to in-active
	document.querySelectorAll(".iss_tb_hd").forEach((el) => {
		el.classList.remove("tw-bg-gray-300", "dark:tw-bg-gray-800", "active");
	});
	e.currentTarget.parentElement?.classList.add(
		"tw-bg-gray-300",
		"dark:tw-bg-gray-800",
		"active",
	);

	e.currentTarget.classList.remove("tw-invisible");
	e.currentTarget.classList.toggle("tw-rotate-180");
}
