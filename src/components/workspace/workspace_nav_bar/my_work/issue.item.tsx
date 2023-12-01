import BugIcon from "@/components/icons/bug.icon";
import FeatureIcon from "@/components/icons/feature.icon";
import ImprovementIcon from "@/components/icons/improvement.icon";
import SubTaskIcon from "@/components/icons/sub.task.icon";
import TaskIcon from "@/components/icons/task.icon";

const PopUpIssueItem = ({
	summary,
	issuekey,
	project,
	type,
}: {
	summary: string;
	issuekey: string;
	project: string;
	type: "task" | "sub_task" | "improvement" | "bug" | "feature";
}) => {
	return (
		<div className=" tw-w-full tw-flex tw-items-center tw-justify-start tw-mt-1">
			<div className=" tw-w-max tw-h-max tw-ms-1 tw-mr-6">
				{type == "task" ? (
					<TaskIcon />
				) : type == "sub_task" ? (
					<SubTaskIcon />
				) : type == "improvement" ? (
					<ImprovementIcon />
				) : type == "bug" ? (
					<BugIcon />
				) : (
					<FeatureIcon />
				)}
			</div>
			<div className=" tw-basis-full tw-shrink tw-mt-3 tw-w-[85%]">
				<p className="tw-text-gray-800 dark:tw-text-gray-400 tw-w-full tw-truncate">
					{summary}
				</p>
				<p className=" tw-mt-1 tw-font-exo tw-text-gray-600 dark:tw-text-gray-500 tw-text-[10px]">
					<span className=" tw-mr-3">{issuekey}</span>
					<span className=" tw-mx-1">|</span>{" "}
					<span className=" tw-ml-3">{project}</span>
				</p>
			</div>
		</div>
	);
};

export default PopUpIssueItem;
