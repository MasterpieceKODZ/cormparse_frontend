import { Dispatch, SetStateAction } from "react";

export async function fetchUserProjectsCount(
	email: string,
	setProjectsCount: Dispatch<SetStateAction<number>>,
	setShowNextPageBtn: Dispatch<SetStateAction<boolean>>,
) {
	const countRes = await fetch("/api/projects-count", {
		method: "POST",
		body: JSON.stringify({ email }),
		headers: {
			"Content-Type": "application/json",
			"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
		},
		cache: "no-store",
	});

	if (countRes.ok) {
		const countJSON = await countRes.json();

		console.log("projects count is ", countJSON.count);

		setProjectsCount(countJSON.count);

		const offset = parseInt(location.pathname.split("/")[4]);

		if (offset) setShowNextPageBtn(offset < Math.floor(countJSON.count / 10));
	} else {
		console.log("failed to fetch projects count");
	}
}
