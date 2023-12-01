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
		pwReq?.classList.remove(
			"tw-text-mygrey-lyt",
			"pw-ok",
			"dark:tw-text-gray-400",
		);
		pwReq?.classList.add("pw-err");

		return false;
	} else {
		// reset the password requirements preview to neutral

		pwReq!.textContent = "min 8|max 32|a-z|A-Z|0-9|[!@$%&*+-.<>]";
		pwReq?.classList.remove("pw-err", "pw-ok");
		pwReq?.classList.add("tw-text-mygrey-lyt", "dark:tw-text-gray-400");

		// check password requirements
		// match 8+ characters, 4+ letters at the beginning, 1+ numbers, and 1+ special characters
		if (/^[a-zA-Z]{4,}\d*\W*/i.exec(pw) && /[\w\W]{8,}/.exec(pw)) {
			pwReq?.classList.remove(
				"tw-text-mygrey-lyt",
				"pw-err",
				"dark:tw-text-gray-400",
			);
			pwReq?.classList.add("pw-ok");
			return true;
		} else {
			// set the password requirements preview to error
			pwReq?.classList.remove(
				"tw-text-mygrey-lyt",
				"pw-ok",
				"dark:tw-text-gray-400",
			);
			pwReq?.classList.add("pw-err");
			return false;
		}
	}
}

// check that sign up password and confirm password fields input values match by fetching their values and comparing
export function checkPwMatch(e: ChangeEvent<HTMLInputElement>) {
	const confPwVal = e.currentTarget.value;

	const pw = (document.getElementById("inp_pw") as HTMLInputElement).value;

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
