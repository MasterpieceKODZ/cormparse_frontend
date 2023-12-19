import FormCreateProject from "@/ui_components/workspace/projects/form.create.project";

const CreateNewProject = () => {
	return (
		<section className=" tw-w-full tw-min-h-full">
			<div className=" tw-w-max tw-h-full tw-block tw-mx-auto tw-pt-[100px]">
				<h1
					tabIndex={1}
					className=" tw-text-center tw-text-[20px] sm:tw-text-[25px] tw-font-exo tw-text-mygrey-default dark:tw-text-gray-400">
					CREATE NEW PROJECT
				</h1>
				<p
					tabIndex={1}
					className=" tw-text-center tw-text-[12px] sm:tw-text-[15px] tw-font-exo tw-text-gray-700 dark:tw-text-gray-500">
					Edit project details anytime in project settings
				</p>
				<FormCreateProject />
			</div>
		</section>
	);
};

export default CreateNewProject;
