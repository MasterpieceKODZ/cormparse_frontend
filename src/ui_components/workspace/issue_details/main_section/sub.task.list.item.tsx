import IconPriorityHigh from "@/ui_components/icons/issue.priority.high";
import IconPriorityHighest from "@/ui_components/icons/issue.priority.highest";
import IconPriorityLow from "@/ui_components/icons/issue.priority.low";
import IconPriorityMid from "@/ui_components/icons/issue.priority.mid";
import IconSubTask from "@/ui_components/icons/sub.task.icon";

const IssueDetailSubTaskItem = ({
	key,
	summary,
	priority,
	status,
}: {
	key: string;
	summary: string;
	priority: string;
	status: string;
}) => {
	return (
		<div className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-py-3 tw-px-2 tw-my-4 tw-bg-gray-50 dark:tw-bg-gray-800 dark:tw-shadow-gray-600 tw-rounded-lg tw-shadow">
			<div
				title="sub-task"
				className=" tw-w-max tw-h-max tw-me-3 tw-ms-1">
				<IconSubTask />
			</div>
			<p className=" tw-w-max tw-text-[16px] tw-text-blue-600 tw-font-exo">
				{key}
			</p>
			<p className=" tw-basis-full tw-shrink tw-grow-0 tw-ms-3 tw-text-[16px] tw-font-exo tw-text-gray-700 dark:tw-text-gray-400 tw-truncate">
				{summary}
			</p>
			{/* priority */}
			<span className=" tw-w-max tw-h-max tw-mx-2">
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

			{/* status */}
			<span className=" tw-w-max tw-h-max tw-mx-2">
				{((status: string) => {
					switch (status) {
						case "in-progress":
							return (
								<p className=" tw-font-exo tw-font-semibold tw-text-[16px] tw-me-3 tw-text-blue-600 tw-whitespace-nowrap">
									{status}
								</p>
							);
						case "to-do":
							return (
								<p className=" tw-font-exo tw-font-semibold tw-text-[16px] tw-me-3 tw-text-gray-500 dark:tw-text-gray-400 tw-whitespace-nowrap">
									{status}
								</p>
							);
						case "in-review":
							return (
								<p className=" tw-font-exo tw-font-semibold tw-text-[16px] tw-me-3 tw-text-blue-600 tw-whitespace-nowrap">
									{status}
								</p>
							);
						case "done":
							return (
								<p className=" tw-font-exo tw-font-semibold tw-text-[16px] tw-me-3 tw-text-green-600 tw-whitespace-nowrap">
									{status}
								</p>
							);
					}
				})(status)}
			</span>
		</div>
	);
};

export default IssueDetailSubTaskItem;
