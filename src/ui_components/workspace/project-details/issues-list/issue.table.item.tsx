/* eslint-disable @next/next/no-img-element */
import { projectsTableRowData } from "@/tailwind_classname_utils/workspace";
import Link from "next/link";
import IconBug from "@/ui_components/icons/bug.icon";
import IconTask from "@/ui_components/icons/task.icon";
import IconSubTask from "@/ui_components/icons/sub.task.icon";
import IconFeature from "@/ui_components/icons/feature.icon";
import IconImprovement from "@/ui_components/icons/improvement.icon";
import IconPriorityHighest from "@/ui_components/icons/issue.priority.highest";
import IconPriorityHigh from "@/ui_components/icons/issue.priority.high";
import IconPriorityMid from "@/ui_components/icons/issue.priority.mid";
import IconPriorityLow from "@/ui_components/icons/issue.priority.low";
import ProjectMemberItem from "../user.item";

const IssueTableItem = ({
	type,
	summary,
	status,
	issueKey,
	projectKey,
	priority,
	reporterUsername,
	reporterName,
	reporterRole,
	reporterImg,
	assigneeUsername,
	assigneeName,
	assigneeRole,
	assigneeImg,
	dateCreated,
	dueDate,
}: {
	type: string;
	summary: string;
	status: string;
	issueKey: string;
	projectKey: string;
	priority: string;
	reporterUsername: string;
	reporterName: string;
	reporterRole: string;
	reporterImg: string;
	assigneeUsername: string;
	assigneeName: string;
	assigneeRole: string;
	assigneeImg: string;
	dateCreated: string;
	dueDate: string;
}) => {
	return (
		<tr className=" tw-my-6 tw-h-max hover:tw-bg-gray-200 dark:hover:tw-bg-gray-700">
			{/* type */}
			<td
				className={`${projectsTableRowData} tw-max-w-[300px] 2xl:tw-max-w-[500px] tw-cursor-pointer`}>
				<div
					className=" tw-w-max tw-h-max"
					title={type}>
					{((type: string): any => {
						switch (type) {
							case "bug":
								return <IconBug />;
							case "task":
								return <IconTask />;
							case "sub_task":
								return <IconSubTask />;
							case "feature":
								return <IconFeature />;
							case "improvement":
								return <IconImprovement />;
						}
					})(type)}
				</div>
			</td>
			{/* summary */}
			<td
				className={`${projectsTableRowData} tw-max-w-[300px] 2xl:tw-max-w-[500px] tw-cursor-pointer`}>
				<Link
					href={`/workspace/project-details/${projectKey}/issue-details/${issueKey}`}
					className=" tw-text-blue-800 tw-no-underline">
					{summary}
				</Link>
			</td>

			{/* key */}
			<td className={`${projectsTableRowData}`}>{issueKey}</td>
			{/* status */}
			<td
				className={`${
					status == "to-do"
						? " tw-text-gray-700 dark:tw-text-gray-100"
						: status == "in-progress"
						? "tw-text-blue-700"
						: status == "in-review"
						? "tw-text-blue-700"
						: " tw-text-green-700"
				}`}>
				{status}
			</td>
			{/* priority */}
			<td className={`${projectsTableRowData}`}>
				<div
					className=" tw-w-max tw-h-max"
					title={priority}>
					{((priority: string): any => {
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
				</div>
			</td>
			{/* reporter */}
			<td className={`${projectsTableRowData}`}>
				{
					<ProjectMemberItem
						username={reporterUsername}
						fullname={reporterName}
						img={reporterImg}
						dir="down"
						role={reporterRole}
						showPopup
					/>
				}
			</td>
			{/* assignee */}
			<td className={`${projectsTableRowData}`}>
				{
					<ProjectMemberItem
						username={assigneeUsername}
						fullname={assigneeName}
						img={assigneeImg}
						dir="down"
						role={assigneeRole}
						showPopup
					/>
				}
			</td>
			{/* date created */}
			<td className={`${projectsTableRowData}`}>{dateCreated}</td>
			<td className={`${projectsTableRowData}`}>{dueDate}</td>
		</tr>
	);
};

export default IssueTableItem;
