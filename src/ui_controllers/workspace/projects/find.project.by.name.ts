import { Project } from "@/db.schema.types";
import {
	closeNotification,
	showNotificationBar,
} from "@/ui_controllers/notification.bar";
import { getSession } from "next-auth/react";
import { Dispatch, FormEvent, SetStateAction } from "react";

export async function findProjectByName(
	e: FormEvent,
	setProjects: Dispatch<SetStateAction<Project[] | "loading" | "failed">>,
) {
	e.preventDefault();

	showNotificationBar("operation in progress...", "info");

	const searchInp = (
		document.getElementById("project_srch_inp") as HTMLInputElement
	).value
		.trim()
		.toLowerCase();

	try {
		const session = await getSession();

		const result = await fetch("/api/find-project-by-name", {
			method: "POST",
			body: JSON.stringify({
				email: session?.user?.email,
				search: searchInp,
			}),
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			cache: "no-store",
		});

		if (result.ok) {
			const resultJSON = await result.json();

			setProjects(resultJSON);

			closeNotification();
		} else {
			showNotificationBar("fetch project by name failed", "error");
		}
	} catch (error) {
		showNotificationBar("error on fetch project by name", "error");
	}
}
