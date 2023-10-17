import { ChangeEvent } from "react";

export function validatePasswordSyntax(e: ChangeEvent<HTMLInputElement>) {
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
		if (/^[a-zA-Z]{4,}\d*\W*/i.exec(pw) && /[\w\W]{8,}/.exec(pw)) {
			pwReq?.classList.remove("tw-text-mygrey-lyt", "pw-err");
			pwReq?.classList.add("pw-ok");
		} else {
			pwReq?.classList.remove("tw-text-mygrey-lyt", "pw-ok");
			pwReq?.classList.add("pw-err");
		}
	}
}

export function checkPwMatch(e: ChangeEvent<HTMLInputElement>) {
	const confPwVal = e.currentTarget.value;

	const pwInp = document.getElementById("inp_pw") as HTMLInputElement;
	const pw = pwInp.value;

	const chkPw = document.getElementById("pw_check");
	if (confPwVal == pw) {
		chkPw?.classList.add("hide");
	} else {
		chkPw?.classList.remove("hide");
	}
}
