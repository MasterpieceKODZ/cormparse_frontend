import { ChangeEvent } from "react";

export async function clickSelectAttachmentFileInput() {
	document.getElementById("iss_dtl_file_inp")?.click();
}

export async function onChangeIssueDetailAttachmentFileInput(
	e: ChangeEvent<HTMLInputElement>,
	setFile: any,
) {
	const file = e.target.files![0];
	document.getElementById("iss_dtl_attach_file_prv")!.textContent = file.name;

	setFile(file);
}

export async function finishAttachmentSelection(file: File) {
	document.getElementById("iss_dtl_attach_popup")?.classList.add("tw-hidden");
}
