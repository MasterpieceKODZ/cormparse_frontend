import { Dispatch, FormEvent, SetStateAction } from "react";
import { showNotificationBar } from "../notification.bar";
import { getSession } from "next-auth/react";
import { hideEditProfileForm } from "./show.hide.edit.profile";
import { User } from "@/db.schema.types";
import { toggleSpinner } from "../toggle.gear.spinner";

export async function submitEditProfileForm(
	e: FormEvent,
	setUserData: Dispatch<SetStateAction<"failed" | "loading" | User>>,
) {
	e.preventDefault();

	showNotificationBar("profile update in progress...", "info");

	const username = (
		document.getElementById("edt_prof_usnm_inp") as HTMLInputElement
	).value
		.trim()
		.toLowerCase();

	const role = (
		document.getElementById("edt_prof_role_inp") as HTMLInputElement
	).value
		.trim()
		.toLowerCase();

	// ******************** validate username syntax
	if (username) {
		if (/\s/gi.test(username)) {
			showNotificationBar("username cannot contain spaces", "error");
			return;
		}

		if (/[^a-zA-Z0-9_@$+]/gi.test(username)) {
			showNotificationBar(
				"username can only contain _,@,$ and + as special characters",
				"error",
			);
			return;
		}
	}

	//  *********************************

	if (username.length > 0 || role.length > 0) {
		const session = await getSession();

		let body = {};

		body = { ...body, email: session?.user?.email };

		if (username) {
			body = { ...body, username };
		}

		if (role) {
			body = { ...body, role };
		}

		// update userData username and role
		const result = await fetch("/api/update-user", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			cache: "no-store",
		});

		if (result.ok) {
			showNotificationBar("your data has been updated successfully", "success");

			hideEditProfileForm();

			const newUser = await result.json();

			// update userData state
			setUserData(newUser);
		} else {
			showNotificationBar(
				"update user data failed, check your network and try again...",
				"error",
			);
		}
	} else {
		showNotificationBar("provide a valid username or role...", "error");
	}
}
