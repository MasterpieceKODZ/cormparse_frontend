import { Dispatch, SetStateAction } from "react";

export async function fetchUserProjectsCount(
	email: string,
	setProjectsCount: Dispatch<SetStateAction<number>>,
	setShowNextPageBtn: Dispatch<SetStateAction<boolean>>,
	setNumOfPages: Dispatch<SetStateAction<number>>,
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

		setProjectsCount(countJSON.count);

		if (countJSON % 10 > 0) setNumOfPages(Math.floor(countJSON / 10) + 1);
		else setNumOfPages(countJSON / 10);

		const offset = parseInt(location.pathname.split("/")[4]);

		if (offset) setShowNextPageBtn(offset < countJSON.count / 10);
	} else {
		console.log("failed to fetch projects count");
	}
}
