import IconBug from "@/ui_components/icons/bug.icon";
import IconFeature from "@/ui_components/icons/feature.icon";
import IconImprovement from "@/ui_components/icons/improvement.icon";
import IconSubTask from "@/ui_components/icons/sub.task.icon";
import IconTask from "@/ui_components/icons/task.icon";

const PopUpIssueItem = ({
	summary,
	issuekey,
	project,
	type,
}: {
	summary: string;
	issuekey: string;
	project: string;
	type: string;
}) => {
	return (
		<div className=" tw-w-full tw-flex tw-items-center tw-justify-start tw-mt-1">
			<div className=" tw-w-max tw-h-max tw-ms-1 tw-mr-6">
				{type == "task" ? (
					<IconTask />
				) : type == "sub_task" ? (
					<IconSubTask />
				) : type == "improvement" ? (
					<IconImprovement />
				) : type == "bug" ? (
					<IconBug />
				) : (
					<IconFeature />
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
