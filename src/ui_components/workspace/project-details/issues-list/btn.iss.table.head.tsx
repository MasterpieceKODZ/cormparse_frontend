"use client";
import { toggleArrowIcon } from "@/ui_controllers/workspace/projects/table/toggle.arrow.icon";
import IconArrowLong from "../../../icons/arrow.long";
import { sortIssuesTable } from "@/ui_controllers/workspace/issues/sort.table";
import { issuesTableSortArrowClicked } from "@/ui_controllers/workspace/issues/sort.table.icn.click";

const BtnIssueTableHead = ({ label }: { label: string }) => {
	return (
		<button
			id={`iss_tbl_hd_${label.toLocaleLowerCase().replace(/\s/g, "_")}`}
			className=" tw-w-max tw-h-max tw-rounded-md tw-py-1 tw-px-2 tw-my-1 tw-text-[16px] tw-flex tw-justify-center tw-items-end tw-bg-transparent hover:tw-bg-gray-200 dark:hover:tw-bg-gray-700 iss_tb_hd"
			onMouseEnter={toggleArrowIcon}
			onMouseLeave={toggleArrowIcon}
			onClick={sortIssuesTable}>
			<span className=" tw-mr-2 tw-inline-block">{label}</span>{" "}
			<span
				className={`iss_tbl_hd_${label
					.toLocaleLowerCase()
					.replace(
						/\s/g,
						"_",
					)}_arrow tw-inline-block tw-rotate-180 tw-h-min tw-invisible tw-cursor-pointer iss_srt_icn`}
				onClick={issuesTableSortArrowClicked}>
				<IconArrowLong />
			</span>
		</button>
	);
};

export default BtnIssueTableHead;
