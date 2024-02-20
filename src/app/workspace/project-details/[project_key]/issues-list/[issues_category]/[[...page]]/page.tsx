"use client";
import { Issue } from "@/db.schema.types";
/* eslint-disable react-hooks/exhaustive-deps */
import { projectsTableRowHead } from "@/tailwind_classname_utils/workspace";
import BtnCreateNewIssue from "@/ui_components/workspace/project-details/issues-list/btn.create.new.issue";
import BtnFilterIssueByAssignee from "@/ui_components/workspace/project-details/issues-list/btn.filter.assignee";
import BtnFilterIssueByDueDate from "@/ui_components/workspace/project-details/issues-list/btn.filter.due_date";
import BtnFilterIssueByStatus from "@/ui_components/workspace/project-details/issues-list/btn.filter.status";
import BtnFilterIssueByType from "@/ui_components/workspace/project-details/issues-list/btn.filter.type";
import BtnIssueTableHead from "@/ui_components/workspace/project-details/issues-list/btn.iss.table.head";
import BtnIssuePaginationNext from "@/ui_components/workspace/project-details/issues-list/btn.page.next";
import BtnIssuesPaginationPrev from "@/ui_components/workspace/project-details/issues-list/btn.page.prev";
import CreateNewIssue from "@/ui_components/workspace/project-details/issues-list/create.new.issue";
import IssueTableItem from "@/ui_components/workspace/project-details/issues-list/issue.table.item";
import { appendIssuesPaginationBtns } from "@/ui_controllers/workspace/issues/append.pagination.btns";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Fragment, ReactNode, useEffect, useState } from "react";

const ProjectIssuesList = ({
	params,
}: {
	params: {
		project_key: string;
		issues_category: string;
		page: string[];
	};
}) => {
	const issuesCategory = params.issues_category.split("_")[0];
	const offset = params.page ? params.page[0] : "1";
	const queryParams = useSearchParams();

	console.log("issues list offset ---------------------------");
	console.log(offset);

	console.log("project issues params ===========================");
	console.log(params);

	const [issues, setIssues] = useState<"loading" | "failed" | Issue[]>(
		"loading",
	);
	const [issuesCount, setIssuesCount] = useState(0);
	const [showNextPageBtn, setShowNextPageBtn] = useState(false);
	const [numOfPages, setNumOfPages] = useState(0);
	let issueProps: any = { length: 0 };
	useEffect(() => {
		(async () => {
			const session = await getSession();
			const email = session?.user?.email;

			if (queryParams.get("type")) {
				issueProps = {
					...issueProps,
					type: queryParams.get("type"),
					length: 1,
				};
			}

			if (queryParams.get("status")) {
				issueProps = {
					...issueProps,
					status: queryParams.get("status"),
					length: 2,
				};
			}

			if (queryParams.get("assignee")) {
				issueProps = {
					...issueProps,
					assignee: queryParams.get("assignee"),
					length: 3,
				};
			}

			if (queryParams.get("dueDate")) {
				issueProps = {
					...issueProps,
					dueDate: queryParams.get("dueDate"),
					length: 4,
				};
			}

			try {
				const projectIssuesRes = await fetch("/api/project-issues", {
					method: "POST",
					body: JSON.stringify({
						email,
						projectKey: params.project_key,
						category: issuesCategory,
						offset,
						props: JSON.stringify(issueProps),
					}),
					headers: {
						"Content-Type": "application/json",
						"X-Api-Key": "kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
					},
					cache: "no-store",
				});

				if (projectIssuesRes.ok) {
					//*********************/ fetch issues count using the same filters*************

					const projectIssuesCountRes = await fetch(
						"/api/get-project-issues-count",
						{
							method: "POST",
							body: JSON.stringify({
								email,
								projectKey: params.project_key,
								category: issuesCategory,
								props: JSON.stringify(issueProps),
							}),
							headers: {
								"Content-Type": "application/json",
								"X-Api-Key":
									"kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
							},
							cache: "no-store",
						},
					);

					if (projectIssuesCountRes.ok) {
						const issCountResult = await projectIssuesCountRes.json();
						console.log("issues count ------------------------");
						console.log(issCountResult);

						setIssuesCount(issCountResult.count);

						// update number of result pages
						if (issCountResult.count % 10 > 0)
							setNumOfPages(Math.floor(issCountResult.count / 10) + 1);
						else setNumOfPages(issCountResult.count / 10);

						if (parseInt(offset))
							setShowNextPageBtn(parseInt(offset) < issCountResult.count / 10);
					}

					// *********************************************************

					const issuesResult = await projectIssuesRes.json();

					setIssues(issuesResult);
				} else {
					setIssues("failed");
				}
			} catch (error) {
				console.log("error on fetch issues..");
				console.log(error);

				setIssues("failed");
			}
		})();
	}, []);
	return (
		<section className=" tw-w-full tw-h-full tw-max-h-full tw-pt-5 tw-pb-3 tw-relative">
			<h3 className=" tw-font-exo tw-font-semibold tw-text-[25px] tw-text-start tw-text-gray-800 dark:tw-text-gray-400 tw-mt-5 tw-ps-[18px] tw-relative">
				Issues
			</h3>
			<div className=" tw-w-full tw-max-w-full tw-h-max tw-mt-[20px] tw-ps-[48px] tw-flex tw-justify-start tw-items-center">
				<BtnFilterIssueByType category={params.issues_category} />
				<BtnFilterIssueByStatus category={params.issues_category} />
				<BtnFilterIssueByAssignee category={params.issues_category} />
				<BtnFilterIssueByDueDate category={params.issues_category} />
				<Link
					href={`/workspace/project-details/${params.project_key}/issues-list/${
						params.issues_category == "all" ? "all_" : "all"
					}`}
					className=" tw-w-max tw-h-max tw-px-4 tw-py-1 tw-text-[15px] tw-block tw-font-exo tw-text-gray-800 tw-ms-5 dark:tw-text-gray-400 tw-rounded tw-bg-gray-200 dark:tw-bg-gray-700 tw-justify-center">
					Clear Filters
				</Link>
			</div>
			<div className=" tw-w-[80vw] 2xl:tw-w-full tw-max-w-full tw-h-[67vh] tw-relative tw-overflow-auto tw-mt-[20px] tw-pb-1">
				<div className=" tw-w-full tw-h-full tw-px-2 tw-min-w-[1200px] tw-mx-auto tw-relative">
					<table className=" tw-w-full tw-table-auto tw-relative">
						<thead className=" tw-h-max tw-bg-white dark:tw-bg-gray-900 tw-sticky tw-border-b-2 tw-border-gray-500 tw-top-0 tw-z-30">
							<tr className="tw-py-3 tw-border-b-2 tw-border-gray-500 tw-sticky">
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead
										label="type"
										issues={issues}
										setIssues={setIssues}
									/>
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead
										label="summary"
										issues={issues}
										setIssues={setIssues}
									/>
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead
										label="key"
										issues={issues}
										setIssues={setIssues}
									/>
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead
										label="status"
										issues={issues}
										setIssues={setIssues}
									/>
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead
										label="priority"
										issues={issues}
										setIssues={setIssues}
									/>
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead
										label="reporter"
										issues={issues}
										setIssues={setIssues}
									/>
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead
										label="assignee"
										issues={issues}
										setIssues={setIssues}
									/>
								</th>
								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead
										label="reported at"
										issues={issues}
										setIssues={setIssues}
									/>
								</th>

								<th className={`${projectsTableRowHead}`}>
									<BtnIssueTableHead
										label="due date"
										issues={issues}
										setIssues={setIssues}
									/>
								</th>
								<th className={`${projectsTableRowHead}`}> </th>
							</tr>
						</thead>

						<tbody>
							{/* issue loaded */}
							{issues != "loading" && issues != "failed" ? (
								issues.map((iss) => {
									return (
										<Fragment key={iss.id}>
											<IssueTableItem
												type={iss.type}
												summary={iss.summary}
												status={iss.status}
												issueKey={iss.key}
												projectKey={iss.project.key}
												priority={iss.priority}
												reporterUsername={iss.reporter.username}
												reporterName={`${iss.reporter.firstname} ${iss.reporter.lastname}`}
												reporterRole={iss.reporter.role}
												reporterImg={iss.reporter.photoUrl ?? "no_pic"}
												assigneeUsername={iss.assignee.username}
												assigneeName={`${iss.assignee.firstname} ${iss.assignee.lastname}`}
												assigneeRole={iss.assignee.role}
												assigneeImg={iss.assignee.photoUrl ?? "no_pic"}
												dateCreated={`${
													new Date(iss.reportedAt).getMonth() + 1
												}-${new Date(iss.reportedAt).getDate()}-${new Date(
													iss.reportedAt,
												).getFullYear()}`}
												dueDate={`${
													new Date(iss.dueDate).getMonth() + 1
												}-${new Date(iss.dueDate).getDate()}-${new Date(
													iss.dueDate,
												).getFullYear()}`}
											/>
										</Fragment>
									);
								})
							) : (
								<></>
							)}
						</tbody>
					</table>
					{/* issue loading */}
					{issues == "loading" && parseInt(offset)! > issuesCount / 10 ? (
						<div className=" tw-w-full tw-h-max tw-min-w-[1100px]">
							<div className=" tw-w-full tw-h-max tw-mt-6 tw-flex tw-justify-start tw-items-center">
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]  tw-w-[15%] tw-h-[30px] tw-ms-2`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]  tw-w-[11%] tw-h-[30px] tw-ms-[2%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[13%] tw-h-[30px] tw-ms-[3%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[24%] tw-h-[30px] tw-ms-[2%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[24%] tw-h-[30px] tw-ms-[3%]`}></div>
							</div>
							<div className=" tw-w-full tw-h-max tw-mt-6 tw-flex tw-justify-start tw-items-center">
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]  tw-w-[15%] tw-h-[30px] tw-ms-2`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]  tw-w-[11%] tw-h-[30px] tw-ms-[2%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[13%] tw-h-[30px] tw-ms-[3%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[24%] tw-h-[30px] tw-ms-[2%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[24%] tw-h-[30px] tw-ms-[3%]`}></div>
							</div>
							<div className=" tw-w-full tw-h-max tw-mt-6 tw-flex tw-justify-start tw-items-center">
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]  tw-w-[15%] tw-h-[30px] tw-ms-2`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]  tw-w-[11%] tw-h-[30px] tw-ms-[2%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[13%] tw-h-[30px] tw-ms-[3%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[24%] tw-h-[30px] tw-ms-[2%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[24%] tw-h-[30px] tw-ms-[3%]`}></div>
							</div>
							<div className=" tw-w-full tw-h-max tw-mt-6 tw-flex tw-justify-start tw-items-center">
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]  tw-w-[15%] tw-h-[30px] tw-ms-2`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite]  tw-w-[11%] tw-h-[30px] tw-ms-[2%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[13%] tw-h-[30px] tw-ms-[3%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[24%] tw-h-[30px] tw-ms-[2%]`}></div>
								<div
									className={` tw-animate-[shimmer_1s_ease-in-out_infinite] dark:tw-animate-[darkshimmer_2s_ease-in-out_infinite] tw-w-[24%] tw-h-[30px] tw-ms-[3%]`}></div>
							</div>
						</div>
					) : (
						<></>
					)}
					{/* issue failed */}
					{issues == "failed" && parseInt(offset)! > issuesCount / 10 ? (
						<div className=" tw-w-full tw-h-max tw-flex tw-flex-col tw-justify-center tw-items-center">
							<p className=" tw-font-exo tw-text-gray-700 dark:tw-text-gray-400 tw-text-[20px] tw-px-4 tw-py-12">
								Unable to fetch issues. refresh the page to try again.
							</p>
						</div>
					) : (
						<></>
					)}
					{/* issue failed */}
					{numOfPages && parseInt(offset) > numOfPages ? (
						<div className=" tw-w-full tw-h-max tw-flex tw-flex-col tw-justify-center tw-items-center">
							<p className=" tw-font-exo tw-text-gray-700 dark:tw-text-gray-400 tw-text-[20px] tw-px-4 tw-py-12">
								INVALID ISSUES PAGE NUMBER...
							</p>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
			<div
				id="pagination_cont"
				className=" tw-w-full tw-h-max tw-min-h-[62px] tw-flex tw-items-center tw-justify-end tw-pe-6 tw-mt-4 tw-relative">
				{issues !== "failed" &&
				issues !== "loading" &&
				((issuesCount % 10 < 1 && parseInt(offset) <= issuesCount / 10) ||
					(issuesCount % 10 > 0 &&
						parseInt(offset) <= issuesCount / 10 + 1)) ? (
					<>
						<div
							id="pagination_wrapper"
							className=" tw-w-max tw-h-max tw-flex tw-justify-center tw-items-center">
							{/* prev page button */}
							{parseInt(offset) > 1 ? <BtnIssuesPaginationPrev /> : <></>}
							{/* page number buttons */}
							<div
								id="page_num_cont"
								className=" tw-w-max tw-h-max tw-mx-2"></div>

							{/* next page button */}
							{showNextPageBtn ? (
								<BtnIssuePaginationNext
									page={parseInt(offset)}
									projectKey={params.project_key}
									category={params.issues_category}
								/>
							) : (
								<></>
							)}
						</div>
						<div className=" tw-w-0 tw-h-0">
							{((): ReactNode => {
								setTimeout(() => {
									appendIssuesPaginationBtns(
										parseInt(offset),
										issuesCount,
										issueProps,
										params.project_key,
										params.issues_category,
									);
								}, 50);

								return <></>;
							})()}
						</div>
					</>
				) : (
					<></>
				)}
			</div>
			<div className=" tw-w-max tw-h-max tw-absolute tw-top-[4vh] tw-right-[30px]">
				<BtnCreateNewIssue />
				<CreateNewIssue />
			</div>
		</section>
	);
};

export default ProjectIssuesList;
export const dynamic = "force-dynamic";
