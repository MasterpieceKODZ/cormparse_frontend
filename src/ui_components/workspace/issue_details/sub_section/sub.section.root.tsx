"use client";
import IconDownArrow from "@/ui_components/icons/down.arrow";
import {
	toggleIssueDetailStatusButtonsLayout,
	updateIssueStatus,
} from "@/ui_controllers/workspace/issue_details/status.btns.handlers";
import { useState } from "react";
import IssueDetailPersonComponent from "./person.component";
import { togglePersonCompUsernameNrole } from "@/ui_controllers/workspace/issue_details/toggle.person.comp.username.n.role";
import IconPriorityHighest from "@/ui_components/icons/issue.priority.highest";
import IconPriorityHigh from "@/ui_components/icons/issue.priority.high";
import IconPriorityMid from "@/ui_components/icons/issue.priority.mid";
import IconPriorityLow from "@/ui_components/icons/issue.priority.low";
import NewIssuePrioritySelectItem from "../../project-details/issues-list/new.issue.priority.item";
import {
	issueDetailTogglePriorityPopup,
	issueDetailUpdatePriority,
} from "@/ui_controllers/workspace/issue_details/handle.issue.priority";

const IssueDetailsSubSectionRoot = () => {
	const [status, setStatus] = useState("to-do");
	const [priority, setPriority] = useState("high");
	const [hasParent, setHasParent] = useState(true);

	return (
		<div className=" tw-w-full lg:tw-w-[20vw] tw-min-w-[300px] tw-h-max lg:tw-h-full lg:tw-border-s tw-border-s-gray-300 dark:tw-border-s-gray-700 tw-ps-8 lg:tw-ps-3 tw-pe-2 tw-py-5 tw-order-first lg:tw-order-last tw-overflow-y-auto">
			{/* issue status */}
			<div className=" tw-w-max tw-h-max tw-relative tw-mt-[55px]">
				<button
					className={`tw-w-max tw-h-max tw-py-1 tw-px-5 tw-font-semibold ${
						status == "to-do"
							? " tw-bg-gray-700"
							: status == "done"
							? " tw-bg-green-700"
							: "tw-bg-blue-700"
					} tw-text-white tw-font-exo  tw-text-[18px] tw-rounded`}
					onClick={toggleIssueDetailStatusButtonsLayout}>
					<span>{status}</span>
					<span
						id="iss_dtl_sts_btn_icn"
						className=" tw-mx-3 tw-inline-block">
						<IconDownArrow fill="tw-fill-white" />
					</span>
				</button>
				<div
					id="iss_dtl_sts_btns_lyt"
					className=" tw-w-full tw-h-max tw-hidden">
					<button
						className="tw-w-full tw-h-max tw-block tw-py-[0.5px] tw-px-3 tw-my-4 tw-bg-gray-100 dark:tw-bg-gray-700/70 tw-text-gray-400 dark:tw-text-gray-300 tw-font-exo tw-font-semibold tw-rounded"
						onClick={() => updateIssueStatus(setStatus, "to-do")}>
						to-do
					</button>
					<button
						className="tw-w-full tw-h-max tw-block tw-py-[0.5px] tw-font-exo tw-font-semibold tw-px-3 tw-my-5 tw-bg-blue-200/70 tw-text-blue-800 tw-rounded "
						onClick={() => updateIssueStatus(setStatus, "in-progress")}>
						in-progress
					</button>
					<button
						className="tw-w-full tw-h-max tw-block tw-py-[0.5px] tw-px-3 tw-my-5 tw-font-exo tw-font-semibold tw-bg-blue-200/70 tw-text-blue-800 tw-rounded"
						onClick={() => updateIssueStatus(setStatus, "in-review")}>
						in-review
					</button>
					<button
						className="tw-w-full tw-h-max tw-block tw-py-[0.5] tw-px-3 tw-my-5 tw-font-exo tw-font-semibold tw-bg-green-200/70 tw-text-green-800"
						onClick={() => updateIssueStatus(setStatus, "done")}>
						done
					</button>
				</div>
			</div>
			{/* assignee */}
			<label className=" tw-block tw-text-start tw-font-exo tw-text-gray-600 dark:tw-text-gray-400 tw-text-[16px] tw-font-semibold tw-mt-10 tw-mb-4">
				assignee
			</label>
			<div
				className=" tw-w-full tw-h-max"
				onMouseEnter={() => togglePersonCompUsernameNrole("assignee")}
				onMouseLeave={() => togglePersonCompUsernameNrole("assignee")}>
				<IssueDetailPersonComponent
					fullname="Milly Tuner"
					username="VeryCute"
					role="Network Enginner"
					imgUrl="/logo.png"
					tag="assignee"
				/>
			</div>
			{/* reporter */}
			<label className=" tw-block tw-text-start tw-font-exo tw-text-gray-600 dark:tw-text-gray-400 tw-text-[16px] tw-font-semibold tw-mt-10 tw-mb-4">
				reporter
			</label>
			<div
				className=" tw-w-full tw-h-max"
				onMouseEnter={() => togglePersonCompUsernameNrole("reporter")}
				onMouseLeave={() => togglePersonCompUsernameNrole("reporter")}>
				<IssueDetailPersonComponent
					fullname="James Camson"
					username="Jamie"
					role="Backend Enginner"
					imgUrl="/logo.png"
					tag="reporter"
				/>
			</div>
			{/* priority */}
			<label className=" tw-block tw-text-start tw-font-exo tw-text-gray-600 dark:tw-text-gray-400 tw-text-[16px] tw-font-semibold tw-mt-10 tw-mb-4">
				priority
			</label>
			<div className=" tw-w-max tw-h-max tw-relative tw-mt-7">
				<div className=" tw-w-max tw-h-max tw-flex tw-justify-start tw-items-center ">
					<button
						className=" tw-w-max tw-h-max tw-py-1 tw-px-3 tw-text-[15px] tw-flex tw-justify-center tw-items-center tw-text-gray-700 dark:tw-text-gray-300 tw-bg-gray-300 dark:tw-bg-gray-800 tw-rounded"
						onClick={issueDetailTogglePriorityPopup}>
						<span className=" tw-w-max tw-h-max tw-me-2">
							{((priority) => {
								switch (priority) {
									case "highest":
										return <IconPriorityHighest />;
									case "high":
										return <IconPriorityHigh />;
									case "mid":
										return <IconPriorityMid />;
									case "low":
										return <IconPriorityLow />;
								}
							})(priority)}
						</span>
						<span className=" tw-ms-2 tw-font-exo">{priority}</span>
						<span
							id="iss_dtl_prio_icn_arr_dwn"
							className=" tw-ms-5 tw-inline-block">
							<IconDownArrow fill="tw-fill-gray-700 dark:tw-fill-gray-300" />
						</span>
					</button>
				</div>
				<div
					id="iss_dtl_prio_popup"
					className=" tw-w-full tw-h-max tw-py-2 tw-px-1 tw-absolute tw-top-[110%] tw-z-30 tw-bg-gray-300 dark:tw-bg-gray-800 tw-rounded tw-hidden">
					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() => issueDetailUpdatePriority(setPriority, "highest")}>
						<NewIssuePrioritySelectItem priority="highest" />
					</button>

					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() => issueDetailUpdatePriority(setPriority, "high")}>
						<NewIssuePrioritySelectItem priority="high" />
					</button>

					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() => issueDetailUpdatePriority(setPriority, "mid")}>
						<NewIssuePrioritySelectItem priority="mid" />
					</button>

					<button
						className=" tw-w-max tw-h-max tw-block"
						onClick={() => issueDetailUpdatePriority(setPriority, "low")}>
						<NewIssuePrioritySelectItem priority="low" />
					</button>
				</div>
			</div>
			{/* tags */}
			<label className=" tw-block tw-text-start tw-font-exo tw-text-gray-600 dark:tw-text-gray-400 tw-text-[16px] tw-font-semibold tw-mt-10 tw-mb-4">
				tags
			</label>
			<div className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-flex-wrap">
				<p className=" tw-w-max tw-h-max tw-inline tw-mx-3 tw-my-2 tw-px-2 tw-py-1 tw-font-exo tw-text-[15px] tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-100 dark:tw-bg-gray-800 tw-rounded-lg">
					software
				</p>
				<p className=" tw-w-max tw-h-max tw-inline tw-mx-3 tw-my-2 tw-px-2 tw-py-1 tw-font-exo tw-text-[15px] tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-100 dark:tw-bg-gray-800 tw-rounded-lg">
					jump
				</p>
				<p className=" tw-w-max tw-h-max tw-inline tw-mx-3 tw-my-2 tw-px-2 tw-py-1 tw-font-exo tw-text-[15px] tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-100 dark:tw-bg-gray-800 tw-rounded-lg">
					camper
				</p>
				<p className=" tw-w-max tw-h-max tw-inline tw-mx-3 tw-my-2 tw-px-2 tw-py-1 tw-font-exo tw-text-[15px] tw-text-gray-700 dark:tw-text-gray-400 tw-bg-gray-100 dark:tw-bg-gray-800 tw-rounded-lg">
					industrialization
				</p>
			</div>
			{/* parent */}
			{hasParent ? (
				<>
					<label className=" tw-block tw-text-start tw-font-exo tw-text-gray-600 dark:tw-text-gray-400 tw-text-[16px] tw-font-semibold tw-mt-10 tw-mb-4">
						parent
					</label>
					<a
						href="/workspace/project-details/MMKJU/issue-details/MMKJU-12"
						className=" tw-w-full tw-text-start tw-text-[17px] tw-text-blue-500 tw-no-underline tw-bg-blue-200 dark:tw-bg-blue-700/30 tw-px-2 tw-py-1 tw-rounded tw-font-semibold">
						MMKJU-12
					</a>
				</>
			) : (
				<></>
			)}
			{/* due date */}
			<label className=" tw-block tw-text-start tw-font-exo tw-text-gray-600 dark:tw-text-gray-400 tw-text-[16px] tw-font-semibold tw-mt-10 tw-mb-4">
				due date
			</label>
			<p className=" tw-w-max tw-h-max tw-text-start tw-text-gray-700 dark:tw-text-gray-300 tw-font-exo tw-font-semibold tw-text-[17px]">
				23-09-2025
			</p>
		</div>
	);
};

export default IssueDetailsSubSectionRoot;
