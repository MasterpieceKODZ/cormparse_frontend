import { signIn } from "next-auth/react";
import { closeNotification, showNotificationBar } from "./notification.bar";

export async function signInWithGoogle() {
	closeNotification();
	signIn("google", {
		callbackUrl: `/auth/finish-google-signup`,
	}).catch((e) => {
		showNotificationBar(
			"google sign in failed. this could be because an account with that email address has been created with credentials. try sign in with username and password.",
			"error",
		);
		console.log("error on google sign in");
		console.error(e);
	});
}
