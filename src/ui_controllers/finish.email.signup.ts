import { FormEvent } from "react";
import { toggleNotificationBar } from "./notification.bar";
import { toggleSpinner } from "./login.form.submit";

export function submitLoginForm(e: FormEvent<HTMLFormElement>) {
	e.preventDefault();

	// reset password input type to password before submiting form to prevent browser from caching the input value
	const pwdInp = document.getElementById("inp_pw");
	const confPwdInp = document.getElementById("inp_conf_pw");
	pwdInp?.setAttribute("type", "password");
	confPwdInp?.setAttribute("type", "password");

	toggleSpinner();

	toggleNotificationBar(
		"we are working on the operation at the moment please be patient with us and give us some time",
		"info",
	);
}
