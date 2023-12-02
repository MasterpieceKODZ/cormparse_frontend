import ButtonCreateNewProject from "@/components/workspace/projects/btn.create.project";
import ProjectsPaginationNextBtn from "@/components/workspace/projects/page.next.btn";
import ProjectPaginationNumBtn from "@/components/workspace/projects/page.num.btn";
import ProjectsPaginationPrevBtn from "@/components/workspace/projects/page.prev.btn";
import ProjectSearchForm from "@/components/workspace/projects/project.search.form";
import ProjectTableHeadBtn from "@/components/workspace/projects/project.table.head.btn";
import ProjectsTableItem from "@/components/workspace/projects/projects.table.item";
import { projectsTableRowHead } from "@/tailwind_classname_utils/workspace";

const Projects = () => {
	return (
		<section className=" tw-w-full tw-min-h-full tw-py-10 tw-px-[18px]  xsm:tw-px-[30px] md:tw-px-[50px] tw-flex tw-flex-col tw-justify-start tw-items-start ">
			<h3 className=" tw-font-exo tw-font-semibold tw-text-[25px] tw-text-start tw-text-gray-800 dark:tw-text-gray-400 tw-mt-5">
				Projects
			</h3>
			<div className=" tw-w-full tw-h-max tw-mt-3 tw-flex tw-justify-start tw-items-center">
				<ProjectSearchForm />
				<div className="tw-basis-full tw-shrink tw-inline-flex tw-justify-end">
					<ButtonCreateNewProject />
				</div>
			</div>

			<div className=" tw-w-full  tw-basis-full tw-shrink tw-overflow-auto tw-mt-12 tw-pt-10 tw-pb-1">
				<table className=" tw-w-full tw-min-w-[1100px] tw-table-auto">
					<thead>
						<tr className=" tw-border-b-2 tw-border-gray-500 tw-py-3">
							<th className={`${projectsTableRowHead}`}>
								<ProjectTableHeadBtn label="Name" />
							</th>
							<th className={`${projectsTableRowHead}`}>
								<ProjectTableHeadBtn label="Key" />
							</th>
							<th className={`${projectsTableRowHead}`}>
								<ProjectTableHeadBtn label="Lead" />
							</th>
							<th className={`${projectsTableRowHead}`}>
								<ProjectTableHeadBtn label="Date Created" />
							</th>
							<th className={`${projectsTableRowHead}`}>
								<ProjectTableHeadBtn label="Date Updated" />
							</th>
							<th className={`${projectsTableRowHead}`}> </th>
						</tr>
					</thead>
					<tbody>
						<ProjectsTableItem
							name="Project Cobra Raven Lone Wolf Camel nkjgjf khkh kjdsflkj dsfjldf fsmflf flsflskf fsjflsf fsmflsf csmflsf sflsmlfsmf slmflsmfs "
							projectKey="SDDFREF-12"
							leadName="MasterpieceKODZ ManOfValor"
							leadImg="/logo.png"
							dateCreated="15-12-2023"
							dateUpdate="10-01-2024"
						/>
						<ProjectsTableItem
							name="Project Cobra Raven Lone Wolf Camel"
							projectKey="SDDFREF-12"
							leadName="MasterpieceKODZ ManOfValor"
							leadImg="/logo.png"
							dateCreated="15-12-2023"
							dateUpdate="10-01-2024"
						/>
					</tbody>
				</table>
			</div>
			<div
				id="pagination_cont"
				className=" tw-w-full tw-h-max tw-flex tw-items-center tw-justify-end tw-pe-6 tw-mt-4">
				<div
					id="pagination_wrapper"
					className=" tw-w-max tw-h-max tw-flex tw-justify-center tw-items-center">
					<ProjectsPaginationPrevBtn />
					<ProjectPaginationNumBtn pageNum="1" />
					<ProjectPaginationNumBtn pageNum="2" />
					<ProjectPaginationNumBtn pageNum="3" />
					<ProjectPaginationNumBtn pageNum="4" />
					<ProjectPaginationNumBtn pageNum="200" />
					<ProjectsPaginationNextBtn />
				</div>
			</div>
		</section>
	);
};

export default Projects;
