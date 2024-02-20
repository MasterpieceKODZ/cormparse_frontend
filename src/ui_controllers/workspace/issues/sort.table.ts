import { Issue } from "@/db.schema.types";
import { showNotificationBar } from "@/ui_controllers/notification.bar";
import { Dispatch, MouseEvent, SetStateAction } from "react";

export async function sortIssuesTable(
	e: MouseEvent,
	issues: "loading" | "failed" | Issue[],
	label: string,
	setIssuse: Dispatch<SetStateAction<Issue[] | "loading" | "failed">>,
) {
	if (issues.length > 0) {
		setIssuse("loading");

		document.querySelectorAll(".iss_tb_hd").forEach((el) => {
			el.classList.remove("tw-bg-gray-300", "dark:tw-bg-gray-800", "active");

			document.querySelector(`.${el.id}_arrow`)?.classList.add("tw-invisible");
		});
		e.currentTarget.classList.add(
			"tw-bg-gray-300",
			"dark:tw-bg-gray-800",
			"active",
		);

		// sort issues by property ************************
		const sortedIssues = (issues as Issue[]).sort((a: any, b: any) => {
			const propA = a[`${label}`];
			const propB = b[`${label}`];

			if (propA < propB) {
				return -1;
			} else if (propA > propB) {
				return 1;
			} else {
				return 0;
			}
		});

		console.log(sortedIssues);

		setTimeout(() => {
			setIssuse(sortedIssues);
		}, 100);

		// **************************

		//show and rotate arrow icon
		document
			.querySelector(`.${e.currentTarget.id}_arrow`)
			?.classList.remove("tw-invisible");
	}
}
