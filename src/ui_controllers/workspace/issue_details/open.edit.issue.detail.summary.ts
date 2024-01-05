export async function openEditIssueDetailSummary() {
	document.getElementById("iss_dtl_sum_cont")?.classList.remove("tw-flex");
	document.getElementById("iss_dtl_sum_cont")?.classList.add("tw-hidden");

	document.getElementById("iss_dtl_sum_edt")?.classList.remove("tw-hidden");
	document.getElementById("iss_dtl_sum_edt")?.classList.add("tw-flex");
}
