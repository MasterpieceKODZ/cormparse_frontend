import { Project } from "@/db.schema.types";
import { getSession } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";

export async function refreshRecentProjects(
	setRecentProjects: Dispatch<SetStateAction<"failed" | "loading" | Project[]>>,
) {
	setRecentProjects("loading");
	try {
		const session = await getSession();
		const result = await fetch("/api/recent-projects", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			body: JSON.stringify({
				email: session?.user?.email,
			}),
			cache: "no-store",
		});

		if (result.ok) {
			const recentProjects = await result.json();

			setRecentProjects(recentProjects);
		} else {
			setRecentProjects("failed");
		}
	} catch (error) {
		setRecentProjects("failed");
	}
}
