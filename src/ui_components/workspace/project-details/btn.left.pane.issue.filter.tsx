"use client";
import { projectDetailsLeftPaneIssueFilterOnClick } from "@/ui_controllers/workspace/projects/details/side.pane.issue.filter.btn.click";

const BtnProjectDetailsLeftPaneIssuesFilter = ({
	label,
}: {
	label: string;
}) => {
	return (
		<button
			className=" tw-w-[90%] tw-h-max tw-mt-3 tw-px-3 tw-py-2 tw-text-[17px] tw-text-start tw-text-gray-800 dark:tw-text-gray-400 tw-rounded prj_dtl_side_pane_iss_fil_btn"
			onClick={projectDetailsLeftPaneIssueFilterOnClick}>
			{label}
		</button>
	);
};

export default BtnProjectDetailsLeftPaneIssuesFilter;
