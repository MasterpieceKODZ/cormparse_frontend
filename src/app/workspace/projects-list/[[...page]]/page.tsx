/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import ButtonCreateNewProject from "@/ui_components/workspace/projects/btn.create.project";
import BtnProjectsPaginationNext from "@/ui_components/workspace/projects/btn.page.next";
import BtnProjectPaginationNum from "@/ui_components/workspace/projects/btn.page.num";
import BtnProjectsPaginationPrev from "@/ui_components/workspace/projects/btn.page.prev";
import FormProjectSearch from "@/ui_components/workspace/projects/form.project.search";
import BtnProjectTableHead from "@/ui_components/workspace/projects/btn.project.table.head";
import ProjectsTableItem from "@/ui_components/workspace/projects/projects.table.item";
import { projectsTableRowHead } from "@/tailwind_classname_utils/workspace";
import { Fragment, ReactNode, createElement, useEffect, useState } from "react";
import { Project } from "@/db.schema.types";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { refreshProjects } from "@/ui_controllers/workspace/projects/table/refresh.projects.data";
import { fetchUserProjectsCount } from "@/utils/fetch.user.projects.count";
import { appendPageNumBtn } from "@/ui_controllers/workspace/projects/table/load.page.num.btns";

const Projects = ({ params }: { params: { page: string[] } }) => {
	const [projects, setProjects] = useState<Project[] | "loading" | "failed">(
		"loading",
	);
	const [email, setEmail] = useState<string>("");
	const router = useRouter();

	const offset = params.page ? params.page[1] : null;

	const [projectsCount, setProjectsCount] = useState(0);

	const [showNextPageBtn, setShowNextPageBtn] = useState(true);

	useEffect(() => {
		getSession().then((ses) => {
			if (ses?.user) {
				setEmail(ses.user.email as string);

				if (offset) {
					// use pagination to fetch the next batch of projects
					fetch(`/api/fetch-project-list`, {
						method: "POST",
						body: JSON.stringify({
							email: ses.user.email,
							offset,
						}),
						headers: {
							"Content-Type": "application/json",
							"X-Api-Key":
								"kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
						},
						cache: "no-store",
					})
						.then(async (res) => {
							// ************* fetch user's projects count ****************
							await fetchUserProjectsCount(
								ses.user?.email as string,
								setProjectsCount,
								setShowNextPageBtn,
							);

							// ************* -------------------------- *****************

							const projs = await res.json();

							console.log(projs);

							if (projs) {
								setProjects(projs);
							} else {
								setProjects("failed");
							}
						})
						.catch(() => {
							setProjects("failed");
						});
				} else {
					// fetch first 10 projects
					fetch(`/api/fetch-project-list`, {
						method: "POST",
						body: JSON.stringify({
							email: ses.user.email,
						}),
						headers: {
							"Content-Type": "application/json",
							"X-Api-Key":
								"kjsopdshfk46873ndsjk0388kdmdsn8y32y85xnjsd873jd7yt4f",
						},
						cache: "no-store",
					})
						.then(async (res) => {
							// ************* fetch user's projects count ****************
							fetchUserProjectsCount(
								ses.user?.email as string,
								setProjectsCount,
								setShowNextPageBtn,
							);

							// ************* -------------------------- *****************
							const projs = await res.json();

							console.log(projs);

							if (projs) {
								setProjects(projs);
							} else {
								setProjects("failed");
							}
						})
						.catch(() => {
							setProjects("failed");
						});

					setShowNextPageBtn(true);
				}
			} else {
				router.replace(`${location.origin}/auth/login`);
			}
		});
	}, []);

	return (
		<section className=" tw-w-full tw-h-full tw-py-10 tw-px-[18px] xsm:tw-px-[30px] md:tw-px-[50px] tw-flex tw-flex-col tw-justify-start tw-items-start ">
			<h3 className=" tw-font-exo tw-font-semibold tw-text-[25px] tw-text-start tw-text-gray-800 dark:tw-text-gray-400 tw-mt-5">
				Projects
			</h3>
			<div className=" tw-w-full tw-h-max tw-mt-3 tw-flex tw-justify-start tw-items-center">
				<FormProjectSearch />
				<div className="tw-basis-full tw-shrink tw-inline-flex tw-justify-end">
					<ButtonCreateNewProject />
				</div>
			</div>

			<div className=" tw-w-full tw-basis-full tw-shrink tw-overflow-auto tw-relative tw-mt-12 tw-pb-1">
				<table className=" tw-w-full tw-min-w-[1100px] tw-table-auto">
					<thead className=" tw-h-max  tw-bg-white dark:tw-bg-gray-900 tw-sticky tw-top-0 tw-z-30">
						<tr className=" tw-border-b-2 tw-border-gray-500 tw-py-3">
							<th className={`${projectsTableRowHead}`}>
								<BtnProjectTableHead label="Name" />
							</th>
							<th className={`${projectsTableRowHead}`}>
								<BtnProjectTableHead label="Key" />
							</th>
							<th className={`${projectsTableRowHead}`}>
								<BtnProjectTableHead label="Lead" />
							</th>
							<th className={`${projectsTableRowHead}`}>
								<BtnProjectTableHead label="Date Created" />
							</th>
							<th className={`${projectsTableRowHead}`}>
								<BtnProjectTableHead label="Date Updated" />
							</th>
							<th className={`${projectsTableRowHead}`}> </th>
						</tr>
					</thead>
					{projects !== "failed" && projects !== "loading" ? (
						<tbody>
							{(projects as Project[]).map((prj) => {
								if (prj) {
									return (
										<Fragment key={prj.id}>
											<ProjectsTableItem
												name={prj.name}
												projectKey={prj.key}
												leadUsername={prj.lead.username}
												leadFullname={`${prj.lead.firstname} ${prj.lead.lastname}`.toUpperCase()}
												leadRole={prj.lead.role}
												leadImg={prj.lead.photoUrl ?? "no_pic"}
												dateCreated={`${
													new Date(prj.createdAt).getMonth() + 1
												}-${new Date(prj.createdAt).getDate()}-${new Date(
													prj.createdAt,
												).getFullYear()}`}
												dateUpdate={
													prj.updatedAt
														? `${
																new Date(prj.updatedAt).getMonth() + 1
														  }-${new Date(prj.updatedAt).getDate()}-${new Date(
																prj.updatedAt,
														  ).getFullYear()}`
														: "-"
												}
											/>
										</Fragment>
									);
								} else {
									return <Fragment key={0}></Fragment>;
								}
							})}
						</tbody>
					) : (
						<></>
					)}
				</table>
				{/* projects data loading failed */}

				{projects === "failed" ? (
					<div className=" tw-w-full tw-h-max tw-flex tw-flex-col tw-justify-center tw-items-center">
						<p className=" tw-font-exo tw-text-gray-700 dark:tw-text-gray-400 tw-text-[20px] tw-px-4 tw-py-12">
							Unable to fetch projects. click the button below to refresh the
							table.
						</p>
						<button
							className=" tw-w-max tw-h-max tw-px-5 tw-py-2 tw-rounded-lg tw-bg-blue-700 tw-text-white tw-font-russo-one tw-text-[18px] tw-text-center"
							onClick={() =>
								refreshProjects(
									email,
									setProjects,
									setProjectsCount,
									setShowNextPageBtn,
									projectsCount,
								)
							}>
							Refresh Table
						</button>
					</div>
				) : (
					<></>
				)}
				{/* projects data loading */}
				{projects == "loading" ? (
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
			</div>
			<div
				id="pagination_cont"
				className=" tw-w-full tw-h-max tw-min-h-[62px] tw-flex tw-items-center tw-justify-end tw-pe-6 tw-mt-4">
				{projects !== "failed" &&
				projects !== "loading" &&
				projectsCount > 0 ? (
					<>
						<div
							id="pagination_wrapper"
							className=" tw-w-max tw-h-max tw-flex tw-justify-center tw-items-center">
							{/* prev page button */}
							{offset ? <BtnProjectsPaginationPrev /> : <></>}
							{/* page number buttons */}
							<div
								id="page_num_cont"
								className=" tw-w-max tw-h-max tw-mx-2"></div>

							{/* next page button */}
							{showNextPageBtn ? <BtnProjectsPaginationNext /> : <></>}
						</div>
						<div className=" tw-w-0 tw-h-0">
							{((): ReactNode => {
								setTimeout(() => {
									appendPageNumBtn(offset, projectsCount);
								}, 50);

								return <></>;
							})()}
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</section>
	);
};

export default Projects;
