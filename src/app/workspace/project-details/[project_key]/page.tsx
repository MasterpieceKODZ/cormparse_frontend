import { projectsTableRowHead } from "@/tailwind_classname_utils/workspace";
import BtnCreateNewIssue from "@/ui_components/workspace/project-details/issues-list/btn.create.new.issue";
import BtnFilterIssueByAssignee from "@/ui_components/workspace/project-details/issues-list/btn.filter.assignee";
import BtnFilterIssueByDueDate from "@/ui_components/workspace/project-details/issues-list/btn.filter.due_date";
import BtnFilterIssueByStatus from "@/ui_components/workspace/project-details/issues-list/btn.filter.status";
import BtnFilterIssueByType from "@/ui_components/workspace/project-details/issues-list/btn.filter.type";
import BtnIssueTableHead from "@/ui_components/workspace/project-details/issues-list/btn.iss.table.head";
import BtnIssuePaginationNext from "@/ui_components/workspace/project-details/issues-list/btn.page.next";
import BtnIssuePaginationNum from "@/ui_components/workspace/project-details/issues-list/btn.page.num";
import BtnIssuesPaginationPrev from "@/ui_components/workspace/project-details/issues-list/btn.page.prev";
import CreateNewIssue from "@/ui_components/workspace/project-details/issues-list/create.new.issue";
import IssueTableItem from "@/ui_components/workspace/project-details/issues-list/issue.table.item";

const ProjectDetails = () => {
	return (
		<section className=" tw-w-[80vw] tw-max-w-[80vw] tw-h-full tw-max-h-full tw-pt-5 tw-pb-3 tw-relative">
			<h3 className=" tw-font-exo tw-font-semibold tw-text-[25px] tw-text-start tw-text-gray-800 dark:tw-text-gray-400 tw-mt-5 tw-ps-[18px] tw-relative">
				Issues
			</h3>
			<div className=" tw-w-full tw-max-w-full tw-h-max tw-mt-[20px] tw-ps-[48px] tw-flex tw-justify-start tw-items-center">
				<BtnFilterIssueByType />
				<BtnFilterIssueByStatus />
				<BtnFilterIssueByAssignee />
				<BtnFilterIssueByDueDate />
			</div>
			<div className=" tw-w-[80vw] tw-max-w-full tw-h-[67vh] tw-relative tw-overflow-auto tw-mt-[20px] tw-pb-1">
				<div className=" tw-w-full tw-h-full tw-px-2 tw-min-w-[1200px] tw-mx-auto tw-relative">
					<table className=" tw-w-full tw-table-auto tw-relative">
						<thead className=" tw-h-max  tw-bg-white dark:tw-bg-gray-900 tw-sticky tw-border-b-2 tw-border-gray-500 tw-top-0 tw-z-30">
							<tr className="tw-py-3 tw-border-b-2 tw-border-gray-500 tw-sticky">
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead label="type" />
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead label="summary" />
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead label="status" />
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead label="key" />
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead label="priority" />
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead label="reporter" />
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead label="assignee" />
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead label="date created" />
								</th>

								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead label="due date" />
								</th>
								<th className={`${projectsTableRowHead}`}> </th>
							</tr>
						</thead>
						<tbody>
							<IssueTableItem
								type="bug"
								summary="this issues is a temporary issue created from my grown from the fertile soil of"
								status="to-do"
								issueKey="ndffg"
								projectKey="ndf"
								priority="highest"
								reporterUsername="MasterpieceKODZ"
								reporterName="Gideon Omorodion"
								reporterRole="Fullstack Developer"
								reporterImg="/logo.png"
								assigneeUsername="MANofVALOR"
								assigneeName="Faith Omorodion"
								assigneeRole="Frontend Engineer"
								assigneeImg="/logo.png"
								dateCreated="30-04-2023"
								dueDate="21-10-2024"
							/>
							<IssueTableItem
								type="feature"
								summary="this issues is a temporary issue created from my grown from the fertile soil of"
								status="in-progress"
								issueKey="ndffg"
								projectKey="ndf"
								priority="low"
								reporterUsername="MasterpieceKODZ"
								reporterName="Gideon Omorodion"
								reporterRole="Fullstack Developer"
								reporterImg="/logo.png"
								assigneeUsername="MANofVALOR"
								assigneeName="Faith Omorodion"
								assigneeRole="Frontend Engineer"
								assigneeImg="/logo.png"
								dateCreated="30-04-2023"
								dueDate="21-10-2024"
							/>
							<IssueTableItem
								type="task"
								summary="this issues is a temporary issue created from my grown from the fertile soil of"
								status="in-review"
								issueKey="ndffg"
								projectKey="ndf"
								priority="mid"
								reporterUsername="MasterpieceKODZ"
								reporterName="Gideon Omorodion"
								reporterRole="Fullstack Developer"
								reporterImg="/logo.png"
								assigneeUsername="MANofVALOR"
								assigneeName="Faith Omorodion"
								assigneeRole="Frontend Engineer"
								assigneeImg="/logo.png"
								dateCreated="30-04-2023"
								dueDate="21-10-2024"
							/>
							<IssueTableItem
								type="sub-task"
								summary="this issues is a temporary issue created from my grown from the fertile soil of"
								status="closed"
								issueKey="ndffg"
								projectKey="ndf"
								priority="high"
								reporterUsername="MasterpieceKODZ"
								reporterName="Gideon Omorodion"
								reporterRole="Fullstack Developer"
								reporterImg="/logo.png"
								assigneeUsername="MANofVALOR"
								assigneeName="Faith Omorodion"
								assigneeRole="Frontend Engineer"
								assigneeImg="/logo.png"
								dateCreated="30-04-2023"
								dueDate="21-10-2024"
							/>
							<IssueTableItem
								type="sub-task"
								summary="this issues is a temporary issue created from my grown from the fertile soil of"
								status="closed"
								issueKey="ndffg"
								projectKey="ndf"
								priority="high"
								reporterUsername="MasterpieceKODZ"
								reporterName="Gideon Omorodion"
								reporterRole="Fullstack Developer"
								reporterImg="/logo.png"
								assigneeUsername="MANofVALOR"
								assigneeName="Faith Omorodion"
								assigneeRole="Frontend Engineer"
								assigneeImg="/logo.png"
								dateCreated="30-04-2023"
								dueDate="21-10-2024"
							/>
							<IssueTableItem
								type="sub-task"
								summary="this issues is a temporary issue created from my grown from the fertile soil of"
								status="closed"
								issueKey="ndffg"
								projectKey="ndf"
								priority="high"
								reporterUsername="MasterpieceKODZ"
								reporterName="Gideon Omorodion"
								reporterRole="Fullstack Developer"
								reporterImg="/logo.png"
								assigneeUsername="MANofVALOR"
								assigneeName="Faith Omorodion"
								assigneeRole="Frontend Engineer"
								assigneeImg="/logo.png"
								dateCreated="30-04-2023"
								dueDate="21-10-2024"
							/>
							<IssueTableItem
								type="sub-task"
								summary="this issues is a temporary issue created from my grown from the fertile soil of"
								status="closed"
								issueKey="ndffg"
								projectKey="ndf"
								priority="high"
								reporterUsername="MasterpieceKODZ"
								reporterName="Gideon Omorodion"
								reporterRole="Fullstack Developer"
								reporterImg="/logo.png"
								assigneeUsername="MANofVALOR"
								assigneeName="Faith Omorodion"
								assigneeRole="Frontend Engineer"
								assigneeImg="/logo.png"
								dateCreated="30-04-2023"
								dueDate="21-10-2024"
							/>
							<IssueTableItem
								type="improvement"
								summary="this issues is a temporary issue created from my grown from the fertile soil of"
								status="done"
								issueKey="ndffg"
								projectKey="ndf"
								priority="high"
								reporterUsername="MasterpieceKODZ"
								reporterName="Gideon Omorodion"
								reporterRole="Fullstack Developer"
								reporterImg="/logo.png"
								assigneeUsername="MANofVALOR"
								assigneeName="Faith Omorodion"
								assigneeRole="Frontend Engineer"
								assigneeImg="/logo.png"
								dateCreated="30-04-2023"
								dueDate="21-10-2024"
							/>
							<IssueTableItem
								type="task"
								summary="this issues is a temporary issue created from my grown from the fertile soil of"
								status="in-progress"
								issueKey="ndffg"
								projectKey="ndf"
								priority="low"
								reporterUsername="MasterpieceKODZ"
								reporterName="Gideon Omorodion"
								reporterRole="Fullstack Developer"
								reporterImg="/logo.png"
								assigneeUsername="MANofVALOR"
								assigneeName="Faith Omorodion"
								assigneeRole="Frontend Engineer"
								assigneeImg="/logo.png"
								dateCreated="30-04-2023"
								dueDate="21-10-2024"
							/>
						</tbody>
					</table>
				</div>
			</div>
			<div
				id="pagination_cont"
				className=" tw-w-full tw-h-max tw-flex tw-items-center tw-justify-end tw-pe-6 tw-mt-5">
				<div
					id="pagination_wrapper"
					className=" tw-w-max tw-h-max tw-flex tw-justify-center tw-items-center">
					<BtnIssuesPaginationPrev />
					<BtnIssuePaginationNum pageNum="1" />
					<BtnIssuePaginationNum pageNum="2" />
					<BtnIssuePaginationNum pageNum="3" />
					<BtnIssuePaginationNum pageNum="4" />
					<BtnIssuePaginationNum pageNum="200" />
					<BtnIssuePaginationNext />
				</div>
			</div>
			<div className=" tw-w-max tw-h-max tw-absolute tw-top-[4vh] tw-right-[30px]">
				<BtnCreateNewIssue />
				<CreateNewIssue />
			</div>
		</section>
	);
};

export default ProjectDetails;
export const dynamic = "force-dynamic";
