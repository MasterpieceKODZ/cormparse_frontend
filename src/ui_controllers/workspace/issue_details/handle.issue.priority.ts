import { Dispatch, SetStateAction } from "react";

export async function issueDetailTogglePriorityPopup() {
	document.getElementById("iss_dtl_prio_popup")?.classList.toggle("tw-hidden");
}

export async function issueDetailUpdatePriority(
	setIssuePriority: Dispatch<SetStateAction<string>>,
	priority: string,
) {
	setIssuePriority(priority);
	issueDetailTogglePriorityPopup();
}
