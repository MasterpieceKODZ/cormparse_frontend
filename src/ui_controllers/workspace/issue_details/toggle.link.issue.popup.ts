export async function issueDetailsToggleLinkIssuePopup() {
	const linkIssuePopup = document.getElementById("iss_dtl_lnk_iss_popup");
	if (linkIssuePopup?.classList.contains("tw-hidden")) {
		document.querySelectorAll(".popup").forEach((el) => {
			el.classList.add("tw-hidden");
		});
	}

	linkIssuePopup?.classList.toggle("tw-hidden");
}
