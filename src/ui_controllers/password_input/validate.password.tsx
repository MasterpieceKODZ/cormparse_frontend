import { ChangeEvent } from "react";

export async function isPasswordSyntaxValid(
	e?: ChangeEvent<HTMLInputElement>,
): Promise<boolean> {
	const pw =
		e?.currentTarget.value ??
		(document.getElementById("inp_pw") as HTMLInputElement).value;

	const pwReq = document.getElementById("pw_req");

	// update password preview if it is visible

	const pwPrev = document.getElementById("pw_prev");

	if (pwPrev) {
		pwPrev.textContent = pw;
	}

	// warn user of space in password
	if (/\s/.exec(pw)) {
		pwReq!.textContent = "password may not contain spaces!";
		pwReq?.classList.remove("tw-text-mygrey-lyt", "pw-ok");
		pwReq?.classList.add("pw-err");

		return false;
	} else if (/[\w\W]{33,}/.exec(pw)) {
		// limit password to 32 characters
		pwReq!.textContent = "password may not be longer than 32 characters";
		pwReq?.classList.remove("tw-text-mygrey-lyt", "pw-ok");
		pwReq?.classList.add("pw-err");
		return false;
	} else {
		// reset the password requirements preview to neutral

		pwReq!.textContent = "min 8|max 32|a-z|A-Z|0-9|[!@$%&*+-.<>]";
		pwReq?.classList.remove("pw-err", "pw-ok");
		pwReq?.classList.add("tw-text-mygrey-lyt");

		// check password requirements
		// match 8+ characters, 4+ letters at the beginning, 1+ numbers, and 1+ special characters
		if (/^[a-zA-Z]{4,}\d*\W*/i.exec(pw) && /[\w\W]{8,}/.exec(pw)) {
			pwReq?.classList.remove("tw-text-mygrey-lyt", "pw-err");
			pwReq?.classList.add("pw-ok");
			return true;
		} else {
			// set the password requirements preview to error
			pwReq?.classList.remove("tw-text-mygrey-lyt", "pw-ok");
			pwReq?.classList.add("pw-err");
			return false;
		}
	}
}

// check that sign up password and confirm password fields input values match by fetching their values and comparing
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

	// update confirm password preview if it is visible

	const pwPrev = document.getElementById("confirm_pw_prev");

	if (pwPrev) {
		pwPrev.textContent = confPwVal;
	}
}
