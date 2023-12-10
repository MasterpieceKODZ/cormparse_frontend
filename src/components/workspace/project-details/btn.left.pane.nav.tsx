"use client";
import IconShowIssueFilterOption from "@/components/icons/issues.arrow.right";
import { projectsDetailsLeftpaneButtonClick } from "@/ui_controllers/workspace/projects/details/side.pane.btn.click";
import { showHideLeftPaneIssueOptions } from "@/ui_controllers/workspace/projects/details/translate.side.pane.opt.cont";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BtnProjectDetailLeftPaneNav = ({
	label,
	projectKey,
}: {
	label: string;
	projectKey: string;
}) => {
	const router = useRouter();

	return (
		<div
			id="left_pane_btn_wrapper"
			className=" tw-w-full tw-h-max tw-mt-6 tw-py-2 side_pane_btn_wrapper">
			<button
				className=" tw-w-full tw-h-max tw-ps-3 tw-flex tw-whitespace-nowrap tw-justify-between tw-items-center tw-text-[17px] tw-text-start tw-text-gray-800 dark:tw-text-gray-400"
				onClick={(e) => {
					if (label == "Issues") {
						showHideLeftPaneIssueOptions();
					}
					projectsDetailsLeftpaneButtonClick(e);
				}}>
				<Link
					className=" tw-no-underline tw-w-full tw-text-start"
					href={`/workspace/project-details/${projectKey}/${
						label != "Issues" ? label.toLowerCase() : ""
					}`}>
					{label}
				</Link>
				{label == "Issues" ? (
					<span className=" tw-mr-4">
						<IconShowIssueFilterOption />
					</span>
				) : (
					<></>
				)}
			</button>
		</div>
	);
};

export default BtnProjectDetailLeftPaneNav;
