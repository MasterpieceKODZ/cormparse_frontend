export async function toggleNewIssuePriorityPopup() {
	if (
		document
			.getElementById("nw_iss_prio_popup")
			?.classList.contains("tw-hidden")
	) {
		document
			.getElementById("nw_iss_prio_icn_arr_dwn")
			?.classList.add("tw-rotate-180");
		document.getElementById("nw_iss_prio_popup")?.classList.remove("tw-hidden");
	} else {
		document
			.getElementById("nw_iss_prio_icn_arr_dwn")
			?.classList.remove("tw-rotate-180");
		document.getElementById("nw_iss_prio_popup")?.classList.add("tw-hidden");
	}
}
