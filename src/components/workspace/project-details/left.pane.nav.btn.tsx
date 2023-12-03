"use client";
import { projectsDetailsSidepaneButtonClick } from "@/ui_controllers/workspace/projects/details/side.pane.btn.click";

const ProjectDetailLeftPaneNavBtn = ({ label }: { label: string }) => {
	return (
		<div
			id="left_pane_btn_wrapper"
			className=" tw-w-full tw-h-max tw-mt-6 tw-py-2 side_pane_btn_wrapper">
			<button
				className=" tw-w-full tw-h-max tw-ps-3 tw-text-[17px] tw-text-start tw-text-gray-800 dark:tw-text-gray-400"
				onClick={projectsDetailsSidepaneButtonClick}>
				{label}
			</button>
		</div>
	);
};

export default ProjectDetailLeftPaneNavBtn;
