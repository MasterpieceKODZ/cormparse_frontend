import { getSession } from "next-auth/react";
import { showNotificationBar } from "../notification.bar";

export async function toggleConfirmDeleteAccountPopup() {
	// hide all other popup layout
	document.querySelectorAll(".popup").forEach((el) => {
		if (el.id !== "cont_del_acct_popup") el.classList.add("tw-hidden");
	});

	document.getElementById("cont_del_acct_popup")?.classList.toggle("tw-hidden");
}

export async function deleteAccount() {
	showNotificationBar("delete account in progress...", "info");

	// verify user before deleting account, send the user a confirmation email
	try {
		const session = await getSession();

		const cacheEmailresult = await fetch("/api/cache-email", {
			method: "POST",
			body: JSON.stringify({
				email: session?.user?.email,
				type: "del_usr",
			}),
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			cache: "no-store",
		});

		if (cacheEmailresult.ok) {
			showNotificationBar(
				`a confirmation email has been sent to ${session?.user?.email} click the link/button in the email to confirm account deletion`,
				"success",
			);
		} else {
			showNotificationBar(
				"send delete account confirmation email failed...",
				"error",
			);
		}
	} catch (err) {
		showNotificationBar(
			"something went wrong, could not send delete account confirmation email.",
			"error",
		);
	}

	toggleConfirmDeleteAccountPopup();
}
