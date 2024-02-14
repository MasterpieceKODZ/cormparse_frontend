"use client";
import { projectDetailsLeftPaneIssueFilterOnClick } from "@/ui_controllers/workspace/projects/details/side.pane.issue.filter.btn.click";
import Link from "next/link";

const BtnProjectDetailsLeftPaneIssuesCategory = ({
	label,
	param,
}: {
	label: string;
	param: string;
}) => {
	const projectKey = location.pathname.split("/")[3];

	return (
		<Link
			href={`/workspace/project-details/${projectKey}/issues-list/${param}`}
			className=" tw-w-[90%] tw-h-max tw-mt-3 tw-px-3 tw-py-2 tw-text-[17px] tw-text-start tw-text-gray-800 dark:tw-text-gray-400 tw-rounded prj_dtl_side_pane_iss_fil_btn"
			onClick={projectDetailsLeftPaneIssueFilterOnClick}>
			{label}
		</Link>
	);
};

export default BtnProjectDetailsLeftPaneIssuesCategory;
