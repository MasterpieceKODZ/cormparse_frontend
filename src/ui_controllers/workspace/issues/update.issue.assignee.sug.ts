import { User } from "@/db.schema.types";
import { getSession } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";

export async function updateIssueAssigneeSuggestion(
	inpElemVal: string,
	updateIssAssSug: Dispatch<SetStateAction<User[] | null>>,
) {
	try {
		const projectKey = location.pathname.split("/")[3];

		const session = await getSession();
		const peopleRes = await fetch("/api/project-people", {
			method: "POST",
			body: JSON.stringify({
				email: session?.user?.email,
				projectKey,
				username: inpElemVal,
			}),
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			cache: "no-store",
		});

		if (peopleRes.ok) {
			const people = await peopleRes.json();
			updateIssAssSug(people);
		} else {
			updateIssAssSug(null);
		}
	} catch (error) {
		updateIssAssSug(null);
	}
}
