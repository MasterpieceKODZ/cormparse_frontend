import ProjectDetailLeftPaneNavBtn from "./left.pane.nav.btn";

const ProjectDetailsLeftNavPane = ({ name }: { name: string }) => {
	return (
		<section className=" tw-w-[300px] tw-h-full tw-border-r-[1.5px] tw-pt-8 tw-border-gray-300 dark:tw-border-r-gray-700">
			<h4 className=" tw-w-full tw-h-max tw-ps-4 tw-pe-1 tw-truncate tw-font-exo tw-font-bold tw-text-[22px] tw-text-gray-800 dark:tw-text-gray-400">
				{name}{" "}
			</h4>
			<div className=" tw-mt-[85px] tw-pl-8">
				<ProjectDetailLeftPaneNavBtn label="Issues" />
				<ProjectDetailLeftPaneNavBtn label="Components" />
				<ProjectDetailLeftPaneNavBtn label="People" />
				<ProjectDetailLeftPaneNavBtn label="Teams" />
				<ProjectDetailLeftPaneNavBtn label="Details" />
			</div>
		</section>
	);
};

export default ProjectDetailsLeftNavPane;
