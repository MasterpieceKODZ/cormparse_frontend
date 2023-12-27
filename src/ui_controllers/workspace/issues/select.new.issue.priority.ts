import { Dispatch, SetStateAction } from "react";

export async function selectNewIssuePrority(
	setNewIssuePriorityState: Dispatch<SetStateAction<string>>,
	priority: string,
) {
	document
		.getElementById("nw_iss_prio_icn_arr_dwn")
		?.classList.remove("tw-rotate-180");
	document.getElementById("nw_iss_prio_popup")?.classList.add("tw-hidden");

	setNewIssuePriorityState(priority);
}
