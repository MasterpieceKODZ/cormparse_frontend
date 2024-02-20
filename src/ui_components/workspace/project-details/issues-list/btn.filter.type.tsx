/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import IconBug from "@/ui_components/icons/bug.icon";
import IconDownArrow from "@/ui_components/icons/down.arrow";
import IconFeature from "@/ui_components/icons/feature.icon";
import IconImprovement from "@/ui_components/icons/improvement.icon";
import IconSubTask from "@/ui_components/icons/sub.task.icon";
import IconTask from "@/ui_components/icons/task.icon";
import { compileIssuesProps } from "@/ui_controllers/workspace/issues/compile.query.params.string";
import {
	filterIssueByType,
	toggleIssueTypeFilter,
} from "@/ui_controllers/workspace/issues/show.hide.issue.type.filter";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BtnFilterIssueByType = ({ category }: { category: string }) => {
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
				onClick={toggleIssueTypeFilter}>
				<span>Type</span>
				<span
					id="iss_typ_filter_btn_arw"
					className=" tw-ms-4 iss_filter_btn_arw">
					<IconDownArrow fill="tw-fill-gray-800 dark:tw-fill-gray-400" />
				</span>
			</button>
			<div
				id="iss_typ_filter_cont"
				className="tw-w-[320px] tw-h-max tw-rounded tw-shadow dark:tw-shadow-gray-700 tw-bg-gray-100 dark:tw-bg-blue-950 tw-py-[10px] tw-px-5 tw-absolute tw-top-[110%] tw-left-0 tw-z-40 tw-hidden iss_filter_popup">
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}?type=feature${
						issueProps.status ? "&status=" + issueProps.status : ""
					}${issueProps.assignee ? "&assignee=" + issueProps.assignee : ""}${
						issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
					}`}
					className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-my-[25px]"
					onClick={() => filterIssueByType()}>
					<span>
						<IconFeature />
					</span>
					<span
						className={`tw-basis-full tw-shrink tw-text-start ${
							urlQuery.get("type") == "feature"
								? "tw-text-blue-700 dark:tw-text-blue-500"
								: "tw-text-gray-800 dark:tw-text-gray-300"
						}  tw-grow-0 tw-ms-3`}>
						New Feature
					</span>
				</Link>
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}type=improvement${
						issueProps.status ? "&status=" + issueProps.status : ""
					}${issueProps.assignee ? "&assignee=" + issueProps.assignee : ""}${
						issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
					}`}
					className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-my-[25px]"
					onClick={() => filterIssueByType()}>
					<span>
						<IconImprovement />
					</span>
					<span
						className={`tw-basis-full tw-shrink tw-text-start ${
							urlQuery.get("type") == "improvement"
								? "tw-text-blue-700 dark:tw-text-blue-500"
								: "tw-text-gray-800 dark:tw-text-gray-300"
						}  tw-grow-0 tw-ms-3`}>
						Improvement
					</span>
				</Link>
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}type=bug${
						issueProps.status ? "&status=" + issueProps.status : ""
					}${issueProps.assignee ? "&assignee=" + issueProps.assignee : ""}${
						issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
					}`}
					className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-my-[25px]"
					onClick={() => filterIssueByType()}>
					<span>
						<IconBug />
					</span>
					<span
						className={`tw-basis-full tw-shrink tw-text-start ${
							urlQuery.get("type") == "bug"
								? "tw-text-blue-700 dark:tw-text-blue-500"
								: "tw-text-gray-800 dark:tw-text-gray-300"
						}  tw-grow-0 tw-ms-3`}>
						Bug
					</span>
				</Link>
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}?type=sub_task${
						issueProps.status ? "&status=" + issueProps.status : ""
					}${issueProps.assignee ? "&assignee=" + issueProps.assignee : ""}${
						issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
					}`}
					className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-my-[25px]"
					onClick={() => filterIssueByType()}>
					<span>
						<IconSubTask />
					</span>
					<span
						className={`tw-basis-full tw-shrink tw-text-start ${
							urlQuery.get("type") == "sub_task"
								? "tw-text-blue-700 dark:tw-text-blue-500"
								: "tw-text-gray-800 dark:tw-text-gray-300"
						}  tw-grow-0 tw-ms-3`}>
						Sub-Task
					</span>
				</Link>
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}?type=task${
						issueProps.status ? "&status=" + issueProps.status : ""
					}${issueProps.assignee ? "&assignee=" + issueProps.assignee : ""}${
						issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
					}`}
					className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-my-[25px]"
					onClick={() => filterIssueByType()}>
					<span>
						<IconTask />
					</span>
					<span
						className={`tw-basis-full tw-shrink tw-text-start ${
							urlQuery.get("type") == "task"
								? "tw-text-blue-700 dark:tw-text-blue-500"
								: "tw-text-gray-800 dark:tw-text-gray-300"
						}  tw-grow-0 tw-ms-3`}>
						Task
					</span>
				</Link>

				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}${
						issueProps.status ? "?status=" + issueProps.status : ""
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

export default BtnFilterIssueByType;
