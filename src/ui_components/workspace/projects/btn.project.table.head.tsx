"use client";
import { toggleArrowIcon } from "@/ui_controllers/workspace/projects/table/toggle.arrow.icon";
import IconArrowLong from "../../icons/arrow.long";
import { sortProjectsTable } from "@/ui_controllers/workspace/projects/table/table.head.btn.click";
import { projectsListTableSortArrowClicked } from "@/ui_controllers/workspace/projects/table/table.sort.icon.clicked";

const BtnProjectTableHead = ({ label }: { label: string }) => {
	return (
		<button
			id={`prj_tbl_hd_${label.toLocaleLowerCase().replace(/\s/g, "_")}`}
			className=" tw-w-max tw-h-max tw-rounded-md tw-py-1 tw-px-2 tw-my-1 tw-flex tw-justify-center tw-items-end tw-bg-transparent tw-text-[15px] hover:tw-bg-gray-200 dark:hover:tw-bg-gray-700 project_tb_hd"
			onMouseEnter={toggleArrowIcon}
			onMouseLeave={toggleArrowIcon}
			onClick={sortProjectsTable}>
			<span className=" tw-mr-2 tw-inline-block">{label}</span>{" "}
			<span
				className={`prj_tbl_hd_${label
					.toLocaleLowerCase()
					.replace(
						/\s/g,
						"_",
					)}_arrow tw-inline-block tw-rotate-180 tw-h-min tw-invisible tw-cursor-pointer proj_srt_icn`}
				onClick={projectsListTableSortArrowClicked}>
				<IconArrowLong />
			</span>
		</button>
	);
};

export default BtnProjectTableHead;
