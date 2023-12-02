import CreateProjectForm from "@/components/workspace/projects/create.project.form";

const CreateNewProject = () => {
	return (
		<section className=" tw-w-full tw-min-h-full">
			<div className=" tw-w-max tw-h-full tw-block tw-mx-auto">
				<h1
					tabIndex={1}
					className=" tw-text-center tw-text-[20px] sm:tw-text-[25px] tw-mt-[100px] tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400">
					CREATE NEW PROJECT
				</h1>
				<p
					tabIndex={1}
					className=" tw-text-center tw-text-[12px] sm:tw-text-[15px] tw-font-exo tw-text-gray-700 dark:tw-text-gray-500">
					Edit project details anytime in project settings
				</p>
				<CreateProjectForm />
			</div>
		</section>
	);
};

export default CreateNewProject;
