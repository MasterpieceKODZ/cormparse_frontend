export async function toggleIssueStatusFilter() {
	if (
		document
			.getElementById("iss_status_filter_cont")
			?.classList.contains("tw-hidden")
	) {
		document.querySelectorAll(".iss_filter_btn_arw").forEach((el) => {
			el.classList.remove("tw-rotate-180");
		});

		document.querySelectorAll(".iss_filter_popup").forEach((el) => {
			el.classList.add("tw-hidden");
		});
	}

	document
		.getElementById("iss_status_filter_btn_arw")
		?.classList.toggle("tw-rotate-180");

	document
		.getElementById("iss_status_filter_cont")
		?.classList.toggle("tw-hidden");
}

export async function filterIssueByStatus() {
	document
		.getElementById("iss_status_filter_btn_arw")
		?.classList.remove("tw-rotate-180");

	document.getElementById("iss_status_filter_cont")?.classList.add("tw-hidden");
}
