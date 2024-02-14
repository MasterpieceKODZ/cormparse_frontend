/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import IconDownArrow from "@/ui_components/icons/down.arrow";
import { compileIssuesProps } from "@/ui_controllers/workspace/issues/compile.query.params.string";
import {
	filterIssueByStatus,
	toggleIssueStatusFilter,
} from "@/ui_controllers/workspace/issues/show.hide.issue.status.filter";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BtnFilterIssueByStatus = ({
	offset,
	category,
}: {
	offset: string;
	category: string;
}) => {
	const urlQuery = useSearchParams();
	const [issueProps, setIssuesProps] = useState<any>({});
	const projectKey = location.pathname.split("/")[3];

	const categoryToUse = category == "all" ? "all_" : "all"; // when filtering by issue properties only use the 'all' category and alternate between 'all' & '_all' categories to ensure a new page is loaded

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
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}/${offset}?status=to-do${
						issueProps.type ? "&type=" + issueProps.type : ""
					}${issueProps.assignee ? "&assignee=" + issueProps.assignee : ""}${
						issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
					}`}
					className=" tw-w-full tw-h-max tw-my-[15px] tw-block tw-text-start tw-text-gray-800 dark:tw-text-gray-300"
					onClick={() => filterIssueByStatus()}>
					To-Do{" "}
					{urlQuery.get("status") == "to-do" ? (
						<span className=" tw-w-max tw-h-max tw-text-yellow-500 tw-font-russo-one tw-ms-3 tw-inline-block tw-text-[17px]">
							&bull;
						</span>
					) : (
						<></>
					)}
				</Link>
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}/${offset}?status=in-progress${
						issueProps.type ? "&type=" + issueProps.type : ""
					}${issueProps.assignee ? "&assignee=" + issueProps.assignee : ""}${
						issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
					}`}
					className=" tw-w-full tw-h-max tw-my-[15px] tw-block tw-text-start tw-text-blue-700 dark:tw-text-blue-500"
					onClick={() => filterIssueByStatus()}>
					In-Progress{" "}
					{urlQuery.get("status") == "in-progress" ? (
						<span className=" tw-w-max tw-h-max tw-text-yellow-500 tw-font-russo-one tw-ms-3 tw-inline-block tw-text-[17px]">
							&bull;
						</span>
					) : (
						<></>
					)}
				</Link>
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}/${offset}?status=in-review${
						issueProps.type ? "&type=" + issueProps.type : ""
					}${issueProps.assignee ? "&assignee=" + issueProps.assignee : ""}${
						issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
					}`}
					className=" tw-w-full tw-h-max tw-my-[15px] tw-block tw-text-start tw-text-blue-700 dark:tw-text-blue-500 "
					onClick={() => filterIssueByStatus()}>
					In-Review{" "}
					{urlQuery.get("status") == "in-review" ? (
						<span className=" tw-w-max tw-h-max tw-text-yellow-500 tw-font-russo-one tw-ms-3 tw-inline-block tw-text-[17px]">
							&bull;
						</span>
					) : (
						<></>
					)}
				</Link>
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}/${offset}?status=done${
						issueProps.type ? "&type=" + issueProps.type : ""
					}${issueProps.assignee ? "&assignee=" + issueProps.assignee : ""}${
						issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
					}`}
					className=" tw-w-full tw-h-max tw-my-[15px] tw-block tw-text-start tw-text-green-600 dark:tw-text-green-400 "
					onClick={() => filterIssueByStatus()}>
					Done{" "}
					{urlQuery.get("status") == "done" ? (
						<span className=" tw-w-max tw-h-max tw-text-yellow-500 tw-font-russo-one tw-ms-3 tw-inline-block tw-text-[17px]">
							&bull;
						</span>
					) : (
						<></>
					)}
				</Link>

				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}/${offset}${
						issueProps.type ? "?type=" + issueProps.type : ""
					}${issueProps.assignee ? "&assignee=" + issueProps.assignee : ""}${
						issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
					}`}
					className=" tw-w-max tw-h-max tw-py-1 tw-px-3 tw-block tw-bg-blue-700 tw-text-white tw-font-russo-one tw-text-[15px] tw-rounded-lg tw-mt-5 tw-no-underline">
					Reset
				</Link>
			</div>
		</div>
	);
};

export default BtnFilterIssueByStatus;
