import { Dispatch, MouseEvent, SetStateAction } from "react";
import { sortProjects } from "./sort.project.table";
import { Project } from "@/db.schema.types";
import { showNotificationBar } from "@/ui_controllers/notification.bar";

export async function projectsListTableSortArrowClicked(
	e: MouseEvent,
	label: string,
	projects: Project[],
	setProjects: Dispatch<SetStateAction<"failed" | Project[] | "loading">>,
) {
	const order = e.currentTarget.classList.contains("tw-rotate-180")
		? "asc"
		: "desc";

	const shouldRotateIcon = e.currentTarget.classList.contains("tw-rotate-180");

	console.log("projects to be sorted --------------------------");
	console.log(projects.length);

	if (typeof projects == "object") {
		// hide all sort icons
		document.querySelectorAll(".proj_srt_icn").forEach((el) => {
			el.classList.add("tw-invisible");
		});
		document.querySelectorAll(".proj_srt_icn").forEach((el) => {
			el.classList.remove("tw-rotate-180");
		});

		// reset all table head buttons to in-active
		document.querySelectorAll(".project_tb_hd").forEach((el) => {
			el.classList.remove("tw-bg-gray-300", "dark:tw-bg-gray-800", "active");
		});
		e.currentTarget.parentElement?.classList.add(
			"tw-bg-gray-300",
			"dark:tw-bg-gray-800",
			"active",
		);

		e.currentTarget.classList.remove("tw-invisible");

		if (!shouldRotateIcon) e.currentTarget.classList.add("tw-rotate-180");

		const sortedProject = await sortProjects(label, order, projects);

		setProjects("loading");
		setTimeout(() => {
			setProjects(sortedProject);
		}, 2);
	}
}
