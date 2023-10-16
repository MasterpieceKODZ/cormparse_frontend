import { ChangeEvent } from "react";

export function validatePasswordSyntax(e: ChangeEvent<HTMLInputElement>) {
	// password input type changes to password when user starts typing even when show password is on, hence keep password type as text when show password is on
	const showPW = document.getElementById("pw_tgl") as HTMLInputElement;

	const pwInput = document.getElementById("inp_pw");
	if (showPW.checked) {
		pwInput?.setAttribute("type", "text");
	} else {
		pwInput?.setAttribute("type", "password");
	}

	const pw = e.currentTarget.value;

	const pwReq = document.getElementById("pw_req");

	// warn user of space in password
	if (/\s/.exec(pw)) {
		pwReq!.textContent = "password may not contain spaces!";
		pwReq?.classList.remove("tw-text-mygrey-lyt", "pw-ok");
		pwReq?.classList.add("pw-err");
	} else if (/[\w\W]{32,}/.exec(pw)) {
		// limit to 32 characters
		pwReq?.classList.remove("tw-text-mygrey-lyt", "pw-ok");
		pwReq?.classList.add("pw-err");
	} else {
		pwReq!.textContent = "min 8|max 32|a-z|A-Z|0-9|[!@$%&*+-.<>]";
		pwReq?.classList.remove("pw-err", "pw-ok");
		pwReq?.classList.add("tw-text-mygrey-lyt");

		// check password with requirements
		// match 8> characters, 4> letters at the beginning, numbers, and special characters
		if (/^[a-zA-Z]{4,}\d*\W*[\w\W]{7,}/i.exec(pw)) {
			pwReq?.classList.remove("tw-text-mygrey-lyt", "pw-err");
			pwReq?.classList.add("pw-ok");
		} else {
			pwReq?.classList.remove("tw-text-mygrey-lyt", "pw-ok");
			pwReq?.classList.add("pw-err");
		}
	}
}
