import { Project } from "@/db.schema.types";
import { fetchUserProjectsCount } from "@/utils/fetch.user.projects.count";
import { Dispatch, SetStateAction } from "react";
import { appendPageNumBtn } from "./load.page.num.btns";

export async function refreshProjects(
	email: string,
	setProjects: Dispatch<SetStateAction<Project[] | "failed" | "loading">>,
	setProjectsCount: Dispatch<SetStateAction<number>>,
	setShowNextPageBtn: Dispatch<SetStateAction<boolean>>,
	projectsCount: number,
) {
	setProjects("loading");

	const offset = parseInt(location.pathname.split("/")[4]);

	console.log(offset);

	if (offset) {
		// use pagination
		fetch(`/api/fetch-project-list`, {
			method: "POST",
			body: JSON.stringify({
				email: email,
				offset,
			}),
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			cache: "no-store",
		})
			.then(async (res) => {
				// ************* fetch user's projects count ****************
				fetchUserProjectsCount(email, setProjectsCount, setShowNextPageBtn);

				// ************* -------------------------- *****************
				const projs = await res.json();
				console.log("projects list data is -->>");
				console.log(projs);
				if (projs) setProjects(projs);
				else setProjects("failed");
			})
			.catch(() => {
				setProjects("failed");
			});
	} else {
		// fetch first 10 projects
		fetch(`/api/fetch-project-list`, {
			method: "POST",
			body: JSON.stringify({
				email: email,
			}),
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
			},
			cache: "no-store",
		})
			.then(async (res) => {
				// ************* fetch user's projects count ****************
				fetchUserProjectsCount(email, setProjectsCount, setShowNextPageBtn);

				// ************* -------------------------- *****************
				const projs = await res.json();
				console.log("projects list data is -->>");
				console.log(projs);
				if (projs) setProjects(projs);
				else setProjects("failed");
			})
			.catch(() => {
				setProjects("failed");
			});
	}
}
