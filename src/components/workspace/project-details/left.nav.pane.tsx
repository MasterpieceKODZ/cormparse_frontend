import ProjectDetailLeftPaneNavBtn from "./left.pane.nav.btn";

const ProjectDetailsLeftNavPane = ({ name }: { name: string }) => {
	return (
		<section className=" tw-w-[300px] tw-min-h-full tw-border-r-[1.5px] tw-border-gray-300 dark:tw-border-r-gray-700">
			<h4 className=" tw-w-full tw-h-max tw-px-2 tw-truncate tw-font-exo tw-font-semibold tw-text-[17px] tw-text-gray-800 dark:tw-text-gray-400">
				{name}{" "}
			</h4>
			<div className=" tw-mt-5 tw-pl-4">
				<ProjectDetailLeftPaneNavBtn label="Issues" />
				<ProjectDetailLeftPaneNavBtn label="Components" />
				<ProjectDetailLeftPaneNavBtn label="Issues" />
			</div>
		</section>
	);
};

export default ProjectDetailsLeftNavPane;
