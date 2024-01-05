"use client";
import IconCheck from "@/ui_components/icons/check";
import IconEdit from "@/ui_components/icons/edit";
import { closeEditIssueDetailSummary } from "@/ui_controllers/workspace/issue_details/close.edit.issue.detail.summary";
import { openEditIssueDetailSummary } from "@/ui_controllers/workspace/issue_details/open.edit.issue.detail.summary";
import { useState } from "react";

const IssueDetailSummary = () => {
	const [summary, setSummary] = useState("");

	return (
		<div className=" tw-w-full tw-h-max tw-mt-[55px]">
			<div
				id="iss_dtl_sum_cont"
				className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center">
				<h2 className=" tw-font-exo tw-basis-full tw-text-[25px] tw-font-semibold tw-text-gray-700 dark:tw-text-gray-400">
					{summary ? summary : "This is just a warning not a threat"}
				</h2>
				<button
					className="tw-mx-5 tw-w-max tw-h-max"
					onClick={openEditIssueDetailSummary}>
					<IconEdit fill="tw-fill-gray-700 dark:tw-fill-gray-400" />
				</button>
			</div>
			<div
				id="iss_dtl_sum_edt"
				className=" tw-w-full tw-h-max tw-justify-start tw-items-center tw-hidden">
				<input
					id="iss_dtl_sum_edt_inp"
					type="text"
					className="tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-basis-full tw-h-[45px] tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-xl dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
				/>
				<button
					className=" tw-w-max tw-h-max tw-mx-5"
					onClick={() => closeEditIssueDetailSummary(setSummary)}>
					<IconCheck stroke="tw-stroke-gray-700 dark:tw-stroke-gray-400" />
				</button>
			</div>
		</div>
	);
};

export default IssueDetailSummary;
