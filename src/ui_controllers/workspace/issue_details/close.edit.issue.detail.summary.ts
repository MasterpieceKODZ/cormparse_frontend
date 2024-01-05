export async function closeEditIssueDetailSummary(setSummary: any) {
	const newSummary = (
		document.getElementById("iss_dtl_sum_edt_inp") as HTMLInputElement
	).value.trim();

	setSummary(newSummary);

	document.getElementById("iss_dtl_sum_edt")?.classList.remove("tw-flex");
	document.getElementById("iss_dtl_sum_edt")?.classList.add("tw-hidden");

	document.getElementById("iss_dtl_sum_cont")?.classList.remove("tw-hidden");
	document.getElementById("iss_dtl_sum_cont")?.classList.add("tw-flex");
}
