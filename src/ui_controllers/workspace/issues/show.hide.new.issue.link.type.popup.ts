export async function toggleNewIssueLinkTypePopup() {
	if (
		document
			.getElementById("nw_iss_link_typ_popup")
			?.classList.contains("tw-hidden")
	) {
		document.querySelectorAll("popup").forEach((el) => {
			el.classList.add("tw-hidden");
		});

		document
			.getElementById("nw_iss_link_typ_popup")
			?.classList.remove("tw-hidden");
		document
			.getElementById("nw_iss_link_icn_arr_dwn")
			?.classList.add("tw-rotate-180");
	} else {
		document
			.getElementById("nw_iss_link_typ_popup")
			?.classList.add("tw-hidden");

		document
			.getElementById("nw_iss_link_icn_arr_dwn")
			?.classList.remove("tw-rotate-180");
	}
}
