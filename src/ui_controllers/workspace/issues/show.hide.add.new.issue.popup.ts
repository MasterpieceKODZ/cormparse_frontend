export async function toggleNewIssuePopup() {
	if (document.getElementById("new_iss_popup")?.classList.contains("tw-hidden"))
		document.querySelectorAll(".popup").forEach((el) => {
			el.classList.add("tw-hidden");
		});

	document.getElementById("new_iss_popup")?.classList.toggle("tw-hidden");
}
