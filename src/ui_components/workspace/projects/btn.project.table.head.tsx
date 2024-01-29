"use client";
import { toggleArrowIcon } from "@/ui_controllers/workspace/projects/table/toggle.arrow.icon";
import IconArrowLong from "../../icons/arrow.long";
import { sortProjectsTable } from "@/ui_controllers/workspace/projects/table/table.head.btn.click";
import { projectsListTableSortArrowClicked } from "@/ui_controllers/workspace/projects/table/table.sort.icon.clicked";
import { Dispatch, SetStateAction, useState } from "react";
import { Project } from "@/db.schema.types";

const BtnProjectTableHead = ({
	label,
	projects,
	setProjects,
}: {
	label: string;
	projects: Project[] | "loading" | "failed";
	setProjects: Dispatch<SetStateAction<"failed" | Project[] | "loading">>;
}) => {
	return (
		<div
			id={`prj_tbl_hd_${label.toLocaleLowerCase().replace(/\s/g, "_")}`}
			className=" tw-w-max tw-h-max tw-rounded-md tw-py-1 tw-px-2 tw-my-1 tw-flex tw-justify-center tw-items-end tw-bg-transparent tw-text-[15px] hover:tw-bg-gray-200 dark:hover:tw-bg-gray-700 project_tb_hd"
			onMouseEnter={toggleArrowIcon}
			onMouseLeave={toggleArrowIcon}>
			<span
				id={`prj_th_${label.toLocaleLowerCase().replace(/\s/g, "_")}`}
				className=" tw-mr-2 tw-inline-block tw-cursor-pointer"
				onClick={(e) => sortProjectsTable(e, label, projects, setProjects)}>
				{label}
			</span>{" "}
			<span
				className={`prj_tbl_hd_${label
					.toLocaleLowerCase()
					.replace(
						/\s/g,
						"_",
					)}_arrow tw-inline-block tw-h-min tw-invisible tw-cursor-pointer proj_srt_icn tw-ms-3`}
				onClick={(e) =>
					projectsListTableSortArrowClicked(
						e,
						label,
						projects as Project[],
						setProjects,
					)
				}>
				<IconArrowLong />
			</span>
		</div>
	);
};

export default BtnProjectTableHead;
