export async function toggleNewIssueAssignee() {
	const drpDwn = document.getElementById("nw_iss_assignee_drp_dwn");

	if (drpDwn?.classList.contains("show")) {
		drpDwn.classList.remove("show");
		document
			.getElementById("nw_iss_icn_dwn")
			?.classList.remove("tw-rotate-180");
	} else {
		drpDwn!.classList.add("show");
		document.getElementById("nw_iss_icn_dwn")?.classList.add("tw-rotate-180");
	}
}
