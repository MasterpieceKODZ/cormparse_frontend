import ButtonCreateNewProject from "@/ui_components/workspace/projects/btn.create.project";
import BtnProjectsPaginationNext from "@/ui_components/workspace/projects/btn.page.next";
import BtnProjectPaginationNum from "@/ui_components/workspace/projects/btn.page.num";
import BtnProjectsPaginationPrev from "@/ui_components/workspace/projects/btn.page.prev";
import FormProjectSearch from "@/ui_components/workspace/projects/form.project.search";
import BtnProjectTableHead from "@/ui_components/workspace/projects/btn.project.table.head";
import ProjectsTableItem from "@/ui_components/workspace/projects/projects.table.item";
import { projectsTableRowHead } from "@/tailwind_classname_utils/workspace";

const Projects = () => {
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
					<thead className=" tw-h-max  tw-bg-white dark:tw-bg-gray-900 tw-sticky tw-top-0">
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
						<ProjectsTableItem
							name="Project Cobra Raven Lone Wolf Camel"
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
						<ProjectsTableItem
							name="Project Cobra Raven Lone Wolf Camel"
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
					<BtnProjectsPaginationPrev />
					<BtnProjectPaginationNum pageNum="1" />
					<BtnProjectPaginationNum pageNum="2" />
					<BtnProjectPaginationNum pageNum="3" />
					<BtnProjectPaginationNum pageNum="4" />
					<BtnProjectPaginationNum pageNum="200" />
					<BtnProjectsPaginationNext />
				</div>
			</div>
		</section>
	);
};

export default Projects;
