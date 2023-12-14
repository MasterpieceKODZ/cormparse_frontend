import { ChangeEvent } from "react";

export async function validateUsernameSyntax(e: ChangeEvent) {
	const username: string = (e.currentTarget as HTMLInputElement).value;

	if (/\s/gi.test(username)) {
		document
			.getElementById("txt_usr_nm_caution")
			?.classList.remove("tw-invisible");
	} else if (/[^a-zA-Z0-9_@$+]/gi.test(username)) {
		document.getElementById("txt_usr_nm_caution")!.textContent =
			"username can only contain _,@,$,+ as special characters";
		document
			.getElementById("txt_usr_nm_caution")
			?.classList.remove("tw-invisible");
	} else {
		document
			.getElementById("txt_usr_nm_caution")
			?.classList.add("tw-invisible");
	}
}
