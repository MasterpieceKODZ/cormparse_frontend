import { showNotificationBar } from "@/ui_controllers/notification.bar";
import { getSession } from "next-auth/react";
import { FormEvent } from "react";

export async function createNewProjectHandler(e: FormEvent) {
	e.preventDefault();

	showNotificationBar("project creation in progress...", "info");

	const session = await getSession();

	const name = (
		document.getElementById("inp_proj_name") as HTMLInputElement
	).value.toLowerCase();
	const key = (
		document.getElementById("inp_key") as HTMLInputElement
	).value.toLowerCase();

	try {
		const createProject = await fetch("/api/create-project", {
			method: "POST",
			body: JSON.stringify({
				email: session?.user?.email,
				name,
				key,
			}),
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			cache: "no-store",
		});

		if (createProject.ok) {
			const project = await createProject.json();

			location.assign(`/workspace/project-details/${project.key}`);
		} else {
			const errorText = await createProject.text();
			console.log(errorText);

			if (errorText == "DUPLICATCE_KEY_OR_NAME") {
				showNotificationBar(
					"you already have a project with that name or key. ",
					"error",
				);
			} else if (errorText == "UNKNOWN_CREATOR") {
				showNotificationBar("unknown project creator.", "error");
			} else {
				showNotificationBar("create project failed.", "error");
			}
		}
	} catch (error) {
		showNotificationBar("error on create project", "error");
	}

	console.log(" I ama Working...");
}
