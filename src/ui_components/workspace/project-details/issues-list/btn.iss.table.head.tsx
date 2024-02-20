"use client";
import { toggleArrowIcon } from "@/ui_controllers/workspace/projects/table/toggle.arrow.icon";
import IconArrowLong from "../../../icons/arrow.long";
import { sortIssuesTable } from "@/ui_controllers/workspace/issues/sort.table";
import { issuesTableSortArrowClicked } from "@/ui_controllers/workspace/issues/sort.table.icn.click";
import { Issue } from "@/db.schema.types";
import { Dispatch, SetStateAction } from "react";

const BtnIssueTableHead = ({
	label,
	issues,
	setIssues,
}: {
	label: string;
	issues: "loading" | "failed" | Issue[];
	setIssues: Dispatch<SetStateAction<Issue[] | "loading" | "failed">>;
}) => {
	let propLabel = label;

	if (label.split(" ").length > 1) {
		const l2 = label
			.split(" ")[1]
			.split("")
			.map((l, i) => (i == 0 ? l.toUpperCase() : l))
			.join("");
		propLabel = `${label.split(" ")[0]}${l2}`;
	}

	console.log(propLabel);

	return (
		<div
			id={`iss_tbl_hd_${label.toLocaleLowerCase().replace(/\s/g, "_")}`}
			className=" tw-w-max tw-h-max tw-rounded-md tw-py-1 tw-px-2 tw-my-1 tw-text-[16px] tw-flex tw-justify-center tw-items-end tw-bg-transparent hover:tw-bg-gray-200 dark:hover:tw-bg-gray-700 iss_tb_hd"
			onMouseEnter={toggleArrowIcon}
			onMouseLeave={toggleArrowIcon}>
			{label == "type" ||
			label == "status" ||
			label == "priority" ||
			label == "reported at" ||
			label == "due date" ? (
				<>
					<span
						className=" tw-mr-2 tw-inline-block tw-cursor-pointer tw-me-2"
						onClick={(e) => sortIssuesTable(e, issues, propLabel, setIssues)}>
						{label}
					</span>{" "}
					<span
						className={`iss_tbl_hd_${label
							.toLocaleLowerCase()
							.replace(
								/\s/g,
								"_",
							)}_arrow tw-inline-block tw-h-min tw-invisible tw-cursor-pointer iss_srt_icn`}
						onClick={(e) =>
							issuesTableSortArrowClicked(e, issues, propLabel, setIssues)
						}>
						<IconArrowLong />
					</span>
				</>
			) : (
				<span className=" tw-mr-2 tw-inline-block tw-me-2">{label}</span>
			)}
		</div>
	);
};

export default BtnIssueTableHead;
