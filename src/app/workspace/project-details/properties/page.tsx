import QuillEditor from "@/components/quill.editor";

const ProjectProperties = () => {
	return (
		<section className=" tw-w-full tw-h-full tw-max-h-full tw-overflow-y-auto tw-ps-[20%] tw-pt-[65px] tw-pe-4">
			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-6 tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Name
			</p>
			<p className=" tw-font-exo tw-mt-2 tw-text-[20px] tw-text-gray-800 dark:tw-text-gray-400">
				Project Massive Turn-Out
			</p>
			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-8 tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Key
			</p>
			<p className=" tw-font-exo tw-mt-2 tw-text-[20px] tw-text-gray-800 dark:tw-text-gray-400">
				PMT-2215
			</p>
			<p className=" tw-font-exo tw-font-semibold tw-text-start tw-mt-8 tw-text-[14px] tw-text-gray-800 dark:tw-text-gray-400">
				Description
			</p>
			<div>
				<QuillEditor />
			</div>
		</section>
	);
};

export default ProjectProperties;
