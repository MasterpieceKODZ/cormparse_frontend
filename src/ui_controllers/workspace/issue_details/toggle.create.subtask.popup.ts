export async function issueDetailsToggleCreateSubtaskPopup() {
	const linkIssuePopup = document.getElementById("iss_dtl_crt_sb_tsk");
	if (linkIssuePopup?.classList.contains("tw-hidden")) {
		document.querySelectorAll(".popup").forEach((el) => {
			el.classList.add("tw-hidden");
		});
	}

	linkIssuePopup?.classList.toggle("tw-hidden");
}
