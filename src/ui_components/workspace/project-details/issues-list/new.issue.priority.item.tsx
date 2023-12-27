import IconPriorityHigh from "@/ui_components/icons/issue.priority.high";
import IconPriorityHighest from "@/ui_components/icons/issue.priority.highest";
import IconPriorityLow from "@/ui_components/icons/issue.priority.low";
import IconPriorityMid from "@/ui_components/icons/issue.priority.mid";
import { ReactNode } from "react";

const NewIssuePrioritySelectItem = ({ priority }: { priority: string }) => {
	return (
		<p className=" tw-w-max tw-h-max tw-px-3 tw-my-2 tw-flex tw-justify-center tw-items-center tw-text-[15px] tw-text-gray-700 dark:tw-text-gray-400">
			<span className=" tw-inline tw-w-max tw-h-max tw-me-2">
				{((priority: string): ReactNode => {
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
			<span className=" tw-inline tw-ms-2 tw-font-exo">{priority}</span>
		</p>
	);
};

export default NewIssuePrioritySelectItem;
