import { Dispatch, SetStateAction } from "react";

export async function selectNewIssueType(
	setNewIssueTypeState: Dispatch<SetStateAction<string>>,
	type: string,
) {
	document
		.getElementById("nw_iss_typ_icn_arr_dwn")
		?.classList.remove("tw-rotate-180");
	document.getElementById("nw_iss_type_popup")?.classList.add("tw-hidden");

	setNewIssueTypeState(type);
}
