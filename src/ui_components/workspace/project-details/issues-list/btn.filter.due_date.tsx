"use client";
import IconDownArrow from "@/ui_components/icons/down.arrow";
import {
	filterIssueByDueDate,
	toggleIssueDueDatefilter,
} from "@/ui_controllers/workspace/issues/show.hide.issue.due.date";

const BtnFilterIssueByDueDate = () => {
	return (
		<div className=" tw-w-max tw-h-max tw-mx-5 tw-relative">
			<button
				className=" tw-w-max tw-h-max tw-px-4 tw-py-1 tw-text-[15px] tw-font-exo tw-text-gray-800 dark:tw-text-gray-400 tw-flex tw-items-center tw-rounded tw-bg-gray-200 dark:tw-bg-gray-700 tw-justify-center"
				onClick={toggleIssueDueDatefilter}>
				<span>Due Date</span>
				<span
					id="iss_due_date_filter_btn_arw"
					className=" tw-ms-4 iss_filter_btn_arw">
					<IconDownArrow />
				</span>
			</button>
			<div
				id="iss_due_date_filter_cont"
				className="tw-w-[320px] tw-h-max tw-rounded tw-shadow dark:tw-shadow-gray-700 tw-bg-gray-100 dark:tw-bg-blue-950 tw-py-[10px] tw-px-5 tw-absolute tw-top-[110%] tw-left-0 tw-z-40 tw-hidden iss_filter_popup">
				<button
					id="btn_filter_iss_due_date_nw"
					className=" tw-w-full tw-h-max tw-my-[15px] tw-rounded tw-text-start tw-text-gray-800 dark:tw-text-gray-300 btn_due_filt "
					onClick={() => filterIssueByDueDate("now")}>
					Due Now
				</button>
				<button
					id="btn_filter_iss_due_date_3_days"
					className=" tw-w-full tw-h-max tw-my-[15px] tw-text-start tw-rounded tw-text-gray-800 dark:tw-text-gray-300 btn_due_filt "
					onClick={() => filterIssueByDueDate("3-days")}>
					In 3 Days
				</button>
			</div>
		</div>
	);
};

export default BtnFilterIssueByDueDate;
