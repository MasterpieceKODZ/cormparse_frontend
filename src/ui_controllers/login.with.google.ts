import { signIn } from "next-auth/react";
import { closeNotification, showNotificationBar } from "./notification.bar";

export async function signInWithGoogle() {
	closeNotification();
	signIn("google", {
		callbackUrl: `/auth/finish-google-signup`,
	}).catch((e) => {
		showNotificationBar("google sign in failed.", "error");
		console.log("error on google sign in");
		console.error(e);
	});
}
