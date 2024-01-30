import { Issue } from "@/db.schema.types";
import { getSession } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";

export async function refreshRecentPendingIssue(
	setRecentPendingIssues: Dispatch<
		SetStateAction<Issue[] | "loading" | "failed">
	>,
) {
	setRecentPendingIssues("loading");
	try {
		const session = await getSession();
		const result = await fetch("/api/recent-pending-issues", {
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
			const recentIssue = await result.json();

			setRecentPendingIssues(recentIssue);
		} else {
			setRecentPendingIssues("failed");
		}
	} catch (error) {
		setRecentPendingIssues("failed");
	}
}
