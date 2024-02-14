"use client";
import IconShowIssueCategoryOption from "@/ui_components/icons/issues.arrow.right";
import BtnProjectDetailsLeftPaneIssuesCategory from "./btn.left.pane.issue.category";
import BtnProjectDetailLeftPaneNav from "./btn.left.pane.nav";
import { showHideLeftPaneIssueOptions } from "@/ui_controllers/workspace/projects/details/translate.side.pane.opt.cont";
import { useParams } from "next/navigation";

const ProjectDetailsLeftNavPane = ({ name }: { name: string }) => {
	const params = useParams();

	return (
		<section className=" tw-w-[20vw] tw-inline tw-min-w-[200px] tw-max-w-[250px] tw-h-full tw-border-r-[1.5px] tw-pt-8 tw-border-gray-300 dark:tw-border-r-gray-700">
			<h4 className=" tw-w-full tw-h-max tw-mt-[45px] tw-ps-4 tw-pe-1 tw-font-exo tw-font-bold tw-text-[22px] tw-text-gray-800 dark:tw-text-gray-400">
				{name}{" "}
			</h4>
			<div className=" tw-w-full tw-max-w-full tw-mt-[30px] tw-h-max tw-flex tw-flex-nowrap tw-overflow-hidden">
				<div className=" tw-inline tw-pl-8 tw-w-full tw-min-w-full tw-max-w-full side_pane_opts tw-transition-transform tw-ease-linear">
					<BtnProjectDetailLeftPaneNav
						label="Issues"
						projectKey={params.project_key as string}
					/>

					<BtnProjectDetailLeftPaneNav
						label="People"
						projectKey={params.project_key as string}
					/>

					<BtnProjectDetailLeftPaneNav
						label="About Project"
						projectKey={params.project_key as string}
					/>
				</div>
				<div
					id="prj_dtl_lft_pane_iss_opt"
					className="tw-w-full tw-min-w-full tw-max-w-full tw-px-4 tw-inline-flex tw-flex-col tw-items-center side_pane_opts tw-transition-transform tw-ease-linear">
					<button
						className=" tw-w-full tw-text-gray-800 dark:tw-text-gray-400 tw-font-bold tw-text-start tw-ml-3 tw-my-6 tw-flex tw-justify-start tw-items-center"
						onClick={showHideLeftPaneIssueOptions}>
						<span className=" tw-mr-3 tw-rotate-180">
							<IconShowIssueCategoryOption />
						</span>{" "}
						<span>Back To Projects</span>
					</button>
					<BtnProjectDetailsLeftPaneIssuesCategory
						label="All Issues"
						param="ALL"
					/>
					<BtnProjectDetailsLeftPaneIssuesCategory
						label="Reported By Me"
						param="REPORTEDBYME"
					/>
					<BtnProjectDetailsLeftPaneIssuesCategory
						label="Pending Issues"
						param="PENDING"
					/>
					<BtnProjectDetailsLeftPaneIssuesCategory
						label="Done Issues"
						param="DONE"
					/>
				</div>
			</div>
		</section>
	);
};

export default ProjectDetailsLeftNavPane;
