import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { closeNotification, showNotificationBar } from "../notification.bar";
import { isPasswordSyntaxValid } from "./validate.password";
import { toggleSpinner } from "../toggle.gear.spinner";

export async function resetPassword(email: string, router: AppRouterInstance) {
	toggleSpinner();
	closeNotification();
	const password = (document.getElementById("inp_pw") as HTMLInputElement)
		.value;
	const confirmPassword = (
		document.getElementById("inp_confirm_pw") as HTMLInputElement
	).value;

	// check password syntax
	const checkPw = await isPasswordSyntaxValid();

	if (!checkPw) {
		showNotificationBar(
			"your password does not meet the requirements, change your password and try again",
			"error",
		);
		toggleSpinner();
		return;
	}

	if (password != confirmPassword) {
		showNotificationBar("passwords do not match", "error");
		toggleSpinner();
		return;
	}

	// initiate password reset process on the backend
	try {
		const pwResetRes = await fetch("/api/reset-password", {
			method: "POST",
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			cache: "no-store",
		});

		if (pwResetRes.ok) {
			toggleSpinner();
			router.push("/auth/login");
		} else if (pwResetRes.status == 400) {
			toggleSpinner();
			showNotificationBar(
				"cannot reset google account password, try sign in with google.",
				"error",
			);
		} else {
			toggleSpinner();
			showNotificationBar("password reset failed, try again later", "error");
		}
	} catch (err) {
		toggleSpinner();
		showNotificationBar("error on password reset", "error");
	}
}
