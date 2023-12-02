const ProjectDetailLeftPaneNavBtn = ({ label }: { label: string }) => {
	return (
		<div
			id="left_pane_btn_wrapper"
			className=" tw-w-full tw-h-max tw-mt-4">
			<button className=" tw-w-full tw-h-max tw-text-start tw-text-gray-800 dark:tw-text-gray-400">
				{label}
			</button>
		</div>
	);
};

export default ProjectDetailLeftPaneNavBtn;
