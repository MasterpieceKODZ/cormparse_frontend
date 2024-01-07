export async function toggleSignOutOptions() {
	// hide all other popup layout
	document.querySelectorAll(".popup").forEach((el) => {
		if (el.id !== "prf_vw_opt_popup") el.classList.add("tw-hidden");
	});

	document.getElementById("prf_vw_opt_popup")?.classList.toggle("tw-hidden");
}
