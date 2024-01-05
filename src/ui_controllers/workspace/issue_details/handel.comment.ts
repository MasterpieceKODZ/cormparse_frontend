export async function openCommentEditor() {
	document.getElementById("ad_cmt_cont")?.classList.add("tw-hidden");
	document.getElementById("cmt_editor_cont")?.classList.remove("tw-hidden");
}

export async function closeCommentEditor() {
	document.getElementById("cmt_editor_cont")?.classList.add("tw-hidden");
	document.getElementById("ad_cmt_cont")?.classList.remove("tw-hidden");
}

export async function saveComment() {
	document.getElementById("cmt_editor_cont")?.classList.add("tw-hidden");
	document.getElementById("ad_cmt_cont")?.classList.remove("tw-hidden");
}
