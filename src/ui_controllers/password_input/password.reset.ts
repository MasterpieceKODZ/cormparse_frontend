import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { showNotificationBar } from "../notification.bar";
import { isPasswordSyntaxValid } from "./validate.password";
import { toggleSpinner } from "../toggle.gear.spinner";

export async function resetPassword(email: string, router: AppRouterInstance) {
	toggleSpinner();
	const password = (document.getElementById("inp_pw") as HTMLInputElement)
		.value;
	const confirmPassword = (
		document.getElementById("inp_confirm_pw") as HTMLInputElement
	).value;

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
			},
			cache: "no-store",
		});

		if (pwResetRes.ok) {
			toggleSpinner();
			router.push("/auth/login");
		} else {
			toggleSpinner();
			showNotificationBar("password reset failed, try again later", "error");
		}
	} catch (err) {
		toggleSpinner();
		showNotificationBar("error on password reset", "error");
	}
}
