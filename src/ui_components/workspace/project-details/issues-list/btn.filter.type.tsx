"use client";
import IconBug from "@/ui_components/icons/bug.icon";
import IconDownArrow from "@/ui_components/icons/down.arrow";
import IconFeature from "@/ui_components/icons/feature.icon";
import IconImprovement from "@/ui_components/icons/improvement.icon";
import IconSubTask from "@/ui_components/icons/sub.task.icon";
import IconTask from "@/ui_components/icons/task.icon";
import {
	filterIssueByType,
	toggleIssueTypeFilter,
} from "@/ui_controllers/workspace/issues/show.hide.issue.type.filter";

const BtnFilterIssueByType = () => {
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
				<button
					className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-my-[25px]"
					onClick={() => filterIssueByType("feature")}>
					<span>
						<IconFeature />
					</span>
					<span className=" tw-basis-full tw-shrink tw-text-start tw-text-gray-800 dark:tw-text-gray-300  tw-grow-0 tw-ms-3">
						New Feature
					</span>
				</button>
				<button
					className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-my-[25px]"
					onClick={() => filterIssueByType("improvement")}>
					<span>
						<IconImprovement />
					</span>
					<span className=" tw-basis-full tw-shrink tw-text-start tw-text-gray-800 dark:tw-text-gray-300 tw-grow-0 tw-ms-3">
						Improvement
					</span>
				</button>
				<button
					className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-my-[25px]"
					onClick={() => filterIssueByType("bug")}>
					<span>
						<IconBug />
					</span>
					<span className=" tw-basis-full tw-shrink tw-text-start tw-text-gray-800 dark:tw-text-gray-300 tw-grow-0 tw-ms-3">
						Bug
					</span>
				</button>
				<button
					className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-my-[25px]"
					onClick={() => filterIssueByType("sub-task")}>
					<span>
						<IconSubTask />
					</span>
					<span className=" tw-basis-full tw-shrink tw-text-start tw-text-gray-800 dark:tw-text-gray-300 tw-grow-0 tw-ms-3">
						Sub-Task
					</span>
				</button>
				<button
					className=" tw-w-full tw-h-max tw-flex tw-justify-start tw-items-center tw-my-[25px]"
					onClick={() => filterIssueByType("task")}>
					<span>
						<IconTask />
					</span>
					<span className=" tw-basis-full tw-shrink tw-grow-0 tw-text-start tw-text-gray-800 dark:tw-text-gray-300 tw-ms-3">
						Task
					</span>
				</button>
			</div>
		</div>
	);
};

export default BtnFilterIssueByType;
