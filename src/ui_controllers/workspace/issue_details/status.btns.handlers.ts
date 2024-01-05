import { Dispatch, SetStateAction } from "react";

export async function toggleIssueDetailStatusButtonsLayout() {
	document
		.getElementById("iss_dtl_sts_btns_lyt")
		?.classList.toggle("tw-hidden");
	document
		.getElementById("iss_dtl_sts_btn_icn")
		?.classList.toggle("tw-rotate-180");
}

export async function updateIssueStatus(
	setStatusState: Dispatch<SetStateAction<string>>,
	status: string,
) {
	setStatusState(status);
	toggleIssueDetailStatusButtonsLayout();
}
