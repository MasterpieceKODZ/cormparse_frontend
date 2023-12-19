export async function toggleIssueDueDatefilter() {
	if (
		document
			.getElementById("iss_due_date_filter_cont")
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
		.getElementById("iss_due_date_filter_btn_arw")
		?.classList.toggle("tw-rotate-180");

	document
		.getElementById("iss_due_date_filter_cont")
		?.classList.toggle("tw-hidden");
}

export async function filterIssueByDueDate(time: "now" | "3-days") {
	clearDueDateIndicator();
	document
		.getElementById("iss_due_date_filter_btn_arw")
		?.classList.remove("tw-rotate-180");

	document
		.getElementById("iss_due_date_filter_cont")
		?.classList.add("tw-hidden");

	if (time == "now") {
		document
			.getElementById("btn_filter_iss_due_date_nw")
			?.classList.remove("tw-text-gray-800", "dark:tw-text-gray-300");
		document
			.getElementById("btn_filter_iss_due_date_nw")
			?.classList.add("tw-text-red-700");
	} else {
		document
			.getElementById("btn_filter_iss_due_date_3_days")
			?.classList.remove("tw-text-gray-800", "dark:tw-text-gray-300");
		document
			.getElementById("btn_filter_iss_due_date_3_days")
			?.classList.add("tw-text-red-700");
	}
}

export async function clearDueDateIndicator() {
	document.querySelectorAll(".btn_due_filt").forEach((el) => {
		el.classList.remove("tw-text-red-700");
		el.classList.add("tw-text-gray-800", "dark:tw-text-gray-300");
	});
}
