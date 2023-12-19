import IconBug from "../icons/bug.icon";
import IconFeature from "../icons/feature.icon";
import IconImprovement from "../icons/improvement.icon";
import IconSubTask from "../icons/sub.task.icon";
import IconTask from "../icons/task.icon";

const ListItemProfileViewIssue = ({
	issueSum,
	type,
	projectName,
	dateUpdated,
	topBorder,
}: {
	issueSum: string;
	type: "task" | "sub_task" | "improvement" | "bug" | "feature";
	projectName: string;
	dateUpdated: String;
	topBorder: boolean;
}) => {
	return (
		<div
			className={` tw-py-5 tw-w-full ${
				topBorder
					? " tw-border-t-[1px] tw-border-t-gray-500 dark:tw-border-t-gray-700"
					: ""
			} tw-flex tw-justify-start tw-items-center`}>
			<div className=" tw-inline tw-mr-4">
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
			<div className=" tw-inline tw-h-max tw-basis-full tw-shrink tw-flex-grow-0">
				<p className=" tw-text-[16px] tw-font-exo tw-text-gray-800 dark:tw-text-gray-400 tw-truncate">
					{issueSum}
				</p>
				<p className="tw-text-[12px] tw-font-exo tw-text-gray-600 dark:tw-text-gray-500 tw-mt-2 tw-truncate">
					<span className=" tw-mr-3">{projectName}</span>.{" "}
					<span className=" tw-ms-3">{dateUpdated}</span>
				</p>
			</div>
		</div>
	);
};

export default ListItemProfileViewIssue;
