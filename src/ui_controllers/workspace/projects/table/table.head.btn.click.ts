import { Project } from "@/db.schema.types";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { sortProjects } from "./sort.project.table";

export async function sortProjectsTable(
	e: MouseEvent,
	label: string,
	projects: Project[] | "loading" | "failed",
	setProject: Dispatch<SetStateAction<"failed" | Project[] | "loading">>,
) {
	document.querySelectorAll(".project_tb_hd").forEach((el) => {
		el.classList.remove("tw-bg-gray-300", "dark:tw-bg-gray-800", "active");

		document.querySelector(`.${el.id}_arrow`)?.classList.add("tw-invisible");
	});
	e.currentTarget.parentElement?.classList.add(
		"tw-bg-gray-300",
		"dark:tw-bg-gray-800",
		"active",
	);

	//show and rotate arrow icon
	document
		.querySelector(`.${e.currentTarget.parentElement?.id}_arrow`)
		?.classList.remove("tw-invisible");

	if (projects[0]) {
		const sortedProject = await sortProjects(
			label,
			"asc",
			projects as Project[],
		);

		setProject("loading");
		setTimeout(() => {
			setProject(sortedProject);
		}, 2);
	}
}
