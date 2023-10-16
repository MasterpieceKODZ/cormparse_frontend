import { FormEvent } from "react";
import { toggleNotificationBar } from "./notification.bar";

export function submitLoginForm(e: FormEvent<HTMLFormElement>) {
	e.preventDefault();

	// reset password input type to password before submiting form to prevent browser from caching the input value
	const pwdInp = document.getElementById("inp_lgn_pw");
	pwdInp?.setAttribute("type", "password");

	toggleSpinner();

	toggleNotificationBar(
		"we are working on the operation at the moment please be patient with us and give us some time",
		"success",
	);
}

export function toggleSpinner() {
	const loadingSpinner = document.getElementById("loading_spinner");

	loadingSpinner?.classList.toggle("hide_spinner");
}
