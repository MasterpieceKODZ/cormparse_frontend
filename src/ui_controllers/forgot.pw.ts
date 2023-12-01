import { toggleForgotPWmodal } from "./forgot.pw.modal";
import { closeNotification, showNotificationBar } from "./notification.bar";
import { togglePulseSpinner } from "./toggle.pulse.spinner";

export async function openForgotPwdModal() {
	
	const emailInp = document.getElementById("inp_lgn_email") as HTMLInputElement;

	if (emailInp.value) {
		toggleForgotPWmodal();
	} else {
		showNotificationBar("Enter your email address", "error");
	}
}

export async function sendForgotPwdLink() {
	closeNotification();
	togglePulseSpinner();
	// when the modal is open the email input is not removed from the DOM therefore the email address can still be obtained from the UI input field
	const email = (document.getElementById("inp_lgn_email") as HTMLInputElement)
		.value;

	//  send password reset email
	try {
		const sendPwdResetEmailRes = await fetch("/api/cache-email", {
			method: "POST",
			body: JSON.stringify({
				email,
				type: "reset_pw",
			}),
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			cache: "no-store",
		});

		// email sent
		if (sendPwdResetEmailRes.ok) {
			showNotificationBar(
				"A password reset link has been sent to the provided email address, check your email indox or spam folder",
				"success",
			);
		} else {
			const resTxt = await sendPwdResetEmailRes.text();

			if (resTxt == "faulty email") {
				showNotificationBar(
					`an account with this email address does not exist!`,
					"error",
				);
				return;
			}
			showNotificationBar(
				`unable to send password reset email at the moment, try again later`,
				"error",
			);
		}
	} catch (err) {
		showNotificationBar(
			"unable to send password reset email, check your network or try again later",
			"error",
		);
	}

	togglePulseSpinner();
}
