import { FormEvent } from "react";
import { closeNotification, showNotificationBar } from "./notification.bar";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toggleSpinner } from "./toggle.gear.spinner";
import { isPasswordSyntaxValid } from "./password_input/validate.password";

export async function submitEmailSignupForm(
	e: FormEvent<HTMLFormElement>,
	router: AppRouterInstance,
) {
	e.preventDefault();
	closeNotification();
	toggleSpinner();

	// fetch user data from UI
	const emailInp = document.getElementById("email_inp") as HTMLInputElement;
	const firstnameInp = document.getElementById(
		"inp_firstname",
	) as HTMLInputElement;
	const lastnameInp = document.getElementById(
		"inp_lastname",
	) as HTMLInputElement;
	const usernameInp = document.getElementById(
		"inp_username",
	) as HTMLInputElement;
	const roleInp = document.getElementById("inp_role") as HTMLInputElement;
	const passwordInp = document.getElementById("inp_pw") as HTMLInputElement;
	const confPasswordInp = document.getElementById(
		"inp_confirm_pw",
	) as HTMLInputElement;

	const pwReqCheck = await isPasswordSyntaxValid();

	if (!pwReqCheck) {
		showNotificationBar(
			"password does not meet requirements, please change your password",
			"error",
		);

		toggleSpinner();
		return;
	}

	//  validate password
	if (passwordInp.value != confPasswordInp.value) {
		// passwords match
		showNotificationBar("passwords do not match.", "error");

		toggleSpinner();
		return;
	}

	//  ******************* validate username syntax *******************************
	if (/\s/gi.test(usernameInp.value)) {
		showNotificationBar("username cannot contain spaces", "error");
		toggleSpinner();
		return;
	}

	if (/[^a-zA-Z0-9_@$+]/gi.test(usernameInp.value)) {
		showNotificationBar(
			"username can only contain _,@,$ and + as special characters",
			"error",
		);
		toggleSpinner();
		return;
	}

	// ***********************************

	try {
		// create new user
		const newUserSubmitResult = await fetch("/api/new-user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			body: JSON.stringify({
				email: emailInp.value.trim(),
				firstname: firstnameInp.value.trim(),
				lastname: lastnameInp.value.trim(),
				username: usernameInp.value.trim(),
				role: roleInp.value.trim(),
				password: passwordInp.value.trim(),
			}),
			cache: "no-store",
		});

		if (newUserSubmitResult.ok) {
			// navigate to login page if user is created successfully
			toggleSpinner();
			router.push("/auth/login");
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
