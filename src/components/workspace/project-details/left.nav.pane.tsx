"use client";
import IconShowIssueFilterOption from "@/components/icons/issues.arrow.right";
import ProjectDetailsLeftPaneIssuesFilterBtn from "./left.pane.issue.filter.btn";
import ProjectDetailLeftPaneNavBtn from "./left.pane.nav.btn";
import { showHideLeftPaneIssueOptions } from "@/ui_controllers/workspace/projects/details/translate.side.pane.opt.cont";

const ProjectDetailsLeftNavPane = ({ name }: { name: string }) => {
	return (
		<section className=" tw-w-[300px] tw-h-full tw-border-r-[1.5px] tw-pt-8 tw-border-gray-300 dark:tw-border-r-gray-700">
			<h4 className=" tw-w-full tw-h-max tw-mt-[45px] tw-ps-4 tw-pe-1 tw-truncate tw-font-exo tw-font-bold tw-text-[22px] tw-text-gray-800 dark:tw-text-gray-400">
				{name}{" "}
			</h4>
			<div className=" tw-w-full tw-max-w-full tw-mt-[30px] tw-h-max tw-flex tw-flex-nowrap tw-overflow-hidden">
				<div className=" tw-inline tw-pl-8 tw-w-full tw-min-w-full tw-max-w-full side_pane_opts tw-transition-transform tw-ease-linear">
					<ProjectDetailLeftPaneNavBtn label="Issues" />
					<ProjectDetailLeftPaneNavBtn label="Components" />
					<ProjectDetailLeftPaneNavBtn label="People" />
					<ProjectDetailLeftPaneNavBtn label="Teams" />
					<ProjectDetailLeftPaneNavBtn label="Details" />
				</div>
				<div
					id="prj_dtl_lft_pane_iss_opt"
					className="tw-w-full tw-min-w-full tw-max-w-full tw-px-4 tw-inline-flex tw-flex-col tw-items-center side_pane_opts tw-transition-transform tw-ease-linear">
					<button
						className=" tw-w-full tw-text-gray-800 dark:tw-text-gray-400 tw-font-bold tw-text-start tw-ml-3 tw-my-6 tw-flex tw-justify-start tw-items-center"
						onClick={showHideLeftPaneIssueOptions}>
						<span className=" tw-mr-3 tw-rotate-180">
							<IconShowIssueFilterOption />
						</span>{" "}
						<span>Back To Projects</span>
					</button>
					<ProjectDetailsLeftPaneIssuesFilterBtn label="All" />
					<ProjectDetailsLeftPaneIssuesFilterBtn label="My Open Issues" />
					<ProjectDetailsLeftPaneIssuesFilterBtn label="Reported By Me" />
					<ProjectDetailsLeftPaneIssuesFilterBtn label="Pending Issues" />
					<ProjectDetailsLeftPaneIssuesFilterBtn label="Done Issues" />
				</div>
			</div>
		</section>
	);
};

export default ProjectDetailsLeftNavPane;
