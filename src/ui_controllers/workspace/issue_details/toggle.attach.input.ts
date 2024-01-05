export async function toggleIssueDetailSelectAttachmentFile() {
	const attachPopup = document.getElementById("iss_dtl_attach_popup");
	if (attachPopup?.classList.contains("tw-hidden")) {
		document.querySelectorAll(".popup").forEach((el) => {
			el.classList.add("tw-hidden");
		});
	}

	attachPopup?.classList.toggle("tw-hidden");
}
