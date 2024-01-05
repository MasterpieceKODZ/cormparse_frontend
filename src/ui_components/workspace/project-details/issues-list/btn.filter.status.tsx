"use client";

import IconDownArrow from "@/ui_components/icons/down.arrow";
import {
	filterIssueByStatus,
	toggleIssueStatusFilter,
} from "@/ui_controllers/workspace/issues/show.hide.issue.status.filter";

const BtnFilterIssueByStatus = () => {
	return (
		<div className=" tw-w-max tw-h-max tw-mx-5 tw-relative">
			<button
				className=" tw-w-max tw-h-max tw-px-4 tw-py-1 tw-text-[15px] tw-font-exo tw-text-gray-800 dark:tw-text-gray-400 tw-flex tw-items-center tw-rounded tw-bg-gray-200 dark:tw-bg-gray-700 tw-justify-center"
				onClick={toggleIssueStatusFilter}>
				<span>Status</span>
				<span
					id="iss_status_filter_btn_arw"
					className=" tw-ms-4 iss_filter_btn_arw">
					<IconDownArrow fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
				</span>
			</button>
			<div
				id="iss_status_filter_cont"
				className="tw-w-[250px] tw-h-max tw-rounded tw-shadow dark:tw-shadow-gray-700 tw-bg-gray-100 dark:tw-bg-blue-950 tw-py-[10px] tw-px-5 tw-absolute tw-top-[110%] tw-hidden tw-left-0 tw-z-40 iss_filter_popup">
				<button
					className=" tw-w-full tw-h-max tw-my-[15px] tw-text-start tw-text-gray-800 dark:tw-text-gray-300"
					onClick={() => filterIssueByStatus("to-do")}>
					To-Do
				</button>
				<button
					className=" tw-w-full tw-h-max tw-my-[15px] tw-text-start tw-text-blue-700 dark:tw-text-blue-500"
					onClick={() => filterIssueByStatus("in-progress")}>
					In-Progress
				</button>
				<button
					className=" tw-w-full tw-h-max tw-my-[15px] tw-text-start tw-text-blue-700 dark:tw-text-blue-500 "
					onClick={() => filterIssueByStatus("in-review")}>
					In-Review
				</button>
				<button
					className=" tw-w-full tw-h-max tw-my-[15px] tw-text-start tw-text-green-600 dark:tw-text-green-400 "
					onClick={() => filterIssueByStatus("done")}>
					Done
				</button>
			</div>
		</div>
	);
};

export default BtnFilterIssueByStatus;
