import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { closeNotification, showNotificationBar } from "./notification.bar";
import { toggleSpinner } from "./toggle.gear.spinner";

export async function submitGoogleSignUpForm(
	user: any,
	router: AppRouterInstance,
) {
	toggleSpinner();
	closeNotification();
	console.log("user @ finish google sign up => ", user);

	const username = (
		document.getElementById("inp_username") as HTMLInputElement
	).value.trim();
	const role = (
		document.getElementById("inp_role") as HTMLInputElement
	).value.trim();

	if (!username) {
		showNotificationBar("Provide a valid username.", "error");
		return;
	}

	if (/\s/gi.test(username)) {
		showNotificationBar("username cannot contain spaces", "error");
		toggleSpinner();
		return;
	}

	// extract firstname and lastname from session user name property
	const names = (user.name as string).split(" ");

	try {
		// create new user
		const newUserSubmitResult = await fetch("/api/new-user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			body: JSON.stringify({
				email: user.email,
				firstname: names[0],
				lastname: names[1],
				username,
				role,
			}),
			cache: "no-store",
		});

		if (newUserSubmitResult.ok) {
			// navigate to login page if user is created successfully
			toggleSpinner();
			router.push("/workspace/projects-list");
		} else {
			const resTxt = await newUserSubmitResult.text();

			if (resTxt == "username taken") {
				showNotificationBar("username has been taken!", "error");
				toggleSpinner();
				return;
			}

			showNotificationBar(
				"account creation failed. check your network and try again.",
				"error",
			);

			toggleSpinner();
		}
	} catch (e) {
		showNotificationBar(
			"an error occured while sending form data to frontend server, check you network and try again.",
			"error",
		);

		toggleSpinner();
		console.error(e);
	}
}
