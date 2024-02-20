/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import IconDownArrow from "@/ui_components/icons/down.arrow";

import ProjectMemberItem from "../user.item";
import {
	filterIssueByAssignee,
	toggleIssueAssigneeFilter,
} from "@/ui_controllers/workspace/issues/show.hide.issue.assignee.filter";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { compileIssuesProps } from "@/ui_controllers/workspace/issues/compile.query.params.string";
import { User } from "@/db.schema.types";
import { updateIssueAssigneeSuggestion } from "@/ui_controllers/workspace/issues/update.issue.assignee.sug";
import Link from "next/link";

const BtnFilterIssueByAssignee = ({ category }: { category: string }) => {
	const urlQuery = useSearchParams();
	const [peopleSug, setPeopleSug] = useState<null | User[]>(null);
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
				onClick={toggleIssueAssigneeFilter}>
				<span>Assignee</span>
				<span
					id="iss_assignee_filter_btn_arw"
					className=" tw-ms-4 iss_filter_btn_arw">
					<IconDownArrow
						fill="
						tw-text-fill-800
						dark:tw-fill-gray-400"
					/>
				</span>
			</button>
			<div
				id="iss_assignee_filter_cont"
				className="tw-w-[350px] tw-h-max tw-rounded tw-shadow dark:tw-shadow-gray-700 tw-bg-gray-100 dark:tw-bg-blue-950 tw-py-[10px] tw-px-5 tw-absolute tw-top-[110%] tw-left-0 tw-hidden tw-z-40 iss_filter_popup">
				<input
					type="text"
					placeholder="username"
					className=" tw-w-full tw-h-[40px] tw-block tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400 tw-border-[1px] tw-rounded tw-border-mygrey-v-lyt dark:tw-border-gray-500 tw-px-2 tw-text-[18px] dark:tw-bg-gray-800 focus:tw-outline focus:tw-outline-blue-300 focus:tw-outline-1"
					onChange={(e) => {
						const val = e.currentTarget.value;

						if (val.split("").length > 2)
							updateIssueAssigneeSuggestion(val, setPeopleSug);
					}}
				/>

				<div className=" tw-w-full tw-h-max tw-max-h-[500px] tw-overflow-y-auto tw-mt-4">
					{peopleSug ? (
						peopleSug?.map((user) => {
							return (
								<Link
									key={user.id}
									href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}?assignee=${
										user.username
									}${issueProps.type ? "&type=" + issueProps.type : ""}${
										issueProps.status ? "&status=" + issueProps.status : ""
									}${
										issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
									}`}
									className=" tw-my-4"
									passHref>
									<div
										className=" tw-w-full tw-h-max tw-cursor-pointer"
										onClick={() => filterIssueByAssignee()}>
										<ProjectMemberItem
											username={user.username}
											fullname={`${user.firstname} ${user.lastname}`}
											role={user.role}
											img={user.photoUrl ?? "no_pic"}
											dir="up"
											showPopup={false}
										/>
									</div>
								</Link>
							);
						})
					) : (
						<></>
					)}
				</div>
				<Link
					href={`/workspace/project-details/${projectKey}/issues-list/${categoryToUse}${
						issueProps.type ? "?type=" + issueProps.type : ""
					}${issueProps.status ? "&status=" + issueProps.status : ""}${
						issueProps.dueDate ? "&dueDate=" + issueProps.dueDate : ""
					}`}
					className=" tw-w-max tw-h-max tw-py-1 tw-px-3 tw-block tw-bg-blue-700 tw-text-white tw-font-russo-one tw-text-[15px] tw-rounded-lg tw-mt-5 tw-no-underline">
					Reset
				</Link>
			</div>
		</div>
	);
};

export default BtnFilterIssueByAssignee;
