import { FormEvent } from "react";
import { showNotificationBar } from "./notification.bar";
import { hideRadioAnim, showRadioAnim } from "./toggle.radio.anim";

export async function preRegisterEmail(e: FormEvent<HTMLFormElement>) {
	e.preventDefault();

	showRadioAnim();

	const emailInputEl: HTMLInputElement = document.getElementById(
		"inp_reg_email",
	) as HTMLInputElement;

	const email = emailInputEl.value.trim();

	let sendEmailRes;

	try {
		// send verification email to the provided email address
		sendEmailRes = await fetch("/api/cache-email", {
			body: JSON.stringify({
				email,
				type: "verification",

			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			cache: "no-store",
		});

		if (sendEmailRes.ok) {
			showNotificationBar(
				`a verification email has been sent to ${email}, check your indox or spam folder for the email, the verification link will expire in 30 mins!`,

				"success",

			);
		} else {
			const resTxt = await sendEmailRes.text();

			if (resTxt == "faulty email") {

				showNotificationBar(
					`an account with this email already exist!`,
					"error",
				);


				hideRadioAnim();
				return;
			}
			showNotificationBar(`error: email verification failed!`, "error");
		}
	} catch (e) {
		showNotificationBar(
			`error: an error occurred while sending email to pre-register API, check your network and try again!`,
			"error",
		);

	}

	hideRadioAnim();
}
