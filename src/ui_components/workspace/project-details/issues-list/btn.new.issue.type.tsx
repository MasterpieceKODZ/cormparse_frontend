import IconBug from "@/ui_components/icons/bug.icon";
import IconFeature from "@/ui_components/icons/feature.icon";
import IconImprovement from "@/ui_components/icons/improvement.icon";
import IconTask from "@/ui_components/icons/task.icon";
import { ReactNode } from "react";

const NewIssueTypeSelectItem = ({ type }: { type: string }) => {
	return (
		<p className=" tw-w-max tw-h-max tw-px-3 tw-my-2 tw-flex tw-justify-center tw-items-center tw-text-[15px] tw-text-gray-700 dark:tw-text-gray-400">
			<span className=" tw-inline tw-w-max tw-h-max tw-me-2">
				{((type: string): ReactNode => {
					switch (type) {
						case "bug":
							return <IconBug />;
						case "feature":
							return <IconFeature />;
						case "improvement":
							return <IconImprovement />;
						case "task":
							return <IconTask />;
					}
				})(type)}
			</span>
			<span className=" tw-inline tw-ms-2 tw-font-exo">{type}</span>
		</p>
	);
};

export default NewIssueTypeSelectItem;
