import { MouseEvent } from "react";

export async function selectLinkIssueType(
	e: MouseEvent,
	linkedIssue: any,
	setLinkendIssue: any,
) {
	const linkRelation = e.currentTarget.textContent;
	document.getElementById("nw_iss_lnk_drp_dwn_txt")!.textContent = linkRelation;

	document.getElementById("nw_iss_link_typ_popup")?.classList.add("tw-hidden");

	document
		.getElementById("nw_iss_link_icn_arr_dwn")
		?.classList.remove("tw-rotate-180");

	setLinkendIssue({ ...linkedIssue, relation: linkRelation });
}
