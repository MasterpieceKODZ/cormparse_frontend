import { MouseEvent } from "react";

export async function projectDetailsLeftPaneIssueFilterOnClick(e: MouseEvent) {
	document.querySelectorAll(".prj_dtl_side_pane_iss_fil_btn").forEach((el) => {
		el.classList.remove("tw-bg-gray-200", "dark:tw-bg-gray-700");
	});

	e.currentTarget.classList.add("tw-bg-gray-200", "dark:tw-bg-gray-700");
}
