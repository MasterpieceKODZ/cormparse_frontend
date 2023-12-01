import { closeNotification, showNotificationBar } from "./notification.bar";
import { toggleSpinner } from "./toggle.gear.spinner";
import { signIn } from "next-auth/react";
import { isPasswordSyntaxValid } from "./password_input/validate.password";

export async function submitSignInForm(): Promise<boolean> {
	closeNotification();
	toggleSpinner();

	const pwReqCheck = await isPasswordSyntaxValid();

	if (!pwReqCheck) {
		showNotificationBar(
			"password does not meet requirement, check your password and try again.",
			"error",
		);

		toggleSpinner();

		return false;
	}

	// if sign in password field input value meets password requirements

	showNotificationBar(
		"we are working on the operation at the moment please be patient with us and give us some time",
		"info",
	);

	const pwdInp = document.getElementById("inp_pw") as HTMLInputElement;
	const emailInp = document.getElementById("inp_lgn_email") as HTMLInputElement;

	// initiate nextauth sign in
	const signInResult = await signIn("credentials", {
		callbackUrl: `/workspace/projects`,
		redirect: false,
		email: emailInp.value.trim(),
		password: pwdInp.value.trim(),
	});

	if (signInResult?.status == 200) {
		// sign in was successful
		toggleSpinner();
		return true;
	} else if (signInResult?.status == 403) {
		// a user with that email address is not found or password is wrong
		toggleSpinner();
		showNotificationBar("wrong email or password.", "error");

		return false;
	}

	// sign in authorize callback function threw an error

	toggleSpinner();
	showNotificationBar(
		"Authentication failed. check your network or try again later.",
		"error",
	);

	return false;
}
