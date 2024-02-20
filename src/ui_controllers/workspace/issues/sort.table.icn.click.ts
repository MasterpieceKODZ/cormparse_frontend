import { Issue } from "@/db.schema.types";
import { Dispatch, MouseEvent, SetStateAction } from "react";

export async function issuesTableSortArrowClicked(
	e: MouseEvent,
	issues: "loading" | "failed" | Issue[],
	label: string,
	setIssuse: Dispatch<SetStateAction<Issue[] | "loading" | "failed">>,
) {
	if (issues.length > 0) {
		setIssuse("loading");

		// hide and reset all sort icons
		document.querySelectorAll(".iss_srt_icn").forEach((el) => {
			el.classList.add("tw-invisible");
		});

		document.querySelectorAll(".iss_srt_icn").forEach((el) => {
			el.classList.remove("tw-rotate-180");
		});

		// reset all table head buttons to in-active
		document.querySelectorAll(".iss_tb_hd").forEach((el) => {
			el.classList.remove("tw-bg-gray-300", "dark:tw-bg-gray-800", "active");
		});
		e.currentTarget.parentElement?.classList.add(
			"tw-bg-gray-300",
			"dark:tw-bg-gray-800",
			"active",
		);

		//show and rotate arrow icon

		e.currentTarget.classList.remove("tw-invisible");

		const shouldRotate = e.currentTarget.classList.contains("tw-rotate-180");

		if (!shouldRotate) {
			e.currentTarget.classList.add("tw-rotate-180");
		}

		// sort issues by property ************************
		const sortedIssues = (issues as Issue[]).sort((a: any, b: any) => {
			const propA = a[`${label}`];
			const propB = b[`${label}`];

			if (propA < propB) {
				return shouldRotate ? -1 : 1;
			} else if (propA > propB) {
				return shouldRotate ? 1 : -1;
			} else {
				return 0;
			}
		});

		console.log(sortedIssues);

		setTimeout(() => {
			setIssuse(sortedIssues);
		}, 50);

		// **************************
	}
}
