/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import IconDownArrow from "@/ui_components/icons/down.arrow";
import { compileIssuesProps } from "@/ui_controllers/workspace/issues/compile.query.params.string";
import {
	filterIssueByDueDate,
	toggleIssueDueDatefilter,
} from "@/ui_controllers/workspace/issues/show.hide.issue.due.date";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BtnFilterIssueByDueDate = ({ category }: { category: string }) => {
	const urlQuery = useSearchParams();
	const [issueProps, setIssuesProps] = useState<any>({});
	const projectKey = location.pathname.split("/")[3];

	const categoryToUse = category == "all" ? "all_" : "all"; // when filtering by issue properties only use the 'all' category and alternate between 'all' & 'all_' categories to ensure a new page is loaded

	useEffect(() => {
		(async () => {
			const currentIssuesPropsQuery = await compileIssuesProps(urlQuery);
			setIssuesProps(currentIssuesPropsQuery);
		})();
	}, []);
	return (
		<div className=" tw-w-max tw-h-max tw-mx-5 tw-relative">
			<button
				className=" tw-w-max tw-h-max tw-px-4 tw-py-1 tw-text-[15px] tw-font-exo tw-text-gray-800 dark:tw-text-gray-400 tw-flex tw-items-center tw-rounded tw-bg-gray-200 dark:tw-bg-gray-700 tw-justify-center"
				onClick={toggleIssueDueDatefilter}>
				<span>Due Date</span>
				<span
					id="iss_due_date_filter_btn_arw"
					className=" tw-ms-4 iss_filter_btn_arw">
					<IconDownArrow fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
				</span>
			</button>
			<div
				id="iss_due_date_filter_cont"
				className="tw-w-[320px] tw-h-max tw-rounded tw-shadow dark:tw-shadow-gray-700 tw-bg-gray-100 dark:tw-bg-blue-950 tw-py-[10px] tw-px-5 tw-absolute tw-top-[110%] tw-left-0 tw-z-40 tw-hidden iss_filter_popup">
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}?dueDate=${new Date().getFullYear()}-${
						new Date().getMonth() + 1
					}-${new Date().getDate()}${
						issueProps.type ? "&type=" + issueProps.type : ""
					}${issueProps.status ? "&status=" + issueProps.status : ""}${
						issueProps.assignee ? "&assignee=" + issueProps.assignee : ""
					}`}
					id="btn_filter_iss_due_date_nw"
					className=" tw-w-full tw-h-max tw-my-[15px] tw-block tw-rounded tw-text-start tw-text-gray-800 dark:tw-text-gray-300 btn_due_filt "
					onClick={() => filterIssueByDueDate("now")}>
					Due Now
				</Link>
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}?dueDate=${new Date(
						Date.now() + 3 * 24 * 60 * 60 * 1000,
					).getFullYear()}-${
						new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).getMonth() + 1
					}-${new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).getDate()}${
						issueProps.type ? "&type=" + issueProps.type : ""
					}${issueProps.status ? "&status=" + issueProps.status : ""}${
						issueProps.assignee ? "&assignee=" + issueProps.assignee : ""
					}`}
					id="btn_filter_iss_due_date_3_days"
					className=" tw-w-full tw-h-max tw-my-[15px] tw-block tw-text-start tw-rounded tw-text-gray-800 dark:tw-text-gray-300 btn_due_filt "
					onClick={() => filterIssueByDueDate("3-days")}>
					In 3 Days
				</Link>

				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}${
						issueProps.type ? "?type=" + issueProps.type : ""
					}${issueProps.status ? "&status=" + issueProps.status : ""}${
						issueProps.assignee ? "&assignee=" + issueProps.assignee : ""
					}`}
					className=" tw-w-max tw-h-max tw-py-1 tw-px-3 tw-block tw-bg-blue-700 tw-text-white tw-font-russo-one tw-text-[15px] tw-rounded-lg tw-mt-5 tw-no-underline">
					Reset
				</Link>
			</div>
		</div>
	);
};

export default BtnFilterIssueByDueDate;
